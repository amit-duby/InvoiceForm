const User = require("../model/userModel");
const AppError = require("../utill/apperror");
const sendToken = require("../utill/jwtToken");
const sendEmail = require("../utill/sendEmail");
const crypto = require("crypto");
exports.UserController = async (req, res, next) => {
  try {
    const { name, email, password, country, phone } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      country,
      phone,
    });
    console.log(user);
    sendToken(user, 200, res);
    // res.status(200).json({
    //   status: "success",
    //   data: user,
    // });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

// login User
exports.LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      throw new AppError("Please Enter Email & Password", 400);
    }

    const user = await User.findOne({ email }).select("+password");
    console.log(user);
    if (!user) {
      throw new AppError("Invalid email or password", 400);
    }
    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      throw new AppError("Invalid email or password", 401);
    }

    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

// Logout User

exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};

exports.GetAllUser = async (req, res, next) => {
  try {
    const getUsers = await User.find();
    if (!getUsers) {
      throw new AppError("user does not find", 400);
    }
    res.status(201).json({
      status: "success",
      data: getUsers,
    });
  } catch (error) {
    next(error);
  }
};

exports.GetUserById = async (req, res, next) => {
  try {
    const userById = await User.findById(req.params.id);
    if (!userById) {
      throw new AppError("user id does not find", 402);
    }
    console.log(userById, "userByid");
    res.status(200).json({
      status: "success",
      data: userById,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUserById = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      isActive: true,
    });
    res.status(200).json({
      status: "success",
      data: updateUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      throw new AppError("user id does not define", 400);
    }
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

// forget-password api
exports.forgetPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `http://localhost:3000/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Invoice Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent  successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new AppError(error.message, 500));
  }
};
// reset-password
exports.resetPassword = async (req, res, next) => {
  try {
    // Hash the token from the request parameters
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    // Find the user with the valid token and non-expired reset token
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    // If no user found, return error
    if (!user) {
      return next(
        new AppError("Reset Password Token is invalid or has expired", 400)
      );
    }

    // Check if passwords match
    if (req.body.password !== req.body.confirmPassword) {
      return next(new AppError("Passwords do not match", 400));
    }

    // Update user's password
    user.password = req.body.password;
    // Clear the reset token fields
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    // Save the updated user
    await user.save();

    // Send JWT token
    sendToken(user, 200, res);
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

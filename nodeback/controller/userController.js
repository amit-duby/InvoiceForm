const User = require("../model/userModel");
const AppError = require("../utill/apperror");
const sendToken = require("../utill/jwtToken");

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

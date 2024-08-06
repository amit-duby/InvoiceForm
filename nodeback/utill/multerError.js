const multer = require("multer");

// Multer middleware to handle 'Field name missing' and 'Multipart missing' errors
const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ error: "Too many files uploaded" });
    }
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File size limit exceeded" });
    }
    if (err.code === "LIMIT_PART_COUNT") {
      return res.status(400).json({ error: "Too many parts" });
    }
    if (err.code === "LIMIT_FIELD_KEY") {
      return res.status(400).json({ error: "Field name limit exceeded" });
    }
    if (err.code === "LIMIT_FIELD_VALUE") {
      return res.status(400).json({ error: "Field value limit exceeded" });
    }
    if (
      err.code === "FIELD_NAME_MISSING" ||
      err.code === "MULTER_MISSING_FIELD_NAME"
    ) {
      return res.status(400).json({ error: "Field name missing" });
    }
    if (err.code === "LIMIT_PART_COUNT") {
      return res.status(400).json({ error: "Too many parts" });
    }
  }
  next(err);
};

module.exports = multerErrorHandler;

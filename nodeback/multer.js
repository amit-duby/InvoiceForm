import multer from "multer";

const storage = multer.diskStorage({});

const upload = multer({
  storage,
  // limits: { fileSize: 1024 * 1024 * 5 }, // 5mb;

  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
      cb(new Error("file is not supported"), false);
      return;
    } else {
      cb(null, true);
    }
  },
});

export default upload;

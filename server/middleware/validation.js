const { validationResult } = require("express-validator");

const validateErrorMessage = (req, res, next) => {
  const validation = validationResult(req);

  if (!validation.isEmpty()) {
    return res.status(400).json({
      message: validation.errors.map((e) => e.msg),
    });
  }

  next();
};

module.exports = validateErrorMessage;

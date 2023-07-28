const { check } = require("express-validator");

exports.propertyBodyParams = [
  check("name").trim().notEmpty().withMessage("Name can't be empty"),
  check("image").trim().isURL().withMessage("Not a valid image URL"),
  check("location").trim().notEmpty().withMessage("Location is not valid"),
];

exports.propertyBodyParamsForUpdate = [
  check("name").trim().notEmpty().optional().withMessage("Name can't be empty"),
  check("image").trim().isURL().optional().withMessage("Not a valid image URL"),
  check("location")
    .trim()
    .notEmpty()
    .optional()
    .withMessage("Location is not valid"),
];

exports.propertyQueryParam = [
  check("id").trim().isMongoId().withMessage("Id is not valid"),
];

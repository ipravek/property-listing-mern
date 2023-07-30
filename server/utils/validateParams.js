const { check } = require("express-validator");

exports.propertyBodyParams = [
  check("name").trim().notEmpty().withMessage("Name can't be empty"),
  check("image").trim().isURL().withMessage("Not a valid image URL"),
  check("location").trim().notEmpty().withMessage("Location is not valid"),
];

exports.propertyBodyParamsForUpdate = [
  check("name").trim().optional().notEmpty().withMessage("Name can't be empty"),
  check("image").trim().optional().isURL().withMessage("Not a valid image URL"),
  check("location")
    .trim()
    .optional()
    .notEmpty()
    .withMessage("Location is not valid"),
];

exports.propertyQueryParam = [
  check("id").trim().isMongoId().withMessage("Id is not valid"),
];

exports.propertyQueryParamForList = [
  check("page").trim().isInt().optional().withMessage("Page should be numeric"),
  check("limit")
    .trim()
    .isInt()
    .optional()
    .withMessage("Limit should be numeric"),
];

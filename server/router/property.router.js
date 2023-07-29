const express = require("express");
const router = express.Router();
const propertyController = require("../controller/property.controller");
const validateErrorMessage = require("../middleware/validation");
const {
  propertyBodyParams,
  propertyQueryParam,
  propertyBodyParamsForUpdate,
} = require("../utils/validateParams");

// REST End-points
// List
router.route("/").get(propertyController.list);

// View
router
  .route("/:id")
  .get(propertyQueryParam, validateErrorMessage, propertyController.view);

// Delete
router
  .route("/:id")
  .delete(propertyQueryParam, validateErrorMessage, propertyController.del);

// Create
router
  .route("/")
  .post(propertyBodyParams, validateErrorMessage, propertyController.create);

// Update
router
  .route("/:id")
  .put(
    propertyQueryParam,
    propertyBodyParamsForUpdate,
    validateErrorMessage,
    propertyController.update
  );

module.exports = router;

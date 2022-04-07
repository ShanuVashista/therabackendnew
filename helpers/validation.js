const { isString } = require("lodash");
const { validationResult } = require("express-validator");
const { error } = require("./response");
const validate = (validations) => {
    return async (req, res, next) => {
      await validations.reduce(async (promise, validation) => {
        await promise;
        return validation.run(req);
      }, Promise.resolve());
  
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
  
      const errorsArray = errors.array();
      res.json(error(errorsArray[0].msg, errorsArray));
    };
  };




  module.exports={
      validate
  }
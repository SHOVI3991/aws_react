const { check } = require('express-validator');

exports.userRegisterValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid Email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be atleast 6 characters long'),
    check('categories')
        .isLength({ min: 6 })
        .withMessage('Pick atleast one category')    
];

exports.userLoginValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6})
        .withMessage('Password must be 6 characters long')
];

exports.forgotPasswordValidator = [ 
    check('email')
        .isEmail()
        .withMessage('Must be a valid Email address')
       
];

exports.resetPasswordValidator = [
    check('newPassword')
        .isLength({ min: 6 })
        .withMessage('Password must be atleast 6 characters long'),
    check('resetPasswordLink')
        .not()
        .isEmail()
        .withMessage('Token is required')    
];

exports.userUpdateValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),   
];






"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCodeRequest = void 0;
const validateCodeRequest = (req, res, next) => {
    const { code } = req.body;
    if (!code || typeof code !== 'string') {
        res.status(400).json({
            error: 'Invalid request: code must be provided as a string'
        });
        return;
    }
    if (code.length > 5000) {
        res.status(400).json({
            error: 'Code length exceeds maximum limit of 5000 characters'
        });
        return;
    }
    next();
};
exports.validateCodeRequest = validateCodeRequest;

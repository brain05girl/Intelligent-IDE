"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const code_controller_1 = require("../controllers/code.controller");
const validation_middleware_1 = require("../middleware/validation.middleware");
const router = (0, express_1.Router)();
// Code completion endpoint
router.post('/complete', validation_middleware_1.validateCodeRequest, code_controller_1.codeCompletion);
// Bug analysis endpoint
router.post('/analyze', validation_middleware_1.validateCodeRequest, code_controller_1.analyzeBugs);
// Test generation endpoint
router.post('/test', validation_middleware_1.validateCodeRequest, code_controller_1.generateTests);
exports.default = router;

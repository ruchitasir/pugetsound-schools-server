"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name ASSIGNMENT
 * @todo Add
 */
var mongoose = __importStar(require("mongoose"));
var mongoose_1 = require("mongoose");
var AssignmentSchema = new mongoose_1.Schema({
    class: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    teacher: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    students: {
        type: [{
                id: mongoose_1.Schema.Types.ObjectId,
                grade: String,
                answer: String
            }],
        default: []
    },
    question: { type: String, required: true },
    dateAssigned: { type: Date, default: null },
    dateDue: { type: Date, default: null },
});
module.exports = mongoose.model('Assignment', AssignmentSchema);

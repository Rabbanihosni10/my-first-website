"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getQuizSummary = (scores) => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;
    if (total === 0) {
        return { total, average: 0 };
    }
    return { total, average };
};
//# sourceMappingURL=task5.js.map
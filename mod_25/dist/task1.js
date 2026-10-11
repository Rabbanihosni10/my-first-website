"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBatteryStatus = (parcentage) => {
    if (parcentage >= 0 && parcentage <= 20) {
        return "Low";
    }
    else if (parcentage >= 21 && parcentage <= 50) {
        return "Medium";
    }
    else if (parcentage >= 51 && parcentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
};
//# sourceMappingURL=task1.js.map
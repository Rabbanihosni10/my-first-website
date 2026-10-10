"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateStorageUsage = (currentUsageMB, action) => {
    if (action.type === "upload") {
        return currentUsageMB + action.sizeMB;
    }
    return Math.max(0, currentUsageMB - action.sizeMB);
};
console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
// 2500
console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
// 1200
// usage floor at zero:
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
// 0
//# sourceMappingURL=pc9.js.map
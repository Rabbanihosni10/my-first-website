"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderNotification = (notification) => {
    if (notification.type === "like") {
        return `${notification.fromUser} liked your post.`;
    }
    else {
        if (notification.actionUrl) {
            return `System: ${notification.message}. (Tap to view)`;
        }
        return `System: ${notification.message}.`;
    }
};
console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
// "Aisha liked your post."
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
// "System: Maintenance complete."
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
// "System: Your subscription is expiring soon. (Tap to view)"
//# sourceMappingURL=pc8.js.map
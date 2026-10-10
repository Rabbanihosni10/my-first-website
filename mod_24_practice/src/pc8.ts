interface LikeNotification{
    type:"like";
    fromUser:string;
}
interface SystemNotification{
    type:"system";
    message:string;
    actionUrl?:string;
}

const renderNotification=(notification:LikeNotification | SystemNotification):string=>{
    if (notification.type==="like"){
        return `${notification.fromUser} liked your post.`;
    }
    else{
        if(notification.actionUrl){
            return `System: ${notification.message}. (Tap to view)`;
        }
        return `System: ${notification.message}`;
    }
}



console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
// "Aisha liked your post."
 
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
// "System: Maintenance complete."
 
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
// "System: Your subscription is expiring soon. (Tap to view)"

interface Booking{
    name:string;
    guests:number;
    time:string;
}
const formatBookingConfirmation=(booking:Booking):string=>{
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}
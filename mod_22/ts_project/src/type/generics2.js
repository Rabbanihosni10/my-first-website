"use strict";
// function useState(initialValue){
//     let value=initialValue;
//     function setValue(newValue){
//         value=newValue;
//     }
//     // return value;
//     return [value, setValue];
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const [counter, setCounter]=useState(0);
// console.log(counter);
// console.log(setCounter);
const useState = (initialValue) => {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
};
useState("O");
useState(0);
useState(true);
useState({ email: '', isLoggedIn: false });
useState(null);
//# sourceMappingURL=generics2.js.map
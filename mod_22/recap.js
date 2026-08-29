"use strict";
/**
 * 1. Varible Basic Types
 * 2. array
 * 3. Function
 * 4. Object
 * 5. Some more basic types
 */
const destination = "Saint Martin";
const helicopters = 33;
const countries = ["France", "Italy", "Spain", "Germany"];
function buyBook(title, price, discount) {
    if (discount === undefined) {
        discount = 0;
    }
    return `The Book ${title} costs ${price - discount}`;
}
const tobarok = {
    name: "Honu",
    age: 32
};
//union string | number | boolean |null

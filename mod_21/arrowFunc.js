"use strict";
const getLargerName = (person1, person2) => {
    if (person1.length > person2.length) {
        return person1;
    }
    return person2;
};

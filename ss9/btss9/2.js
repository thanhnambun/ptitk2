"use strict";
function validatePerson(user) {
    if (
    // user.hasOwnProperty("name") && typeof user.name === "string",
    // user.hasOwnProperty("age") && typeof user.age === "number",
    // typeof user.address === "object" &&
    //   user.address.hasOwnProperty("street") &&
    //   typeof user.address.street === "string" &&
    //   user.address.hasOwnProperty("city") &&
    //   typeof user.address.city === "string" &&
    //   user.address.hasOwnProperty("country") &&
    //   typeof user.address.country === "string"
    user.hasOwnProperty("name") &&
        user.hasOwnProperty("age") &&
        user.hasOwnProperty("address") &&
        user.address.hasOwnProperty("street") &&
        user.address.hasOwnProperty("city") &&
        user.address.hasOwnProperty("country")) {
        return true;
    }
    return false;
}
const invalidPerson = {
    name: "Bob",
    age: "30",
    address: {
        street: "456 Elm Street",
        city: "Los Angeles",
    },
};
console.log(validatePerson(invalidPerson));

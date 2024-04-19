"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 0] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 2] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 3] = "Thursday";
    WeekDays[WeekDays["Friday"] = 4] = "Friday";
    WeekDays[WeekDays["Saturday"] = 5] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 6] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log("Ngày trong tuần:");
console.log("Monday:", WeekDays.Monday);
console.log("Tuesday:", WeekDays.Tuesday);
console.log("Wednesday:", WeekDays.Wednesday);
console.log("Thursday:", WeekDays.Thursday);
console.log("Friday:", WeekDays.Friday);
console.log("Saturday:", WeekDays.Saturday);
console.log("Sunday:", WeekDays.Sunday);

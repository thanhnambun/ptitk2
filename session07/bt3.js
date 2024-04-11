"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["MONDAY"] = 0] = "MONDAY";
    WeekDays[WeekDays["TUESDAY"] = 1] = "TUESDAY";
    WeekDays[WeekDays["WEDNESDAY"] = 2] = "WEDNESDAY";
    WeekDays[WeekDays["THURSDAY"] = 3] = "THURSDAY";
    WeekDays[WeekDays["FRIDAY"] = 4] = "FRIDAY";
    WeekDays[WeekDays["SATURDAY"] = 5] = "SATURDAY";
    WeekDays[WeekDays["SUNDAY"] = 6] = "SUNDAY";
})(WeekDays || (WeekDays = {}));
function printWeekDays() {
    for (let day in WeekDays) {
        console.log(day);
    }
}
printWeekDays();

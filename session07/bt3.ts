enum WeekDays {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

function printWeekDays() {
    for (let day in WeekDays) {
            console.log(day);
    }
}

printWeekDays();

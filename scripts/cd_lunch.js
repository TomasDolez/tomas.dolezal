const countDownLunch = () => {

    const d = document;
    const daysElement = d.querySelector('.lunch_days');
    const hoursElement = d.querySelector('.lunch_hours');
    const minutesElement = d.querySelector('.lunch_minutes');
    const secondsElement = d.querySelector('.lunch_seconds');
    let countdown;

    function getNextLunchTime() {
        const now = new Date();
        const dayOfWeek = now.getDay();
        let daysUntilNextLunch;

        if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
            if (now.getHours() < 11) {
                // If it's today and before 11 AM, countdown to today at 11 AM
                daysUntilNextLunch = 0;
            } else {
                // Otherwise, countdown to tomorrow at 11 AM
                daysUntilNextLunch = 1;
            }
        } else if (dayOfWeek === 6) { // Saturday
            // Countdown to next Monday at 11 AM
            daysUntilNextLunch = 2;
        } else if (dayOfWeek === 0) { // Sunday
            // Countdown to next Monday at 11 AM
            daysUntilNextLunch = 1;
        }

        const nextLunch = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilNextLunch, 11, 0, 0);
        console.log(`Next lunch date and time: ${nextLunch}`);
        return nextLunch.getTime();
    }

    function timer() {
        const then = getNextLunchTime();

        countdown = setInterval(() => {
            const now = Date.now();
            const secondsLeft = Math.round((then - now) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                timer(); // Restart the countdown
                return;
            }

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
        secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }

    timer();
}

/*
  start countdown
  countdown to next Monday 12:00 PM and repeat weekly
*/
countDownLunch();
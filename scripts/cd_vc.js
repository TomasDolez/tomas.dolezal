const countDownPoland = (targetDate) => {

    const d = document;
    const daysElement = d.querySelector('.vc_days');
    const hoursElement = d.querySelector('.vc_hours');
    const minutesElement = d.querySelector('.vc_minutes');
    const secondsElement = d.querySelector('.vc_seconds');
    let countdown;

    function timer(targetDate) {
        const then = new Date(targetDate).getTime();

        countdown = setInterval(() => {
            const now = Date.now();
            const secondsLeft = Math.round((then - now) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
        secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }

    timer(targetDate);
}

/*
start countdown
enter target date in the format 'YYYY-MM-DDTHH:MM:SS'
for example '2024-12-31T23:59:59'
*/
countDownPoland('2024-07-17T06:00:00');
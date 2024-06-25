const countDownAlignment = () => {
    const d = document;
    const daysElement = d.querySelector('.alignment_days');
    const hoursElement = d.querySelector('.alignment_hours');
    const minutesElement = d.querySelector('.alignment_minutes');
    const secondsElement = d.querySelector('.alignment_seconds');
    let countdown;

    function getNextTargetDayTime() {
        const now = new Date();
        const dayOfWeek = now.getDay();
        let daysUntilNextTarget;

        if (dayOfWeek === 4 && (now.getHours() < 12 || (now.getHours() === 12 && now.getMinutes() < 30))) {
            // If it's Thursday before 12:30 PM, countdown to today at 12:30 PM
            daysUntilNextTarget = 0;
        } else {
            // Calculate days until next Thursday
            daysUntilNextTarget = (11 - dayOfWeek) % 7 || 7; // Ensure it always counts forward
        }

        const nextTargetDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilNextTarget, 12, 30, 0);
        console.log(`Next target date and time: ${nextTargetDay}`);
        return nextTargetDay.getTime();
    }

    function timer() {
        const then = getNextTargetDayTime();

        countdown = setInterval(() => {
            const now = Date.now();
            const secondsLeft = Math.round((then - now) / 1000);

            if(secondsLeft <= 0) {
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
  Start countdown
  Countdown to next Thursday 12:30 PM and repeat weekly
*/
countDownAlignment();

// const countDownClock = (targetDate) => {
  
//   const d = document;
//   const daysElement = d.querySelector('.days');
//   const hoursElement = d.querySelector('.hours');
//   const minutesElement = d.querySelector('.minutes');
//   const secondsElement = d.querySelector('.seconds');
//   let countdown;

//   function timer(targetDate) {
//     const then = new Date(targetDate).getTime();

//     countdown = setInterval(() => {
//       const now = Date.now();
//       const secondsLeft = Math.round((then - now) / 1000);

//       if(secondsLeft <= 0) {
//         clearInterval(countdown);
//         return;
//       };

//       displayTimeLeft(secondsLeft);

//     }, 1000);
//   }

//   function displayTimeLeft(seconds) {
//     daysElement.textContent = Math.floor(seconds / 86400);
//     hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
//     minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
//     secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
//   }

//   timer(targetDate);
// }

// /*
// start countdown
// enter target date in the format 'YYYY-MM-DDTHH:MM:SS'
// for example '2024-12-31T23:59:59'
// */
// countDownClock('2024-06-20T09:00:00');


const countDownClock = () => {
  
  const d = document;
  const daysElement = d.querySelector('.days');
  const hoursElement = d.querySelector('.hours');
  const minutesElement = d.querySelector('.minutes');
  const secondsElement = d.querySelector('.seconds');
  let countdown;

  function getNextMondayNoon() {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7; // Number of days until next Monday
      const nextMonday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilNextMonday, 12, 0, 0);
      return nextMonday.getTime();
  }

  function timer() {
      const then = getNextMondayNoon();

      countdown = setInterval(() => {
          const now = Date.now();
          const secondsLeft = Math.round((then - now) / 1000);

          if(secondsLeft <= 0) {
              clearInterval(countdown);
              timer(); // Restart the countdown
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

  timer();
}

/*
start countdown
countdown to next Monday 12:00 PM and repeat weekly
*/
countDownClock();

export const startTimer = (duration, onTimeEnd) => {
  let timer = duration,
    minutes,
    seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(minutes + ":" + seconds);

    if (--timer < 0) {
      onTimeEnd();
    }
  }, 1000);
};

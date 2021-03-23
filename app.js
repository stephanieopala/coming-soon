const countdown = document.querySelector(".countdown");

//Set launch date
const launchDate = new Date("Jan 1, 2022 00:00:00").getTime();

//update every second
const interval = setInterval(() => {
    //get today's date and time
    const now = new Date().getTime();

    //Distance from now and launchdate
    const distance = launchDate - now;
    
    //Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
    const seconds = Math.floor((distance % (1000 * 60 )) / 1000 );

    //display the results
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;
    //if launchDate passed
    if(distance < 0) {
        //stop countdown
        clearInterval(interval);
        //style and output some text
        countdown.style.color = "orangered";
        countdown.innerHTML = "Welcome! Happy Shopping!";
    }
}, 1000);

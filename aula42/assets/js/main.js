function main() {
    const clock = document.querySelector(".clock");
    const start = document.querySelector(".start");
    const pause = document.querySelector(".pause");
    const reset = document.querySelector(".reset");
    const intervalInSeconds = 1;
    const resetClock = () => {
        clock.innerText = "00:00:00";
        clock.className = "clock";
    };
    let resetAll;
    let seconds = 0;
    const updateClock = () => {
        if (resetAll) {
            seconds = 0;
            resetAll = false;
        }
        seconds += intervalInSeconds;
        const time = formatSeconds(seconds);
        clock.innerText = time;
    };
    
    let setIntervalId;
    const setNewInterval = () => setIntervalId = setInterval(updateClock, (intervalInSeconds * 1000));
    
    let timerAlreadyExecuted = false;
    const timer = () => {
        if (!timerAlreadyExecuted) setNewInterval();
        timerAlreadyExecuted = true;
    };
    const stopTimer = () => {
        setIntervalId ? setTimeout(() => clearInterval(setIntervalId)) : {};
        timerAlreadyExecuted = false;
    };

    document.addEventListener("click", (event) => {
        const element = event.target;
        if (element === start) {
            clock.classList.remove("stop");
            timer();
        } else if (element === pause) {
            !(clock.textContent === "00:00:00") ? clock.classList.add("stop") : {};
            stopTimer();
        } else if (element === reset) {
            resetClock();
            stopTimer();
            resetAll = true;
        } 
    });


    function formatSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        });
    }
}


main();

// block 11 51:06
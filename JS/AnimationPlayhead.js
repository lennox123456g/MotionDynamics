
const square = document.querySelector('.square');
const  playButton = document.querySelector('#play');
const  pauseButton = document.querySelector('#pause');
const  reverseButton = document.querySelector('#reverse');
const  slider = document.querySelector('#slider');
const  progressText = document.querySelector('#progress');

const keyframes = [
    { transform: "translateX(0) translateY(0)" , easing: "ease-in-out"},

    { 
        transform: "translateX(100px) rotate(45deg)", 
        offset: 0.2,
        easing: "ease-in-out",
        
    }, 

    { 
        transform: "translateX(100px) translateY(100px) scale(0.8)",
        easing: "ease-in-out",
    },

    { 
        transform: "translateX(0) translateY(100px)", 
        offset: 0.8,
        easing: "ease-in-out",
    },
    { 
        transform: "translateX(0) translateY(0)",
        easing: "ease-in-out",
     },
];

const options = {
    duration: 3000,
    iterations: Infinity,
};

const animations = square.animate(keyframes, options);

//Add event listeners to buttons 
playButton.addEventListener('click', ()=> {
    animations.play();
});

pauseButton.addEventListener('click', ()=> {
    animations.pause();
})

reverseButton.addEventListener('click', ()=> {
    animations.reverse();
})

slider.addEventListener('input', ()=> { //we can even use change 
    //syc the value  to the animation speed of 3000
    //animations.playbackRate =  parseFloat(slider.value);
    //animations.currentTime =  slider.valueAsNumber;

    const totalDuration = animations.effect?.getTiming().duration;
    //sync animation progress to the slider value 
    animations.currentTime =  slider.valueAsNumber* totalDuration;
})

//Updating the progress
progressText.innerText =  "0%"

function updateProgress() {
    const currentProgress = animations.effect?.getComputedTiming().progress;

    if (currentProgress !== null && currentProgress !== undefined) {
        progressText.innerText = (currentProgress * 100).toFixed() + "%";
    }

    requestAnimationFrame(updateProgress); // ← always runs
}

updateProgress();







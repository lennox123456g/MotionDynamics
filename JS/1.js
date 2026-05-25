const square = document.querySelector('.square');

let rotation = 0 
const MAX_ROTATION = 360

function rotateSquare(){
    rotation++;
    square.style.transform = `rotate(${rotation}deg)`;
    
    

    if (rotation < MAX_ROTATION){
        requestAnimationFrame(rotateSquare);
    }

}

rotateSquare();

//const IntervalId = setInterval(() => {
//    rotation = rotation + 5;
//    square.style.transform = `rotate(${rotation}deg)`;
//
//    //ensuring memoery is not used 
//    if (rotation >= MAX_ROTATION) clearInterval(IntervalId);
//}, 1000/10)



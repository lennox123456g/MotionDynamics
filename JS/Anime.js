import { animate, createDraggable } 
from "https://cdn.jsdelivr.net/npm/animejs@4.0.0/+esm";

createDraggable(".square", {
    snap: 64,
    container: document.body,
    containerPadding: 64,
    releaseEase: "spring(1, 80, 10, 0)",

    onRelease: () => {
        animate(".square", {
            rotate: "+=90deg",
            ease: "spring(1, 80, 10, 0)",
            delay: 300,
        });
    },
});
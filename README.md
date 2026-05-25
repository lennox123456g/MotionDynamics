Web Animations Guide
What is Motion?
Motion is an object's change in state over time — a change in speed and pace — not just teleporting to an end position. It creates continuity, bridging something from one state at the start to another at the end.
Depth and Hierarchy
Pages need depth and hierarchy in their elevation without being in your face. Box shadows bring this subtlety. Animations should follow the same principle: they should never be demanding attention, but rather be subtle and barely noticeable. Because they truly move, they create a subtle experience that makes the application come to life, feel real and polished.

Motion Sickness & User Control
When there is a lot of motion, motion sickness can be triggered. The same animation should not have so much motion, and users should always be able to control it.
Resources:

MDN Docs: @prefers-reduced-motion
web.dev: Prefers Reduced Motion

You can use a <link> tag to conditionally load a CSS stylesheet at the CSS level, so that users who prefer reduced motion get a different experience. Do not force animations on users.

Animation Performance
Think carefully about which CSS properties you are animating and how they affect the overall layout.
transform is one of the safest animations because it does not affect any other element's layout.
CPU vs GPU

transform and opacity use the GPU, making them smooth because they require no layout recalculation from the CPU. Stick to these most of the time.
transition-property is used for performance reasons and special effects — for example, if you want to transition rotation but leave the background color unchanged. What you leave out remains abrupt.


Timing Functions

Ease-in: accelerates into the final state
cubic-bezier.com — a great tool for crafting custom easing curves


Transitions vs Keyframe Animations

CSS Transitions only move from point A to point B.
CSS Keyframe Animations give you full control over what happens between the start and end states.

Further reading: Josh W. Comeau — CSS — covers animation-fill-mode and much more.

Advanced Animation Techniques
Offset Path
Animates an element along a given path.

CSS Clip Path Generator

Animate Elements in View
Triggering animations when elements enter the viewport creates a compelling, dynamic experience.
Scroll-Driven Animations

scroll-driven-animations.style — includes range-based animation control

View Transitions
View Transitions are excellent for page transitions. Dynamic View Transition Names are important for items coming from the database — use view-transition-name for this.

JavaScript & the Browser Event Loop

Use requestAnimationFrame over setInterval — it is far more performant, saves battery, and syncs with the browser's rendering pipeline.
Talk by Jake Archibald covering the complexity of the web browser event loop: YouTube

Application Playback and Playheads
For timeline-based animations, think in terms of playback controls and playheads to manage animation state.

JavaScript Animation Libraries
Libraries offer better animation capabilities, but they do send more code to the browser, which affects performance.
The Web Animations API (WAAPI) has the advantage of working on the compositor thread, offloading work from the main JavaScript execution thread, making animations extremely smooth.
Recommended Libraries
LibraryNotesMotion.devMost loved library. Uses the WAAPI under the hood, so even JavaScript-driven animations are smooth.Anime.jsHas one of the best documentation experiences in the world.GSAPThe industry powerhouse. Has been the de facto choice for animation professionals for a long time. A full graphics and motion design library — a professional tool for professional animators.

Showcase & Inspiration

Awwwards — showcases world-class JavaScript animation websites


Next Steps: Canvas & WebGL
If the DOM is not enough for you, dive into the Canvas element and the world of WebGL for 2D and 3D experiences.

PixiJS — 2D rendering
Three.js — 3D rendering
Example: Kubota Future Cube

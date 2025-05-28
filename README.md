# **DOOM in your browser, no installation needed**

> [!NOTE]
> this is a pre-release build, expect some bugs and compatibility issues

## **the idea:**

im pretty bored at school somtimes and i want somthing to play, so why not make a doom port on web so that i can play it whenever it want (for educational purposes obviously ;).the challenge was to create a web-based MS-DOS emulator that could run DOOM smoothly, without requiring any downloads or complex setup. this meant working with some interesting technologies and facing some unique challenges.

## **technical challenges:**

the main challenge was finding a way to emulate MS-DOS in a browser. after some research, i discovered js-dos, a JavaScript-based DOS emulator that could run in any modern browser.

### **the emulation problem:**

js-dos is great, but it's not perfect. it has some limitations:
- it can't directly access your computer's hardware
- it needs to load the entire game into memory
- it has to handle all the DOS system calls through JavaScript

this meant we had to get creative with how we handle:
- file loading
- memory management
- system calls
- graphics rendering

### **the solution:**

we ended up using a combination of:
- js-dos for DOS emulation
- custom JavaScript for game management
- HTML5 Canvas for rendering
- WebGL for better performance

## **how it works:**

1. **loading phase:**
   - the game files are loaded into memory
   - the DOS emulator is initialized
   - the game environment is set up

2. **emulation phase:**
   - js-dos creates a virtual DOS environment
   - the game runs in this environment
   - all system calls are translated to JavaScript

3. **rendering phase:**
   - the game's output is captured
   - it's rendered to an HTML5 Canvas
   - WebGL is used for better performance

## **technical details:**

the project uses:
- HTML5 for structure
- CSS3 for styling
- JavaScript for functionality
- js-dos for DOS emulation
- WebGL for rendering

## **requirements:**

- modern web browser (Chrome, Firefox, Edge, or Safari)
- JavaScript enabled
- WebGL support

## **controls:**

- arrow keys: move
- S: shoot
- W: open doors/interact
- F11: toggle fullscreen

## **known issues:**

- initial loading might take a while
- some systems might experience performance issues (by that i mean most lol)
- sound might not work on all browsers
- fullscreen mode might not work on all systems


## **mentions**
ID SOFTWARE OWN THE RIGHTS TO DOOM. I AM NOT TRYING TO ILLEGALLY DISTRIBUTE DOOM. PLAY THIS GAME AT YOUR OWN RISK. thanks :)

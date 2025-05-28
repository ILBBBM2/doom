// Initialize DOSBox
const dosbox = new Dosbox(document.getElementById("dosbox"), {
    wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.wasm.js",
    cycles: 1000,
    autolock: true,
    consoleType: "text",
    shell: "C:\\>",
    onload: function() {
        console.log("DOSBox initialized");
    }
});

// Fullscreen button functionality
document.getElementById("fullscreen").addEventListener("click", () => {
    const dosContainer = document.querySelector(".dos-container");
    if (!document.fullscreenElement) {
        dosContainer.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Reset button functionality
document.getElementById("reset").addEventListener("click", () => {
    dosbox.reset();
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
    if (e.key === "F11") {
        e.preventDefault();
        document.getElementById("fullscreen").click();
    }
}); 
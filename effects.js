function copyAddress(id) {
    const svgElement = document.getElementById(id + 'Input');
    const title = svgElement.getAttribute('title');

    navigator.clipboard.writeText(title).then(() => {
        alert('copied the discord to clipboard: @' + title);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function removeOverlay() {
    var overlay = document.getElementById('overlay');
    var userpage = document.getElementById('user-page');
    var audio = document.getElementById('backgroundsong')

    overlay.style.opacity = '0';
    userpage.style.display = 'flex';
    audio.volume = 0.3;
    audio.play();

    setTimeout(function() { 
        overlay.style.display = 'none';
    }, 2000);
}

function toggleMusic() {
    var mutebtn = document.getElementById("mutetext");
        if (mutebtn.innerHTML == "off") mutebtn.innerHTML = "on";
        else mutebtn.innerHTML = "off";
    
    var audio = document.getElementById('backgroundsong')
    audio.muted = !audio.muted;
}

document.addEventListener("DOMContentLoaded", () => {
    const prefix = "⠐ ";
    const titleText = "5ive";
    let index = 0;
    let isDeleting = false;

function typeWriter() {
    document.title = prefix + titleText.substring(0, index);

    if (!isDeleting && index < titleText.length) {
        index++;
    setTimeout(typeWriter, 200);

    } else if (isDeleting && index > 0) {
        index--;
    setTimeout(typeWriter, 200);

    } else {
        isDeleting = !isDeleting;
    setTimeout(typeWriter, 1000);
    }
}

typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.typewriter');
    const texts = [
        "Young, Busy & Focused",
        "Risking is better than regretting.",
        "The only person who can stop you is yourself.",
        "Lock in."
    ];
    const typingSpeed = 80;
    const pauseDuration = 1000;
    let currentIndex = 0;

    elements.forEach((element) => {
        element.textContent = '';
        let textIndex = 0;
        let forward = true;
        let cursorVisible = true;

        // Cursor blink independent of typing
        setInterval(() => {
            cursorVisible = !cursorVisible;
            // Only update cursor without changing text
            const text = element.textContent.replace('|', '');
            element.innerHTML = text + `<span style="opacity:${cursorVisible ? 1 : 0};">|</span>`;
        }, 500);

        function typeWriter() {
            const currentText = texts[currentIndex];
            const randomSpeed = typingSpeed + Math.floor(Math.random() * 100);

            // Build text with fade-in letters
            element.innerHTML = '';
            for (let i = 0; i < textIndex; i++) {
                element.innerHTML += `<span style="opacity:1; transition: opacity 0.3s;">${currentText.charAt(i)}</span>`;
            }
            // Add cursor (opacity controlled separately)
            element.innerHTML += `<span style="opacity:${cursorVisible ? 1 : 0};">|</span>`;

            if (forward) {
                if (textIndex < currentText.length) {
                    textIndex++;
                    setTimeout(typeWriter, randomSpeed);
                } else {
                    setTimeout(() => {
                        forward = false;
                        typeWriter();
                    }, pauseDuration);
                }
            } else {
                if (textIndex > 0) {
                    textIndex--;
                    setTimeout(typeWriter, randomSpeed);
                } else {
                    currentIndex = (currentIndex + 1) % texts.length;
                    forward = true;
                    setTimeout(typeWriter, pauseDuration);
                }
            }
        }

        typeWriter();
    });
});

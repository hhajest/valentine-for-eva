document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const container = document.querySelector(".container");
    const image = document.querySelector(".image");

    function toggleGlow(element) {
        if (element.classList.contains("glowing")) {
            element.classList.remove("glowing");
            element.classList.add("normal");
        } else {
            element.classList.remove("normal");
            element.classList.add("glowing");
        }
    }

    document.querySelectorAll(".toggle-glow").forEach(title => {
        title.addEventListener("click", function () {
            toggleGlow(this);
        });
    });

    let scaleFactor = 1.0;
    let clickCount = 0;

    noButton.addEventListener("click", function () {
        clickCount++;
        if (clickCount < 4) {
            scaleFactor += 0.2;
            yesButton.style.transform = `scale(${scaleFactor})`;
        }
        if (scaleFactor >= 2.0) {
            noButton.style.display = "none";
        }
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        if (clickCount === 4) {
            yesButton.style.transition = "transform 0.3s ease-in-out, width 0.3s, height 0.3s, font-size 0.3s";
            yesButton.style.width = "100vw";
            yesButton.style.height = "100vh";
            yesButton.style.fontSize = "50px";
            yesButton.style.position = "absolute";
            yesButton.style.top = "50%";
            yesButton.style.left = "50%";
            yesButton.style.transform = "translate(-50%, -50%)";
        }
    });

    yesButton.addEventListener("click", function () {
        document.body.innerHTML = `
            <div class="container">
                <img src="happy.gif" alt="Ура, я так и знал!" class="image">
                <h1 class="toggle-glow">Ура, я так и знал!</h1>
            </div>
        `;
        document.querySelector(".toggle-glow").addEventListener("click", function () {
            toggleGlow(this);
        });
    });

    image.addEventListener("click", function () {
        document.body.innerHTML = `
            <div class="retry-container">
                <img src="retry.gif" alt="GIF картинка" class="image">
                <h1 class="toggle-glow">Ева, нужно нажимать кнопки</h1>
                <button id="retry" class="retry-button">Попробовать еще раз...</button>
            </div>
        `;
        document.getElementById("retry").addEventListener("click", function () {
            location.reload();
        });

        document.querySelector(".toggle-glow").addEventListener("click", function () {
            toggleGlow(this);
        });
    });
});

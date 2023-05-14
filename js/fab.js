import toast from './toast.js';

const fab = document.getElementById("fab")
const copyText = document.getElementById("copyText");
const copyGonb = document.getElementById("copyGonb");

fab.addEventListener("click", function () {
    fab.animate(clickRotateAnim, { duration: 250, direction: fab.classList.contains("active") ? "reverse" : "normal" });
    toggleFab();
});
copyText.addEventListener("click", copyTextToClipboard);
copyGonb.addEventListener("click", copyGonbToClipboard);

function toggleFab() {
    fab.classList.toggle("active");
    document.getElementById("fab-options").classList.toggle("active");
}

function copyTextToClipboard() {
    const text = document.getElementById("inputBox").value;
    navigator.clipboard.writeText(text)
        .then(() => {
            toast();
        });
    setTimeout(
        function () {
            toggleFab();
        },
        100
    );
    copyText.animate(clickAnim, { duration: 100, direction: "reverse" });
}

function copyGonbToClipboard() {
    const text = document.getElementById("outputBox").value;
    navigator.clipboard.writeText(text)
        .then(() => {
            toast();
        });
    setTimeout(
        function () {
            toggleFab();
        },
        100
    );
    copyGonb.animate(clickAnim, { duration: 100, direction: "reverse" });
}

const clickRotateAnim = [
    {
        transform: "scale(1) rotateZ(0deg)"
    },
    {
        transform: "scale(0.8)"
    },
    {
        transform: "scale(1) rotateZ(45deg)"
    },
]

const clickAnim = [
    {
        transform: "scale(1)"
    },
    {
        transform: "scale(0.8)"
    },
    {
        transform: "scale(1)"
    },
]
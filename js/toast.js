function toast() {
    var toast = document.getElementById("toast");
    var newToast = toast.cloneNode(true);
    toast = toast.parentNode.replaceChild(newToast, toast);
    toast = newToast;
    const progress = document.getElementById("progress");

    toast.classList.add("active")
    progress.classList.add("active")

    setTimeout(function(){
        toast.classList.remove("active");
    }, 3000);

    setTimeout(function(){
        progress.classList.remove("active");
    }, 3000);
}

export default toast;
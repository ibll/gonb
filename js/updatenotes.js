import Cookie from "../modules/js.cookie.mjs";

const serverUpdateNotesVer = 2;

if (Cookie.get("updateNotesVer") == serverUpdateNotesVer) {
    document.getElementById("updateNotes").style.display = "none";
}

document.getElementById("updateNotesButton").addEventListener("click", setLocalUpdateNotesVer);

function setLocalUpdateNotesVer() {
    Cookie.set("updateNotesVer", serverUpdateNotesVer);
    document.getElementById("updateNotes").style.display = "none";
}
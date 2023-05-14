import toast from './toast.js';

let inputBox = document.getElementById("inputBox")
let outputBox = document.getElementById("outputBox")

// auto resize
$("textarea").each(function () {
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
}).on("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});

// copy other text to clipboard

inputBox.addEventListener('keydown', function(e) {
	if(e.metaKey && e.key === 'Enter') {
        const out = navigator.clipboard.writeText(outputBox.value)
            .then(() => {
                toast();
            });
    }
});

outputBox.addEventListener('keydown', function(e) {
    if(e.metaKey && e.key === 'Enter') {
        navigator.clipboard.writeText(inputBox.value)
            .then(() => {
                toast();
            });
    }
});

// remove invalid characters
inputBox.addEventListener( "input", event => {
    inputBox.value = inputBox.value.replace( /[^\x00-\xFF]/gm, '');
    convert()
}, false);

inputBox.addEventListener( "paste", event => {
    inputBox.value = inputBox.value.replace( /[^\x00-\xFF]/gm, '');
    convert()
}, false);

outputBox.addEventListener( "input", event => {
    outputBox.value = outputBox.value.replace( /[^gonbGONB \n]/gm, '');
    convertBack()
}, false);

outputBox.addEventListener( "paste", event => {
    outputBox.value = outputBox.value.replace( /[^gonbGONB \n]/gm, '');
    convertBack()
}, false);

// text to gonbinary
function convert() {
    outputBox.value = "";
    const gonb = "gonbgonb";
    for (var i = 0; i < inputBox.value.length; i++) {
        const binaryChar = ("00000000"+ inputBox.value[i].charCodeAt(0).toString(2)).slice(-8)
        let outChar = "";

        for (var digit in binaryChar) {
            if (binaryChar[digit] == "1") {
                outChar += gonb[digit].toUpperCase();
            } else {
                outChar += gonb[digit];
            }
        }
        outputBox.value += outChar + " ";
    }
    $("textarea").trigger("input");
}

// gonbinary to text
function convertBack() {
    inputBox.value = "";
    let gonbs = outputBox.value.replaceAll("\n", " ").split(" ");

    for (var gonb in gonbs) {
        if (gonbs[gonb] == "") {
            continue;
        }
        let outBits = "";
        for (var letter in gonbs[gonb]) {
            if (isUpperCase(gonbs[gonb][letter])) {
                outBits += "1";
            } else {
                outBits += "0";
            }
        }

        inputBox.value += binaryAgent(outBits);
    }
    $("textarea").trigger("input");
}

// binary to characters
function binaryAgent(str) {
    var newBin = str.split(" ");
    var binCode = [];

    for (var i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }

    return binCode.join("");
}

function isUpperCase(str) {
    return str === str.toUpperCase();
}
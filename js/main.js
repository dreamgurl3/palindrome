const checkButton = document.getElementById("checkBtn");

checkButton.addEventListener("click", check)
function check(str) {
    let emptyText = document.getElementById("textInput").value;
    if (emptyText === "") {
        document.getElementById("result").innerText = "Please input a value!!!";
        return;
    }

    let originalText = emptyText.trim();
    let inputText = originalText.toLowerCase().match(/[a-z0-9]/g).join("");
    let stringReverse = inputText.split("").reverse().join("");

    if (inputText === stringReverse) {
        document.getElementById("result").innerText = `"${originalText}" is a palindrome`;
    } else {
        document.getElementById("result").innerText = `"${originalText}" is not a palindrome`;
    }
}


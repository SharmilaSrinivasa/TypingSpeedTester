const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:
function spellCheck()
{
    let textEntered = testArea.nodeValue;
    console.log(textEntered);
}

// Start the timer:
function start()
{
    let textEnteredLength = testArea.nodeValue.length;
    console.log(textEnteredLength);
}


// Reset everything:
function reset()
{
    console.log("Reset button activated");
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("Keypress", start, false);
testArea.addEventListener("Keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
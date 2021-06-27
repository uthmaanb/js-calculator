// function that displays the numbers on the screen
function clk(val) {
  document.getElementById("display").value =
    document.getElementById("display").value + val;
}

// function that clears everything on the screen
function clrdisp() {
  document.getElementById("display").value = "";
}

// function that makes the equal button show the results
function equal() {
  let text = document.getElementById("display").value;
  let result = eval(text);
  document.getElementById("display").value = result;
}
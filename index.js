
// function that displays the numbers on the screen
function click(val) {
    document.getElementById("screen").value =
      document.getElementById("screen").value + val;
  }
  
  // function that clears everything on the screen
  function clrdisp() {
    document.getElementById("screen").value = "";
  }
  
  // function that makes the equal button show the results
  function equal() {
    let text = document.getElementById("screen").value;
    let result = eval(text);
    document.getElementById("screen").value = result;
  }
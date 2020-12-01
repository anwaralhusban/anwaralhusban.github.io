function loadDoc1() {
  let html = `<div class = "expanded-info"> <p> this is the paragraph describing the nurse staffing project, the software used for it, the findings, and final recommendations obtained. </p></div>`;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    /*if (xhttp.readyState == 4 && xhttp.status == 200) {*/
      document.getElementById("proj-info1").innerHTML = html;

  };

  xhttp.open("GET", "/Users/anwaralhusban/Downloads/CS 330/personal website/ajax_info1.txt", true);
  xhttp.send();
}
function loadDoc2() {
  let html = `<div class = "expanded-info"> <p> this is the paragraph describing the nurse staffing project, the software used for it, the findings, and final recommendations obtained. </p></div>`;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    /*if (xhttp.readyState == 4 && xhttp.status == 200) {*/
      document.getElementById("proj-info2").innerHTML = html;

  };

  xhttp.open("GET", "other files/ajax_info1.txt", true);
  xhttp.send();
}

function importHTMLbody(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var body_tag = document.getElementById('imported_html_body')
      body_tag.innerHTML = this.responseText.split('<body>').pop().split('</body>')[0];
    }
  };
  console.log('1')

  xhttp.open("GET", file, true);
  xhttp.send();
}

importHTMLbody('index.html')

// function importScript(file) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var script = document.getElementById('imported_script')
//       script.innerHTML = this.responseText
//     }
//   };
//
//   xhttp.open("GET", file, true);
//   xhttp.send();
// }

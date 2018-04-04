
function importHTMLbody(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var body_tag = document.getElementById('hidden_html_body')
      body_tag.innerHTML = this.responseText.split('<body>').pop().split('</body>')[0];
      // console.log(this.responseText.split('<body>').pop().split('</body>')[0]);
    }
  };

  xhttp.open("GET", file, true);
  xhttp.send();
}

function importScript(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var script = document.getElementById('imported_script')
      script.innerHTML = this.responseText
    }
  };

  xhttp.open("GET", file, true);
  xhttp.send();
}
//
// loadXMLDoc('jerryRunner.html')
// getScript('src/clickme.js')


// var s = document.createElement('script')

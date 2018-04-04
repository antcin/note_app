
function loadXMLDoc(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);

    }
  };

  xhttp.open("GET", file, true);
  xhttp.send();
}

function getScript(file) {
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

// loadXMLDoc('jerryRunner.html')
// getScript('src/clickme.js')


// var s = document.createElement('script')

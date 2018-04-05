function importHTMLbody(file) { // name of function
  var xhttp = new XMLHttpRequest(); //variable that initialises new XMLHttpRequest object
  xhttp.onreadystatechange = function() { //property onreadystatechange is called every time the readystatechange event is fired (every time the readyState property of object xhttp changes)
    if (this.readyState == 4 && this.status == 200) { //if readyState is 4, it means that the operation is complete; the http status  200 indicates that the request has succeeded
      var body_tag = document.getElementById('imported_html_body') // variable that returns Element object that represents html element whose ID property matches specified string
      body_tag.innerHTML = this.responseText.split('<body>').pop().split('</body>')[0];
    }  // this changes the html content of element with ID 'imported_html_body'. responseText returns text received from server following request being sent. The function returns text contained between body tags
  };
  console.log('1')

  xhttp.open("GET", file, true); // open() initialises a newly created request or reinitialises a new one. It takes three arguments: an HTTP GET request, the file to send request to, true which means that
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

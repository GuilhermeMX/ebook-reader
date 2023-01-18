function loadBook(fileName, displayName) {
  let currentBook = "";
  let url = "books/" + fileName;

  //reset our UI
  document.getElementById("fileName").innerHTML = displayName;
  document.getElementById("searchstat").innerHTML = "";
  document.getElementById("keyword").value = "";

  //create a server a request to load our book
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (readyState == 4 && xhr.status == 200) {
      currentBook = xhr.responseText;

      document.getElementById("fileContent").innerHTML = currentBook;
      
      // Scroll back to top when book is change
      var element = document.getElementById("fileContent");
      element.scrollTop = 0;
    }
  }
}
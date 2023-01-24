function loadBook(filename, displayName) {
  let currentBook = "";
  let url = "books/" + filename;

  //reset our UI
  document.getElementById("fileName").innerHTML = displayName;
  document.getElementById("searchstat").innerHTML = "";
  document.getElementById("keyword").value = "";

  //create a server a request to load our book
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          currentBook = xhr.responseText;

          //getDocStats(currentBook);

          //remove line breaks and carriage returns and replace with a <br>
          currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>');

          document.getElementById("fileContent").innerHTML = currentBook;

          var elmnt = document.getElementById("fileContent");
          elmnt.scrollTop = 0;
      }
  };
}

//get stats for the book
function getDocStats(fileContent) {
  var docLength = document.getElementById("docLength"); 
  var wordCount = document.getElementById("wordCount");
  var charCount = document.getElementById("charCount");

  let text = fileContent.toLowerCase();
  let wordArray = text.match(/\b\S+\b/g);
  let wordDictionary = {};

  var uncommonWords = [];

  //filter out the uncommon words
  uncommonWords = filterStopWords(wordArray);

  // count every word in the wordArray
  for (word in wordArray) {
    let wordValue = wordArray[word]
  }
}
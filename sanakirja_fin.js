

// Function that retrieves all the words in the dictionary.
function getAll() {
    let text = "<table><tr><th>&#127467;&#127470; suomi</th><th>&#127480;&#127466; ruotsi</th><th>&#127468;&#127463; englanti</th></tr>";  // creates a table.
for (var i = 0; i < words.length; i++) {
    text += "<tr><td>" + words[i].suomi + "</td><td> " + words[i].svenska + "</td><td> " + words[i].english + "</td></tr>";
}
text += "</table>"
document.getElementById("outputAreaGetAll").innerHTML = text;
}

/*
// Find a specific word (here: Finnish-English)
function search2() {
    let keyWord = document.getElementById("searchInput").value;
    let foundObject = words.find(o => o.suomi === keyWord);
    //testitulostus
    document.getElementById("outputArea").innerHTML = "Suomi: " + foundObject.suomi + " Englanti: " + foundObject.english;
    console.log(foundObject);
  }
  */

  let lang1 = [];
  let lang2 = [];
  let header1 = "";
  let header2 = "";
  let suomi = [];
  let english = [];
  let svenska = [];
  let suomiheader = "&#127467;&#127470; suomi";
  let englishheader = "&#127468;&#127463; englanti";
  let svenskaheader = "&#127480;&#127466; ruotsi";

  
  for (var i = 0; i < words.length; i++) {
    suomi += words[i].suomi + "<br>";
    english += words[i].english + "<br>";
    svenska += words[i].svenska + "<br>";
}

    suomi = suomi.split("<br>");
    english = english.split("<br>");
    svenska = svenska.split("<br>");
    


// Final language selection function.
function selectLanguages(lang1, lang2, header1, header2) {
    let text = "<table><tr><th>" + header1 + "</th><th>" + header2 + "</th></tr>";
    for (var i = 0; i < words.length; i++) {
        text += "<tr><td>" + lang1[i] + "</td><td> " + lang2[i] + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("outputAreaGetAll").innerHTML = text;
}

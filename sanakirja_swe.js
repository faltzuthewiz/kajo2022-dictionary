// All words in the dictionary.

var words = 
[
    {
        suomi: "Ohjelmalaaksot",
        svenska: " ",
        english: "Program valleys"
    },
    {
        suomi: "Kanttilaakso",
        svenska: "Tävlingsdalen",
        english: "Action Valley"
    },
    {
        suomi: "Mittelölaakso",
        svenska: "Tapperdalen",
        english: "Battle Valley"
    },
    {
        suomi: "Elämälaakso",
        svenska: "Livsdalen",
        english: "Life Valley"
    },
    {
        suomi: "Tuumalaakso",
        svenska: "Tankedalen",
        english: "Heureka Valley"
    },
    {
        suomi: "Rauhalaakso",
        svenska: "Fredsdalen",
        english: "Peace Valley"
    },
    {
        suomi: "Tulevaisuuslaakso",
        svenska: "Framtidsdalen",
        english: "Future Valley"
    },
    {
        suomi: "Leiriarki",
        svenska: "Lägervardag",
        english: "Camp's day-to-day"
    },
    {
        suomi: "lyhytpesti",
        svenska: "kortuppdrag",
        english: "odd job"
    },
    {
        suomi: "leiriläisen opas",
        svenska: "lägerdeltagarens guide",
        english: "participant's guide"
    },
    {
        suomi: "avajaiset",
        svenska: "invigning",
        english: "opening ceremony"
    },
    {
        suomi: "keskiäiset",
        svenska: "midfest",
        english: "mid-camp ceremony"
    },
    {
        suomi: "lopettajaiset",
        svenska: "avslutningsfest",
        english: "ending ceremony"
    },
    {
        suomi: "pestikone",
        svenska: "uppdragsgenerator",
        english: "Assignment Engine"
    },
    {
        suomi: "pesti",
        svenska: "uppdrag",
        english: "assignment"
    },
    {
        suomi: "Paikat",
        svenska: "Ställen",
        english: "Places"
    },
    {
        suomi: "Työkkäri",
        svenska: "Uppdragskontor",
        english: "Assignment office"
    },
    {
        suomi: "leirisuora",
        svenska: "lägerrakan",
        english: "main street"
    },
    {
        suomi: "leirilippukunta",
        svenska: "lägerkår",
        english: "camp unit"
    },
    {
        suomi: "kylä",
        svenska: "by",
        english: "village"
    },
    {
        suomi: "Leirin henkilöt",
        svenska: "Lägrets personer",
        english: "Camp's members"
    },
    {
        suomi: "Kajolainen/Kajolaiset",
        svenska: "Kajoit/Kajoiter",
        english: "a Kajoit"
    },
    {
        suomi: "Tarpoja",
        svenska: "Spejarscout",
        english: "Tracker"
    },
    {
        suomi: "Samoaja",
        svenska: "Explorerscout",
        english: "Explorer"
    },
    {
        suomi: "Vaeltaja",
        svenska: "Roverscout",
        english: "Rover"
    },
    {
        suomi: "Aikuinen",
        svenska: "Vuxen",
        english: "Adult"
    },
    {
        suomi: "staabi",
        svenska: "staben",
        english: "staff"
    },
    {
        suomi: "Kajari",
        svenska: "Kajare",
        english: ""
    },
    {
        suomi: "osallistujat",
        svenska: "deltagare",
        english: "participants"
    },
    {
        suomi: "leirilippukunnanjohtaja",
        svenska: "lägerkårchef",
        english: "camp unit leader"
    }
];

// Function that retrieves all the words in the dictionary.
function getAll() {
    let text = "<table><tr><th>&#127480;&#127466; svenska</th><th>&#127467;&#127470; finska</th><th>&#127468;&#127463; engelska</th></tr>";  // creates a table.
for (var i = 0; i < words.length; i++) {
    text += "<tr><td>" + words[i].svenska + "</td><td> " + words[i].suomi + "</td><td> " + words[i].english + "</td></tr>";
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
  let suomiheader = "&#127467;&#127470; finska";
  let englishheader = "&#127468;&#127463; engelska";
  let svenskaheader = "&#127480;&#127466; svenska";

  
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

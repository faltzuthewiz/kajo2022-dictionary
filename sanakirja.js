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
        svenska: "Actiondalen",
        english: "Action Valley"
    },
    {
        suomi: "Mittelölaakso",
        svenska: "Kampdalen",
        english: "Battle Valley"
    },
    {
        suomi: "Elämälaakso",
        svenska: "Livsdalen",
        english: "Life Valley"
    },
    {
        suomi: "Tuumalaakso",
        svenska: "Heureka dalen",
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

// Function that retrieves all the words in the dictionary. (Selected language: Finnish - others)
function getAll() {
    let text = "<table><tr><th>suomi</th><th>ruotsi</th><th>englanti</th></tr>";  // creates a table.
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

// Create variables for different language options.
let finEng = document.getElementById("suomi-englanti");
let finSwe = document.getElementById("suomi-ruotsi");
let engFin = document.getElementById("englanti-suomi");
let sweFin = document.getElementById("ruotsi-suomi");
let engSwe = document.getElementById("englanti-ruotsi");
let sweEng = document.getElementById("ruotsi-englanti");


// Selects two languages to display
  function selectLanguages() {
    let text = "<table><tr><th>suomi</th><th>englanti</th></tr>";
    for (var i = 0; i < words.length; i++) {
        text += "<tr><td>" + words[i].suomi + "</td><td> " + words[i].english + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("outputAreaGetAll").innerHTML = text;

    // Uncheck other radio button options
    uncheckOptions();
    
   // console.log(selectedLanguage1);
  }

  function selectLanguagesFinSwe() {
    let text = "<table><tr><th>suomi</th><th>ruotsi</th></tr>";
    for (var i = 0; i < words.length; i++) {
        text += "<tr><td>" + words[i].suomi + "</td><td> " + words[i].svenska + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("outputAreaGetAll").innerHTML = text;
    
    uncheckOptions();
   // console.log(selectedLanguage1);
  }

  function selectLanguagesEngFin() {
    let text = "<table><tr><th>englanti</th><th>suomi</th></tr>";
    for (var i = 0; i < words.length; i++) {
        text += "<tr><td>" + words[i].english + "</td><td> " + words[i].suomi + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("outputAreaGetAll").innerHTML = text;
    
    uncheckOptions();
   // console.log(selectedLanguage1);
  }

  let lang1 = [];
  let lang2 = [];
  let header1 = "";
  let header2 = "";
  let suomi = [];
  let english = [];
  let svenska = [];

  
  for (var i = 0; i < words.length; i++) {
    suomi += words[i].suomi + "<br>";
    english += words[i].english + "<br>";
    svenska += words[i].svenska + "<br>";
}

    suomi = suomi.split("<br>");
    english = english.split("<br>");
    svenska = svenska.split("<br>");
    

 // Starts when the user clicks one of the language options. Checks which two languages was selected in which order.
 /* Don't think I need this long since I dropped the radio buttons.
  function checkSelection() {
      if (finEng.checked == true) {
        lang1 = suomi;
        lang2 = english;
        header1 = "suomi";
        header2 = "englanti";
        selectLanguagesTest();
  } else if (finSwe.checked == true) {
        lang1 = suomi;
        lang2 = svenska;
        header1 = "suomi";
        header2 = "ruotsi";
        return selectLanguagesTest();
  } else if (engFin.checked == true) {
        lang1 = english;
        lang2 = suomi;
        header1 = "englanti";
        header2 = "suomi";
        return selectLanguagesTest();
  } else if(sweFin.checked == true) {
        lang1 = svenska;
        lang2 = suomi;
        header1 = "ruotsi";
        header2 = "suomi";
        return selectLanguagesTest();
  } else if(engSwe.checked == true) {
        lang1 = english;
        lang2 = svenska;
        header1 = "englanti";
        header2 = "ruotsi";
        return selectLanguagesTest();
  }
}
*/

// If I used parameters, I probably don't need to repeat the same code over and over... Function runs when user selects "Finnish - English" button.
function selectFinEng() {
    lang1 = suomi;
    lang2 = english;
    header1 = "suomi";
    header2 = "englanti";
    return selectLanguagesTest();
}

// DO NOT DELETE, IT IS NOT UNIMPORTANT DESPITE OF THE NAME. Btw change the name for the final version.
function selectLanguagesTest() {
    let text = "<table><tr><th>" + header1 + "</th><th>" + header2 + "</th></tr>";
    for (var i = 0; i < words.length; i++) {
        text += "<tr><td>" + lang1[i] + "</td><td> " + lang2[i] + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("outputAreaGetAll").innerHTML = text;
    
    // Unchecks radio buttons. Tbh I don't need the radio button uncheck anymore.
    //uncheckOptions();
   // console.log(selectedLanguage1);
}

/* Don't think I need this anymore since I dropped the radio buttons.
function uncheckOptions() {
    
    finSwe.checked = false;
    finEng.checked = false;
    engFin.checked = false;
    sweFin.checked = false;
    engSwe.checked = false;
    
}
*/
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

// Find a specific word (here: Finnish-English)
function search2() {
    let keyWord = document.getElementById("searchInput").value;
    let foundObject = words.find(o => o.suomi === keyWord);
    //testitulostus
    document.getElementById("outputArea").innerHTML = "Suomi: " + foundObject.suomi + " Englanti: " + foundObject.english;
    console.log(foundObject);
  }

  
let finEng = document.getElementById("suomi-englanti");
let finSwe = document.getElementById("suomi-ruotsi");

// Create options
let finOption1 = document.getElementById("suomi1").value;
let sweOption1 = document.getElementById("ruotsi1").value;
let engOption1 = document.getElementById("englanti1").value;

let finOption2 = document.getElementById("suomi2").value;
let sweOption2 = document.getElementById("ruotsi2").value;
let engOption2 = document.getElementById("englanti2").value;
console.log(finOption1);

// create arrays for both options
let options1 = [finOption1, sweOption1, engOption1];
let options2 = [finOption2, sweOption2, engOption2];


// Trying out a new way to get the selected value.
/*
const btn = document.querySelector('#btn');
        const sb = document.querySelector('#lang1')
        btn.onclick = (event) => {
            event.preventDefault();
            // show the selected index
            alert(sb.value);
        };
*/

// Test selection
function testSelection() {
var e = document.getElementById("lang1");
var selected1 = e.value;
console.log(selected1);

    if (selected1 === "suomi1") {
        selected1 = words[i].suomi;
    }
    console.log(selected1);
}


// My own code once again.
function selectFirstLanguage() {
    for (var i = 0; i < options1.length; i++) {
        if (options1[i].checked == true) {
            console.log(options1[i]);
            return options1[i];
        }
    }
}

// Selects two languages to display
  function selectLanguages() {
    let text = "<table><tr><th>suomi</th><th>englanti</th></tr>";
    for (var i = 0; i < words.length; i++) {
        text += "<tr><td>" + words[i].suomi + "</td><td> " + words[i].english + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("outputAreaGetAll").innerHTML = text;

    // Uncheck other radio button options
    finSwe.checked = false;
    finEng.checked = false;
    
   // console.log(selectedLanguage1);
  }

  function selectLanguagesFinSwe() {
    let text = "<table><tr><th>suomi</th><th>ruotsi</th></tr>";
    for (var i = 0; i < words.length; i++) {
        text += "<tr><td>" + words[i].suomi + "</td><td> " + words[i].svenska + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("outputAreaGetAll").innerHTML = text;
    
    finSwe.checked = false;
    finEng.checked = false;
   // console.log(selectedLanguage1);
  }

  function checkSelection() {
      if (finEng.checked == true) {
        return selectLanguages();
  } else if (finSwe.checked == true) {
        return selectLanguagesFinSwe();
  }
}
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

// Function that retrieves all the words in the dictionary.
function getAll() {
    let text = "";
for (var i = 0; i < words.length; i++) {
    text += words[i].suomi + " " + words[i].svenska + " " + words[i].english + "<br>";
}
document.getElementById("outputAreaGetAll").innerHTML = text;
}
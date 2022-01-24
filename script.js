const doc = document.getElementById("backstory");

//ARRAYS
const firstname = ["Miracle","Neveah","Anika","Jaylon","Rohan","Santiago","Tessa","Atticus","Jesse","Makai","Karly","Rowan","Kade","Donovan",
"Wendy","Clarissa","Malik","Valerie","Ellen","Moriah","Landyn","Hadassah","Kaitlin","Andreas","Abby"];
const lastname = ["Gonzalez","Walton","Davila","Wong","Andrade","Hayden","Rowe","Campos","Cameron","Leach","Tyler","Bird","Lowe","Huerta","Noble","Gray",
"Goodwin","Mcfarland","Copeland","Vang","Alvarado","Espinoza","House","Rasmussen","Forbes"];
const adjective1 = ["courageous", "humble", "diligent", "generous", "nasty", "wise", "dumb", "crafty", "terrible", "sadistic", "cool", "magnetic", "resourceful"];
const age = ["teen", "young", "middle-aged", "old"];
const race = ["human", "elf", "dwarf", "tiefling", "gnome", "halfling", "warforged", "dragonborn"]

function RandFromArr(array)
{
    var str = array[Math.floor(Math.random() * array.length)]
    return str;
}

function RandElement(array)
{
    var i = Math.floor(Math.random() * array.length)
    return i;
}

function Generate()
{
    var str = "";
    str = str + RandFromArr(firstname);
    str = str + " " + RandFromArr(lastname);
    str = str + " was a " + RandFromArr(adjective1);
    str = str + ", " + RandFromArr(age);
    var r = RandElement(race);
    str = str + " " + race[r];
    switch (r)
    {
        case 0:
            str = str + ". They grew up in the kingdom of Dorithrum.";
            break;
        case 1:
            str = str + ". They grew up in the woodlands of Weytane.";
            break;
        case 2:
            str = str + ". They grew up in the fortress in the mountain of Dol Gul Dur.";
            break;
        case 3:
            str = str + ". They grew up in the swamps of Shang Kundra.";
            break;
        case 4:
            str = str + ". They grew up in the hills of Marth.";
            break;
        case 5:
            str = str + ". They grew up in the taverns of Pantora.";
            break;
        case 6:
            str = str + ". They were assembled in the labs under Dol Gul Dur.";
            break;
        case 7:
            str = str + ". They grew up in the volcanoes of Mortem.";
            break;
        default:
            str = str + ". They grew up on the streets.";
            break;
    }
    return str;
}

function OnClick()
{
    doc.innerHTML = doc.innerHTML + "1. ";
    doc.innerHTML = doc.innerHTML + Generate();
    doc.innerHTML = doc.innerHTML + "<br><br>";
    doc.innerHTML = doc.innerHTML + "2. ";
    doc.innerHTML = doc.innerHTML + Generate();
    doc.innerHTML = doc.innerHTML + "<br><br>";
    doc.innerHTML = doc.innerHTML + "3. ";
    doc.innerHTML = doc.innerHTML + Generate();
    doc.innerHTML = doc.innerHTML + "<br><br>";
    doc.innerHTML = doc.innerHTML + "4. ";
    doc.innerHTML = doc.innerHTML + Generate();
    doc.innerHTML = doc.innerHTML + "<br><br>";
    doc.innerHTML = doc.innerHTML + "5. ";
    doc.innerHTML = doc.innerHTML + Generate();
    doc,innerHTML = doc.innerHTML + "<br><br>";
}
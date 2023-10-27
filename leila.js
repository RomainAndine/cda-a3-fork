var btn = document.getElementById("btn-conjugate");

// tableau des pronoms et terminaisons
var pronouns = ["Je/J'", "Tu", "Il/Elle/On", "Nous", "Vous", "Ils/Elles"];
var present = ["e", "es", "e", "ons", "ez", "ent"];
var future = ["ai", "as", "a", "ons", "ez", "ont"];
var imperfect = ["ais", "ais", "ait", "ions", "iez", "aient"];
var verb = document.getElementById("verb");

var conjugateVerb = (chosenTense, box) => {

   // afficher le radical du verbe
   var radical = document.createElement("h4");
   radical.textContent = `Radical du verbe "${verb.value.toUpperCase()}"`;
   box.appendChild(radical);


  // vérifier si le verbe commence par une voyelle
  if (verb.value[0].match(/[aeiouy]/i)) {
    pronouns[0] = "J'";
  } else {
    pronouns[0] = "Je";
  }

  // afficher les pronoms et les terminaisons
  for (let i = 0; i < chosenTense.length; i++) {
    var ending = document.createElement("p");

    if (chosenTense == future) {
      ending.textContent = pronouns[i] + " " + verb.value + chosenTense[i];
    } else {
      ending.textContent =
        pronouns[i] + " " + verb.value.slice(0, -2) + chosenTense[i];
    }
    box.appendChild(ending);
  }
};

btn.addEventListener("click", () => {
  // container des terminaisons
  var container = document.getElementById("conjugation");

  // effacer les terminaisons précédentes
  container.innerHTML = "";

  var selectTense = document.getElementById("select-tense");

  // temps choisi
  var tense = selectTense.value;

  // vérifier si le verbe est du premier groupe
  if (verb.value.endsWith("er") && verb.value.length > 2) {
    switch (tense) {
      case "present":
        conjugateVerb(present, container);
        break;
      case "futur":
        conjugateVerb(future, container);
        break;
      case "imparfait":
        conjugateVerb(imperfect, container);
        break;
    }
  } else {
    alert("Veuillez entrer un verbe du premier groupe.");
  }

  // vider l'input
  //   verb.value = "";
});

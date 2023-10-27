const infinitifInput = document.getElementById("infinitif");
const tempsSelect = document.getElementById("temps");
const conjuguerButton = document.getElementById("conjuguer");
const resultatDiv = document.getElementById("resultat");

function conjuguerVerbe() {
  const verbeInfinitif = infinitifInput.value;
  const temps = tempsSelect.value;
  const groupe = getGroupe(verbeInfinitif);

  if (groupe === 1) {
    // Verbes du premier groupe (en "er")
    if (temps === "present") {
      const resultat = conjuguerPremierGroupePresent(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "imparfait") {
      const resultat = conjuguerPremierGroupeImparfait(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "passe_compose") {
      const resultat = conjuguerPremierGroupePasseCompose(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "futur") {
      const resultat = conjuguerPremierGroupeFutur(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else {
      resultatDiv.textContent =
        "Temps non pris en charge pour les verbes du premier groupe.";
    }
  } else if (groupe === 2) {
    // Verbes du deuxième groupe (en "ir" avec participe présent en "issant")
    if (temps === "present") {
      const resultat = conjuguerDeuxiemeGroupePresent(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "imparfait") {
      const resultat = conjuguerDeuxiemeGroupeImparfait(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "passe_compose") {
      const resultat = conjuguerDeuxiemeGroupePasseCompose(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "futur") {
      const resultat = conjuguerDeuxiemeGroupeFutur(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else {
      resultatDiv.textContent =
        "Temps non pris en charge pour les verbes du deuxième groupe.";
    }
  } else if (groupe === 3) {
    // Verbes du troisième groupe (tous les autres verbes)
    if (temps === "present") {
      const resultat = conjuguerTroisiemeGroupePresent(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "imparfait") {
      const resultat = conjuguerTroisiemeGroupeImparfait(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "passe_compose") {
      const resultat = conjuguerTroisiemeGroupePasseCompose(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else if (temps === "futur") {
      const resultat = conjuguerTroisiemeGroupeFutur(verbeInfinitif);
      resultatDiv.textContent = `${verbeInfinitif} : ${resultat}`;
    } else {
      resultatDiv.textContent =
        "Temps non pris en charge pour les verbes du troisième groupe.";
    }
  } else {
    resultatDiv.textContent =
      "Ce verbe n'appartient à aucun des trois groupes connus.";
  }
}

function getGroupe(infinitif) {
  const groupe1 = ["er"];
  const groupe2 = ["ir"];
  const groupe3 = ["re", "oir", "ir", "ndre", "rdre"];

  const terminaison = infinitif.slice(-2);

  if (groupe1.includes(terminaison)) {
    return 1;
  } else if (groupe2.includes(terminaison)) {
    return 2;
  } else if (groupe3.includes(terminaison)) {
    return 3;
  } else {
    return 0;
  }
}

function conjuguerPremierGroupePresent(verbe) {
  const je = verbe.slice(0, -2) + "e";
  const tu = verbe.slice(0, -2) + "es";
  const il = verbe.slice(0, -2) + "e";
  const nous = verbe.slice(0, -2) + "ons";
  const vous = verbe.slice(0, -2) + "ez";
  const ils = verbe.slice(0, -2) + "ent";

  return `je ${je}, tu ${tu}, il/elle/on ${il}, nous ${nous}, vous ${vous}, ils/elles ${ils}`;
}

function conjuguerPremierGroupeImparfait(verbe) {
  const je = verbe.slice(0, -2) + "ais";
  const tu = verbe.slice(0, -2) + "ais";
  const il = verbe.slice(0, -2) + "ait";
  const nous = verbe.slice(0, -2) + "ions";
  const vous = verbe.slice(0, -2) + "iez";
  const ils = verbe.slice(0, -2) + "aient";

  return `je ${je}, tu ${tu}, il/elle/on ${il}, nous ${nous}, vous ${vous}, ils/elles ${ils}`;
}

function conjuguerPremierGroupePasseCompose(verbe) {
  const participePasse = verbe.slice(0, -2) + "é";
  const avoirConjugaison = {
    je: "ai",
    tu: "as",
    il: "a",
    nous: "avons",
    vous: "avez",
    ils: "ont",
  };

  const je = avoirConjugaison.je + " " + participePasse;
  const tu = avoirConjugaison.tu + " " + participePasse;
  const il = avoirConjugaison.il + " " + participePasse;
  const nous = avoirConjugaison.nous + " " + participePasse;
  const vous = avoirConjugaison.vous + " " + participePasse;
  const ils = avoirConjugaison.ils + " " + participePasse;

  return `j'${je}, tu ${tu}, il/elle/on ${il}, nous ${nous}, vous ${vous}, ils/elles ${ils}`;
}

function conjuguerPremierGroupeFutur(verbe) {
  const infinitifRadical = verbe.slice(0, -2);
  const je = infinitifRadical + "erai";
  const tu = infinitifRadical + "eras";
  const il = infinitifRadical + "era";
  const nous = infinitifRadical + "erons";
  const vous = infinitifRadical + "erez";
  const ils = infinitifRadical + "eront";

  return `je ${je}, tu ${tu}, il/elle/on ${il}, nous ${nous}, vous ${vous}, ils/elles ${ils}`;
}

function conjuguerDeuxiemeGroupePresent(verbe) {
  const je = verbe.slice(0, -2) + "is";
  const tu = je;
  const il = verbe.slice(0, -2) + "it";
  const nous = verbe.slice(0, -2) + "issons";
  const vous = verbe.slice(0, -2) + "issez";
  const ils = verbe.slice(0, -2) + "issent";

  return `je ${je}, tu ${tu}, il/elle/on ${il}, nous ${nous}, vous ${vous}, ils/elles ${ils}`;
}

function conjuguerDeuxiemeGroupeImparfait(verbe) {
  const je = verbe.slice(0, -2) + "issais";
  const tu = je;
  const il = verbe.slice(0, -2) + "issait";
  const nous = verbe.slice(0, -2) + "issions";
  const vous = verbe.slice(0, -2) + "issiez";
  const ils = verbe.slice(0, -2) + "issaient";

  return `je ${je}, tu ${tu}, il/elle/on ${il}, nous ${nous}, vous ${vous}, ils/elles ${ils}`;
}

function conjuguerDeuxiemeGroupePasseCompose(verbe) {
  const participePasse = verbe.slice(0, -2) + "i";
  const etreConjugaison = {
    je: "suis",
    tu: "es",
    il: "est",
    nous: "sommes",
    vous: "êtes",
    ils: "sont",
  };

  const je = etreConjugaison.je + " " + participePasse;
  const tu = etreConjugaison.tu + " " + participePasse;
  const il = etreConjugaison.il + " " + participePasse;
  const nous = etreConjugaison.nous + " " + participePasse;
  const vous = etreConjugaison.vous + " " + participePasse;
  const ils = etreConjugaison.ils + " " + participePasse;

  return `je ${je}, tu ${tu}, il/elle/on ${il}, nous ${nous}, vous ${vous}, ils/elles ${ils}`;
}

function conjuguerDeuxiemeGroupeFutur(verbe) {
  const infinitifRadical = verbe.slice(0, -2);
  const je = infinitifRadical + "irai";
  const tu = infinitifRadical + "iras";
  const il = infinitifRadical + "ira";
  const nous = infinitifRadical + "irons";
  const vous = infinitifRadical + "irez";
  const ils = infinitifRadical + "iront";

  return `je ${je}, tu ${tu}, il/elle/on ${il}, nous ${nous}, vous ${vous}, ils/elles ${ils}`;
}

conjuguerButton.addEventListener("click", conjuguerVerbe);

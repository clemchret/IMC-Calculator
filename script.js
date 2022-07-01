//Fonction uniquement dédiée au calcul de l'imc permettent d'être réutilisée facilement.
function test(){
    let taille = parseInt(document.getElementById("taille").value);
    let poids = parseInt(document.getElementById("poids").value);
    const IMC = (poids / Math.pow( (taille/100), 2 )).toFixed(1);
    return IMC;
};

//Fonction unqieuemnt dédiée à l'affichage du restultat
function getIMC(){
    let resultatIMC = document.getElementById('resultatIMC');
    let resultatCat = document.getElementById('resultatCategorie');

    switch(true){
        case (test() <= 18.5):
            resultatIMC.innerHTML = (`Votre IMC est de ${test()}`);
            resultatCat.innerHTML = ('Vous êtes trop mince !');
            resultatCat.classList.add("mince");
            break;
        case (test() > 18.5 && test() <= 24.9):
            resultatIMC.innerHTML = (`Votre IMC est de ${test()}.`);
            resultatCat.innerHTML = ('Vous êtes normal !');
            resultatCat.classList.add("normam");
            break;
        case (test() > 24.9 && test() <= 29.9):
            resultatIMC.innerHTML = (`Votre IMC est de ${test()}.`);
            resultatCat.innerHTML = ('Vous êtes en surpoids !');
            resultatCat.classList.add("surpoids");
            break;
        case (test() > 29.9 && test() <= 35):
            resultatIMC.innerHTML = (`Votre IMC est de ${test()}.`);
            resultatCat.innerHTML = ('Vous êtes obèse !');
            resultatCat.classList.add("obese");
            break;
        case (test() > 35):
            resultatIMC.innerHTML = (`Votre IMC est de ${test()}.`);
            resultatCat.innerHTML = ('Vous êtes en obésité morbide !');
            resultatCat.classList.add("obeseMob");
            break;
    };
};

//Écouteur d'évènement pour éviter le javascript en inline dans l'HTML.
document.getElementById("submit").addEventListener("click", getIMC);

const inputs = document.querySelectorAll('.controls input');
console.log(inputs);
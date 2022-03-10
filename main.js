class Character {

    constructor(name, gender, height, mass, hairColor) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.pictureUrl = "";
    }


    compareName(otherCharacter) {

    }

    compareGender(otherCharacter) {

    }

    compareHeight(otherCharacter) {

    }

    compareMass(otherCharacter) {

    }

    compareHairColor(otherCharacter) {

    }




}

let getData = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json;
};


let fetchedDataArray = [];
let newCharacters = []

const render = async (idOne, idTwo) => {

    let characterOne = await getData(`https://swapi.dev/api/people/${idOne}/`);
    let characterTwo = await getData(`https://swapi.dev/api/people/${idTwo}/`);

    fetchedDataArray.push(characterOne, characterTwo);
    console.log(fetchedDataArray);

    fetchedDataArray.forEach(character => {


        let Container = document.getElementById("characterContainer");

        let newCharacter = new Character(character.name, character.gender, character.height, character.mass, character.hair_color);
        newCharacters.push(newCharacter);

    });

    console.log(newCharacters);
}


let getDataButton = document.getElementById("getDataBtn");


getDataButton.addEventListener("click", (e) => {
    e.preventDefault();

    let CharacterOneID = document.getElementById("selectCharacter1").value;
    let CharacterTwoID = document.getElementById("selectCharacter2").value;

    render(CharacterOneID, CharacterTwoID);


});



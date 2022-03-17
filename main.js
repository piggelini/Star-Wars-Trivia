let getDataButton = document.getElementById("getDataBtn");


class Character {

    constructor(name, gender, height, mass, hairColor) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.pictureUrl = "";
    }

    getTextBox() {
        let textboxes = document.querySelectorAll(".textbox");
        let textbox;

        textboxes.forEach(box => {

            if (box.id.includes(this.name)) {
                textbox = box;
            }
        });

        return textbox;
    }


    compareGender(otherCharacter) {

        let textbox = this.getTextBox();
        let text =
            `
            <p>${otherCharacter.name} is of ${otherCharacter.gender} gender.</p>
            `;
        textbox.innerHTML = text;
        if (this.gender === otherCharacter.gender) {
            let text =
                `
                <p>${otherCharacter.name} has the same gender as me.</p>
                `;
            textbox.innerHTML += text;
        }
    }

    compareHeight(otherCharacter) {
        let textbox = this.getTextBox();
        let text =
            `
            <p>${otherCharacter.name}'s height is ${otherCharacter.height}cm.</p>
            `;
        textbox.innerHTML = text;
        let myHeight = parseInt(this.height);
        let theirHeight = parseInt(otherCharacter.height);
        if (myHeight > theirHeight) {
            let difference = myHeight - theirHeight;
            let text =
                `
                <p>${otherCharacter.name} is ${difference}cm shorter than me.</p>
                `;
            textbox.innerHTML += text;
        } else if (myHeight < theirHeight) {
            let difference = theirHeight - myHeight;
            let text =
                `
                <p>${otherCharacter.name} is ${difference}cm taller than me.</p>
                `;
            textbox.innerHTML += text;
        } else {
            let text =
                `
                <p>${otherCharacter.name} is the same height as me.</p>
                `;
            textbox.innerHTML += text;
        }
    }

    compareMass(otherCharacter) {
        let textbox = this.getTextBox();
        let text =
            `
            <p>${otherCharacter.name}'s weight is ${otherCharacter.mass}kg.</p>
            `;
        textbox.innerHTML = text;

        let myWeight = parseInt(this.mass);
        let theirWeight = parseInt(otherCharacter.mass);
        console.log(myWeight, theirWeight);

        if (myWeight > theirWeight) {
            let difference = myWeight - theirWeight;
            let text =
                `
                <p>${otherCharacter.name} is ${difference}kg lighter than me.</p>
                `;
            textbox.innerHTML += text;
        } else if (myWeight < theirWeight) {
            let difference = theirWeight - myWeight;
            let text =
                `
                <p>${otherCharacter.name} is ${difference}kg heavier than me.</p>
                `;
            textbox.innerHTML += text;
        } else {
            let text =
                `
                <p>${otherCharacter.name} is the same weight as me.</p>
                `;
            textbox.innerHTML += text;
        }

    }

    compareHairColor(otherCharacter) {
        let textbox = this.getTextBox();
        let text =
            `
            <p>${otherCharacter.name} has ${otherCharacter.hairColor} hair.</p>
            `;
        textbox.innerHTML = text;
        if (this.hairColor === otherCharacter.hairColor) {
            let text =
                `
                <p>${otherCharacter.name} has the same haircolor as me.</p>
                `;
            textbox.innerHTML += text;
        }
    }
}




let getData = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json;
};



const render = async (idOne, idTwo) => {

    let fetchedDataArray = [];
    let newCharacters = [];

    let characterOne = await getData(`https://swapi.dev/api/people/${idOne}/`);
    let characterTwo = await getData(`https://swapi.dev/api/people/${idTwo}/`);

    fetchedDataArray.push(characterOne, characterTwo);
    console.log(fetchedDataArray);

    fetchedDataArray.forEach(character => {

        let newCharacter = new Character(character.name, character.gender, character.height, character.mass, character.hair_color);

        if (character === characterOne) {
            newCharacter.pictureUrl = `images/${idOne}.jpg`;
        } else {
            newCharacter.pictureUrl = `images/${idTwo}.jpg`;
        }

        newCharacters.push(newCharacter);
        console.log(newCharacter.pictureUrl);
    });

    let Container = document.getElementById("characterContainer");
    Container.innerHTML = "";

    newCharacters.forEach((character) => {

        let characterDiv =
            `
            <div id="characterDiv">
            <h2>${character.name}</h2>
            <img src="${character.pictureUrl}" alt="Picture of ${character.name}">
            
            <div class= "textbox" id="textbox${character.name}"></div>
            <button class="genderButton" id="gender${character.name}">Compare gender</button>
            <button class="heightButton" id="height${character.name}">Compare height</button>
            <button class="massButton" id="mass${character.name}">Compare weight</button>
            <button class="haircolorButton" id="haircolor${character.name}">Compare haircolor</button>
            </div>
        
        `
        Container.innerHTML += characterDiv;
    })

    let genderButtons = document.querySelectorAll(".genderButton");
    let heightButtons = document.querySelectorAll(".heightButton");
    let massButtons = document.querySelectorAll(".massButton");
    let haircolorButtons = document.querySelectorAll(".haircolorButton");

    genderButtons.forEach(genderButton => {
        genderButton.addEventListener("click", (e) => {
            let otherCharacter;
            let mainCharacter;

            newCharacters.forEach(character => {
                if (!genderButton.id.includes(character.name)) {
                    otherCharacter = character;
                    console.log(otherCharacter);
                } else {
                    mainCharacter = character;
                    console.log(mainCharacter);
                }
            })
            mainCharacter.compareGender(otherCharacter);
        })
    })

    heightButtons.forEach(heightButton => {
        heightButton.addEventListener("click", (e) => {
            let otherCharacter;
            let mainCharacter;

            newCharacters.forEach(character => {
                if (!heightButton.id.includes(character.name)) {
                    otherCharacter = character;
                    console.log(otherCharacter);
                } else {
                    mainCharacter = character;
                    console.log(mainCharacter);
                }
            })
            mainCharacter.compareHeight(otherCharacter);
        })
    })

    massButtons.forEach(massButton => {
        massButton.addEventListener("click", (e) => {
            let otherCharacter;
            let mainCharacter;

            newCharacters.forEach(character => {
                if (!massButton.id.includes(character.name)) {
                    otherCharacter = character;
                    console.log(otherCharacter);
                } else {
                    mainCharacter = character;
                    console.log(mainCharacter);
                }
            })
            mainCharacter.compareMass(otherCharacter);
        })
    })

    haircolorButtons.forEach(haircolorButton => {
        haircolorButton.addEventListener("click", (e) => {
            let otherCharacter;
            let mainCharacter;

            newCharacters.forEach(character => {
                if (!haircolorButton.id.includes(character.name)) {
                    otherCharacter = character;
                    console.log(otherCharacter);
                } else {
                    mainCharacter = character;
                    console.log(mainCharacter);
                }
            })
            mainCharacter.compareHairColor(otherCharacter);
        })
    })
}



function displayErrorMessage(value) {
    let errorContainer = document.querySelector(".error");
    errorContainer.style.display = value;
}


getDataButton.addEventListener("click", (e) => {
    e.preventDefault();

    let CharacterOneID = document.getElementById("selectCharacter1").value;
    let CharacterTwoID = document.getElementById("selectCharacter2").value;

    if (CharacterOneID !== CharacterTwoID) {
        displayErrorMessage("none");
        render(CharacterOneID, CharacterTwoID);
    } else {
        displayErrorMessage("block");
    }
});



// Define the elements
const elements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const elementNames = [
    "Idrogeno", "Elio", "Litio", "Berillio", "Boro", "Carbonio", "Azoto", "Ossigeno", "Fluoro", "Neon", "Sodio", "Magnesio", "Alluminio", "Silicio", "Fosforo", "Zolfo", "Cloro", "Argon", "Potassio", "Calcio", "Scandio", "Titanio", "Vanadio", "Cromo", "Manganese", "Ferro", "Cobalto", "Nichel", "Rame", "Zinco", "Gallio", "Germanio", "Arsenico", "Selenio", "Bromo", "Kripton", "Rubidio", "Stronzio", "Ittrio", "Zirconio", "Niobio", "Molibdeno", "Tecnezio", "Rutenio", "Rodio", "Palladio", "Argento", "Cadmio", "Indio", "Stagno", "Antimonio", "Tellurio", "Iodio", "Xenon", "Cesio", "Bario", "Lantanio", "Cerio", "Praseodimio", "Neodimio", "Promezio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Olmio", "Erbio", "Tulio", "Itterbio", "Lutezio", "Afnio", "Tantalio", "Tungsteno", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Tallio", "Piombo", "Bismuto", "Polonio", "Astato", "Radon", "Francio", "Radio", "Attinio", "Torio", "Protoattinio", "Uranio", "Nettunio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einsteinio", "Fermio", "Mendelevio", "Nobelio", "Laurenzio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadtio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Tennesso", "Oganesson" 
];

const elementNumbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118"
];

// List of diet options and elements associated with each diet
const DietsList = [
    "Elements of a smartphone", "Elements of life", "Critical raw elements",
    "Elements of DNA", "Radioactive elements (U-Th decay series)",
    "Elements considered safety (grades A-E) in the first wall of fusion power plan",
    "Elements dedicated to scientists", "Elements with names of latin derivation",
    "Elements with names of greek derivation",
    "Elements with names derived from cities, countries, or elsewhere",
    "Elements with names not derived from latin or greek, nor from cities or countries",
    "Elements in solid state at standard temperature and pressure",
    "Elements in liquid state at standard temperature and pressure",
    "Elements in gas state at standard temperature and pressure", "Metals", "Nonmetals",
    "Elements of group I (Hydrogen & alkali metals)",
    "Elements of group II (Alkaline earth metals)", "elements of group XV (Pnictogens)",
    "Elements of group XVI (Chalcogens)", "elements of group XVII (Halogens)",
    "Elements of group XVIII (Noblegases)", "Lanthanides", "Actinides",
    "Transition metals", "Post-transition metals", "Metalloids", "Reactive nonmetals",
    "s-block elements", "p-block elements", "d-block elements", "f-block elemnts"
];

const diets = {
    "Elements of a smartphone": ["H", "Li", "Be", "B", "C", "O", "F", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Br", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "Ba", "La", "Ce", "Pr", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Os", "Ir", "Pt", "Au", "Hg", "Pb", "Bi"],
    "Elements of life": ["O", "C", "H", "N", "P", "Ca", "S", "K", "Na", "Cl", "Mg", "Fe", "Zn", "Cr", "Co", "Cu", "Mn", "Mo", "Ni", "V", "Si", "B", "Se", "F", "I", "Br"],
    "Critical raw elements": ["Sb", "Ba", "Al", "Be", "Bi", "B", "Co", "F", "Ga", "Ge", "Hf", "In", "Li", "Mg","Nb","P", "Sc","Si","Sr","Ta","Ti","W","V"],
    "Elements of DNA": ["C", "H", "O", "N", "P"],
    "Radioactive elements (U-Th decay series)": ["U", "Th", "Pa", "Ra", "Rn", "Po", "Pb", "Bi", "Pu", "Ac", "Tl", "Am", "Np"],
    "Elements considered safety (grades A-E) in the first wall of fusion power plan": ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Mg", "Al", "Si", "P", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Fe", "Co", "Ni", "Cu", "Ge", "Se", "Kr", "Sr", "Y", "Ru", "Sn", "Te", "I", "Xe", "Cs", "Ba", "Ce", "Nd", "Sm", "Dy", "Yb", "Lu", "Tl"],
    "Elements dedicated to scientists": ["Ge", "Sm", "Gd", "Bi", "Cm", "Es", "Fm", "No", "Lr", "Rf", "Sg", "Bh", "Mt", "Rg", "Og"],
    "Elements with names of latin derivation": ["B", "C", "F", "Na", "Al", "Si", "S", "K", "Ca", "Sc", "Mn", "Fe", "Cu", "Ga", "Ge", "Rb", "Ru", "Pd", "In", "Sn", "Sb", "Te", "Cs", "La", "Ce", "Pm", "Eu", "Ho", "Tm", "Lu", "Hf", "Ta", "Ir", "Au", "Hg", "Pb", "Bi", "Po", "Rn", "Ra", "Np", "Cm", "Hs"],
    "Elements with names of greek derivation": ["H", "He", "Li", "Be", "N", "O", "Ne", "P", "Cl", "Ar", "Ti", "Cr", "Co", "As", "Se", "Br", "Kr", "Nb", "Mo", "Tc", "Rh", "Ag", "Cd", "Sb", "I", "Xe", "Ba", "La", "Pr", "Nd", "Dy", "Os", "Tl", "Bi", "At", "Ac", "Pa", "U", "Pu"],
    "Elements with names derived from cities, countries, or elsewhere": ["Mg", "Sc", "Mn", "Ga", "Ge", "Se", "Sr", "Y", "Nb", "Tc", "Ru", "Pd", "Cd", "Te", "Eu", "Tb", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Re", "Bi", "Po", "Fr", "U", "Np", "Am", "Bk", "Cf", "Db", "Hs", "Ds"],
    "Elements with names not derived from latin or greek, nor from cities or countries": ["V", "Ni", "Zn", "Zr", "Sb", "W", "Pt", "Th"],
    "Elements in solid state at standard temperature and pressure": ["Li", "Be", "B", "C", "Na", "Mg", "Al", "Si", "P", "S",  "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Tl", "Pb", "Bi", "Po", "At", "Fr", "Ra", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Elements in liquid state at standard temperature and pressure": ["Hg", "Br"],
    "Elements in gas state at standard temperature and pressure": ["H", "He", "N", "O", "F", "Ne","Cl", "Ar", "Kr", "Xe", "Rn"],
    "Metals": ["Li", "Be", "Na", "Mg", "Al", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Nonmetals": ["H", "He", "B", "C", "N", "O", "F", "Ne", "Si", "P", "S", "Cl", "Ar", "Ge", "As", "Se", "Br", "Kr", "Sb", "Te", "I", "Xe", "At", "Rn"],
    "Elements of group I (Hydrogen & alkali metals)": ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
    "Elements of group II (Alkaline earth metals)": ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    "Elements of group XV (Pnictogens)": ["N", "P", "As", "Sb", "Bi", "Mc"],
    "Elements of group XVI (Chalcogens)": ["O", "S", "Se", "Te", "Po", "Lv"],
    "Elements of group XVII (Halogens)": ["F", "Cl", "Br", "I", "At", "Ts"],
    "Elements of group XVIII (Noblegases)": ["He", "Ne","Ar", "Kr", "Xe", "Rn", "Og"],
    "Lanthanides": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],
    "Actinides": ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Transition metals": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
    "Post-transition metals": ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po"],
    "Metalloids": ["B", "Si", "Ge", "As", "Sb", "Te", "At"],
    "Reactive nonmetals": ["H", "C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"],
    "s-block elements": ["H", "He", "Li", "Be", "Na", "Mg", "K", "Ca", "Rb", "Sr", "Cs", "Ba", "Fr", "Ra"],
    "p-block elements": ["B", "C", "N", "O", "F", "Ne", "Al", "Si", "P", "S", "Cl", "Ar", "Ga", "Ge", "As", "Se", "Br", "Kr", "In", "Sn", "Sb", "Te", "I", "Xe", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"],
    "d-block elements": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
    "f-block elements": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No"],
};

// Ref. elements of a smartphone: https://meg.resourcesregulator.nsw.gov.au/sites/default/files/2022-11/periodic-table-of-mobile-phones-a3complete.pdf
// Ref. elements of a smartphone: https://doi.org/10.1016/j.resourpol.2020.101750

// Initialize game state
const SIZE = 20;
const CANVAS_WIDTH = 620;
const CANVAS_HEIGHT = 520;
let gameInterval = null;
let direction = { x: 1, y: 0 };
let score = 0;
let food = {};
let selectedDiet = "";
let foodElement = "";
let foodElementName = "";
let foodElementNumber = "";
// Posizione iniziale del serpente
let snake = [{ x: 100, y: 100 }];
let snakeColors = ["green"];
let scoreText = null;
let scoreTextNo = null;
//let SPEED = 150;
let infoRects = [];
let infoRectsNo = [];
let erasedElements = [];
let scoreIncrement = 0;
let scoreDecrement = 0;
let hpSquares = 10;

// Evitare il comportamento predefinito dei tasti freccia
document.addEventListener('keydown', (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
    }
});

// Funzione per aggiornare la selezione e la lista di elementi scartati
function updateElementCount() {
    const rangeValue = document.getElementById('elementRange').value; // Valore massimo di Z
    const maxZ = parseInt(rangeValue);

    // Aggiorna il contenuto della variabile erasedElements con elementi oltre il valore massimo di Z
    erasedElements = elements.slice(maxZ);

    // Aggiorna il testo mostrato all'utente
    document.getElementById('selectedElementCount').textContent = `1 ≤ Z ≤ ${maxZ}`;
}

function startGame() {
    initializeGameVariables(); // Reinizializza tutte le variabili per una nuova partita
    gameLoop();
}

document.addEventListener('keydown', (event) => {

    if (event.key === ' ') {
        event.preventDefault(); // Previene il comportamento predefinito della barra spaziatrice
        updateHPBar();
        changeFoodElement();    // Cambia l'elemento del cibo senza cambiarne la posizione
        
    } else {
        const newDirection = { x: direction.x, y: direction.y };

        // Determina la nuova direzione in base al tasto premuto
        switch (event.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                if (direction.y === 0) newDirection.x = 0, newDirection.y = -1;
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                if (direction.y === 0) newDirection.x = 0, newDirection.y = 1;
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (direction.x === 0) newDirection.x = -1, newDirection.y = 0;
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (direction.x === 0) newDirection.x = 1, newDirection.y = 0;
                break;
        }

        // Verifica che il cambio di direzione non causi una collisione immediata
        const nextHead = {
            x: snake[0].x + newDirection.x * SIZE,
            y: snake[0].y + newDirection.y * SIZE
        };

        // Se la nuova posizione della testa non collide con il corpo, aggiorna la direzione
        if (!snake.some(part => part.x === nextHead.x && part.y === nextHead.y)) {
            direction = newDirection;
        }
    }
});

function changeFoodElement() {
    generateFood();
    drawFood();
    updateScore(score); 
}

function drawFood() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(food.x, food.y, SIZE, SIZE);

    ctx.fillStyle = "red"; // Colore per il simbolo dell'elemento
    ctx.font = "20px Arial"; // Imposta la dimensione del font
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Disegna il simbolo dell'elemento nel punto (x, y) del cibo
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);
}

function showDietSelection() {
    const dietDropdown = document.getElementById("dietDropdown");
    dietDropdown.innerHTML = "";

    DietsList.forEach(diet => {
        let option = document.createElement("option");
        option.value = diet;
        option.textContent = diet;
        dietDropdown.appendChild(option);
    });
    document.getElementById('title').style.display = 'block';
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('dietSelection').style.display = 'block';
}

function startNewGame() {
    selectedDiet = document.getElementById("dietDropdown").value;

    // Aggiorna le istruzioni dinamicamente con la dieta selezionata
    updateInstructions(selectedDiet);

    // Calcola i valori di incremento e decremento del punteggio
    initializeScoreValues();

    initializeHPBar();

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    document.getElementById('dietSelection').style.display = 'none';
    canvas.style.display = 'block';

    snake = [{ x: 100, y: 100 }];
    snakeColors = ["green"]; // Resetta i colori del serpente, partendo con la testa verde
    direction = { x: 1, y: 0 };
    score = 0;
    updateScore(score);
    generateFood();
    startGameLoop(ctx);
}

function updateInstructions(selectedDiet) {
    const instruction = document.getElementById("eat-instruction");
    instruction.innerHTML = `Eat the elements that belong to the <b>${selectedDiet}</b>.`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainMenu').style.display = 'block';
    updateScore(score);
});

function initializeScoreValues() {
    const rangeValue = parseInt(document.getElementById('elementRange').value);
    const validDietElementsCount = calculateValidDietElements();
    scoreIncrement = Math.round(100 * (rangeValue - validDietElementsCount) / rangeValue);
    scoreDecrement = Math.round(100 * validDietElementsCount / rangeValue);
}

function calculateValidDietElements() {
    // Calcola il numero di elementi nella dieta effettivamente validi
    const selectedDietElements = diets[selectedDiet] || [];
    const validDietElements = selectedDietElements.filter(el => !erasedElements.includes(el));
    return validDietElements.length;
}

function generateFood() {
    const margin = SIZE;
    const maxX = Math.floor((CANVAS_WIDTH - margin * 2) / SIZE);
    const maxY = Math.floor((CANVAS_HEIGHT - margin * 2) / SIZE);

    let foodPositionValid = false;

    // Continua a generare una posizione valida finché non trovi una che non è sopra il serpente
    while (!foodPositionValid) {
        food = {
            x: Math.floor(Math.random() * maxX) * SIZE + margin,
            y: Math.floor(Math.random() * maxY) * SIZE + margin
        };

        // Verifica che il cibo non sia sopra il serpente
        foodPositionValid = !snake.some(part => part.x === food.x && part.y === food.y);
    }
    
    let elementIndex;
    // Continua a generare un elemento finché non ne trovi uno che non è in erasedElements
    do {
        elementIndex = Math.floor(Math.random() * elements.length);
        foodElement = elements[elementIndex];
    } while (erasedElements.includes(foodElement));

    // Assegna nome e numero dell’elemento selezionato
    foodElementName = elementNames[elementIndex];
    foodElementNumber = elementNumbers[elementIndex];

    drawFood();
    updateScore(score);
}

function startGameLoop(ctx) {
    gameInterval = setInterval(() => {
        updateGame(ctx);
    }, window.SPEED);
}

function createInfoRect(element, x, y) {
    infoRects.push({
        x: x, // Posizione iniziale
        y: y,
        atomicNumber: element.atomicNumber,
        symbol: element.symbol,
        name: element.name,
        opacity: 1 // Opacità iniziale
    });
}

function createInfoRectNo(element, x, y) {
    infoRectsNo.push({
        x: x, // Posizione iniziale
        y: y,
        atomicNumber: element.atomicNumber,
        symbol: element.symbol,
        name: element.name,
        opacity: 1 // Opacità iniziale
    });
}

function updateScore(newScore) {
    const scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.style.color = "fff";
    scoreBoard.style.padding = "5px";
    scoreBoard.style.border = "2px solid #78b3e0";
    scoreBoard.style.borderRadius = "0px";
    scoreBoard.style.fontFamily = "Arial, sans-serif";
    scoreBoard.style.backgroundColor = "rgb(0, 47, 95)";
    scoreBoard.style.textAlign = "center";
    scoreBoard.style.margin = "0px auto";
    scoreBoard.style.width = CANVAS_WIDTH;

    const selectedDietDiv = document.getElementById('selectedDietText');
    selectedDietDiv.style.display = 'block';
    selectedDietDiv.style.fontSize = '1.5em';
    selectedDietDiv.style.fontWeight = 'bold';
    selectedDietDiv.style.marginBottom = '5px';
    selectedDietDiv.style.color = 'white'; // Colore del testo
    selectedDietDiv.textContent = selectedDiet;

    scoreBoard.innerHTML = `
        <div style="font-size: 1.2em; margin-bottom: 5px;">
            <b>${newScore}</b>
        </div>`;
}

function updateGame(ctx) {
    // Aggiorna la posizione del serpente
    let head = {
        x: snake[0].x + direction.x * SIZE,
        y: snake[0].y + direction.y * SIZE
    };
    
    // Implementazione del wrap-around
    if (head.x < 0) {
        head.x = CANVAS_WIDTH - SIZE; // Passa dal bordo sinistro a quello destro
    } else if (head.x >= CANVAS_WIDTH) {
        head.x = 0; // Passa dal bordo destro a quello sinistro
    }

    if (head.y < 0) {
        head.y = CANVAS_HEIGHT - SIZE; // Passa dal bordo superiore a quello inferiore
    } else if (head.y >= CANVAS_HEIGHT) {
        head.y = 0; // Passa dal bordo inferiore a quello superiore
    }
 
    // Controlla se il serpente si scontra con se stesso
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            exitGame();
            return;
        }
    }
            
    // Aggiungi la nuova testa
    snake.unshift(head);

    // Controlla se il serpente mangia il cibo
    if (head.x === food.x && head.y === food.y) {
        if (diets[selectedDiet] && diets[selectedDiet].includes(foodElement)) {
            score += scoreIncrement;

            scoreText = {
                value: `+${scoreIncrement}`,
                x: food.x + SIZE/2 ,
                y: food.y - 10,
                opacity: 1.0 // Trasparenza iniziale
            };

            createInfoRect({
                atomicNumber: foodElementNumber,
                symbol: foodElement,
                name: foodElementName
            }, food.x, food.y);
            
            snakeColors.unshift("green");
            expandFoodEffect(food.x, food.y); // Espansione prima di sparire
            
        } else {
            score -= scoreDecrement;

             scoreTextNo = {
                value: `-${scoreDecrement}`,
                x: food.x + SIZE/2 ,
                y: food.y - 10,
                opacity: 1.0 // Trasparenza iniziale
            };

            createInfoRectNo({
                atomicNumber: foodElementNumber,
                symbol: foodElement,
                name: foodElementName
            }, food.x, food.y);
            
            snakeColors.unshift("red");
            flashEffect("rgba(229, 26, 75, 0.5)", food.x, food.y); // Lampeggio per errore
        }
         // Rimuove i colori extra se il serpente è più corto della lista colori
        if (snakeColors.length > snake.length) {
            snakeColors.pop();
        }
        updateScore(score);
        generateFood();
    } else {
        snake.pop();
    }

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Gestione animazione della scritta del punteggio positivo
    if (scoreText) {
        ctx.fillStyle = `rgba(120, 179, 224, ${scoreText.opacity})`; // Imposta trasparenza
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(scoreText.value, scoreText.x, scoreText.y);

        // Aggiorna la posizione e la trasparenza
        scoreText.y -= 8; // Si sposta verso l'alto
        scoreText.opacity -= 0.04; // Si dissolve

        // Rimuovi la scritta quando diventa completamente trasparente
        if (scoreText.opacity <= 0) {
            scoreText = null;
        }
    }

    // Gestione animazione della scritta del punteggio negativo
    if (scoreTextNo) {
        ctx.fillStyle = `rgba(247, 157, 39, ${scoreTextNo.opacity})`; // Imposta trasparenza
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(scoreTextNo.value, scoreTextNo.x, scoreTextNo.y);

        // Aggiorna la posizione e la trasparenza
        scoreTextNo.y += 1; // Si sposta verso il basso
        scoreTextNo.opacity -= 0.06; // Si dissolve

        // Rimuovi la scritta quando diventa completamente trasparente
        if (scoreTextNo.opacity <= 0) {
            scoreTextNo = null;
        }
    }

    function flashEffect(color, x, y) {
        let flashCount = 0;
        const interval = setInterval(() => {
            ctx.fillStyle = color;
            ctx.fillRect(x - SIZE / 2, y - SIZE / 2, SIZE * 2, SIZE * 2);
            flashCount++;
            if (flashCount > 4) {
                clearInterval(interval);
                ctx.clearRect(x - SIZE / 2, y - SIZE / 2, SIZE * 2, SIZE * 2);
            }
        }, 100);
    }

    function expandFoodEffect(x, y) {
        let size = SIZE;
        const expandInterval = setInterval(() => {
            size += 2;
            ctx.clearRect(x - size / 2, y - size / 2, size, size);
            ctx.fillStyle = "rgb(120, 179, 224)";
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }, 30);
        setTimeout(() => {
            clearInterval(expandInterval);
            ctx.clearRect(x - size / 2, y - size / 2, size, size); // Rimuove il cibo
        }, 300);
    }

    // Gestione animazione dei rettangoli informativi
    for (let i = infoRects.length - 1; i >= 0; i--) {
        const rect = infoRects[i];
    
        // Disegna il rettangolo
        ctx.fillStyle = `rgba(173, 176, 184, ${rect.opacity})`; // Sfondo grigio con opacità
        ctx.strokeStyle = `rgba(150, 174, 33, ${rect.opacity})`; // Bordo verde con opacità
        ctx.lineWidth = 2;
        ctx.fillRect(rect.x, rect.y, 80, 80); // Rettangolo
        ctx.strokeRect(rect.x, rect.y, 80, 80); // Bordo

        // Disegna il testo
        ctx.fillStyle = `rgba(65, 127, 69, ${rect.opacity})`; // Testo verde con opacità
        ctx.font = "14px Arial";
        ctx.textAlign = "left";
        ctx.fillText(rect.atomicNumber, rect.x + 5, rect.y + 10); // Numero atomico
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";
        ctx.fillText(rect.symbol, rect.x + 40, rect.y + 40); // Simbolo
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(rect.name, rect.x + 40, rect.y + 70); // Nome dell'elemento

        // Aggiorna la posizione e l'opacità
        rect.y -= 1; // Si sposta verso l'alto
        rect.opacity -= 0.01; // (Opzionale, rimuovi questa linea se non vuoi trasparenza)

        // Rimuovi il rettangolo se esce dall'area di gioco o è completamente trasparente
        if (rect.y + 70 < 0 || rect.opacity <= 0) {
            infoRects.splice(i, 1); // Rimuovi dall'array
        }
    }

    // Gestione animazione dei rettangoli informativi
    for (let i = infoRectsNo.length - 1; i >= 0; i--) {
        const rect = infoRectsNo[i];
    
        // Disegna il rettangolo
        ctx.fillStyle = `rgba(173, 176, 184, ${rect.opacity})`; // Sfondo grigio con opacità
        ctx.strokeStyle = `rgba(229, 26, 75, ${rect.opacity})`; // Bordo rosso con opacità
        ctx.lineWidth = 2;
        ctx.fillRect(rect.x, rect.y, 80, 80); // Rettangolo
        ctx.strokeRect(rect.x, rect.y, 80, 80); // Bordo

        // Disegna il testo
        ctx.fillStyle = `rgba(229, 26, 75, ${rect.opacity})`; // Testo rosso con opacità
        ctx.font = "14px Arial";
        ctx.textAlign = "left";
        ctx.fillText(rect.atomicNumber, rect.x + 5, rect.y + 10); // Numero atomico
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";
        ctx.fillText(rect.symbol, rect.x + 40, rect.y + 40); // Simbolo
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(rect.name, rect.x + 40, rect.y + 70); // Nome dell'elemento

        // Aggiorna la posizione e l'opacità
        rect.y += 2; // Si sposta verso il basso
        rect.opacity -= 0.01; // (Opzionale, rimuovi questa linea se non vuoi trasparenza)

        // Rimuovi il rettangolo se esce dall'area di gioco o è completamente trasparente
        if (rect.y > 520 || rect.opacity <= 0) {
            infoRectsNo.splice(i, 1); // Rimuovi dall'array
        }
    }
    
    // Draw the snake
       snake.forEach((part, index) => {
        if (index === 0) { // La testa del serpente
            if (snakeColors[0] === "red") {
                ctx.fillStyle = "rgb(229, 26, 75)"; // Testa rossa per errore
            } else {
                ctx.fillStyle = "rgb(65, 127, 69)"; // Testa verde per successo
            }
        } else {
            ctx.fillStyle = snakeColors[index] || `rgb(150, 174, 33)`; // Segmenti successivi
        }
        ctx.fillRect(part.x, part.y, SIZE, SIZE);
        ctx.strokeStyle = "rgb(0, 47, 95)";
        ctx.lineWidth = 2;
        ctx.strokeRect(part.x, part.y, SIZE, SIZE);
    });

    // Effetto glow intorno al cibo
    //ctx.shadowColor = "rgb(247, 157, 39)"; // Colore del bagliore
    //ctx.shadowBlur = 10;

    // Disegna sfondo cibo
    ctx.fillStyle = "rgb(120, 179, 224)";
    ctx.fillRect(food.x, food.y, SIZE, SIZE);

    // Reset shadowBlur per evitare che influenzi altri elementi
    //ctx.shadowBlur = 0;
    
    // Draw the food element symbol
    ctx.fillStyle = "rgb(229, 26, 75)"; // Colore del simbolo
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);

    // Disegna il numero atomico sotto il simbolo
    //ctx.font = "12px Arial"; // Numero atomico più piccolo
    //ctx.fillText(foodElementNumber, food.x + SIZE / 2, food.y + (2 * SIZE) / 3);

    // Draw game area border
    ctx.strokeStyle = "#83B7DE";
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            
}

function initializeHPBar() {
    const hpBarContainer = document.getElementById('hpBarContainer');
    hpBarContainer.innerHTML = ''; // Pulisci il contenitore

    for (let i = 0; i < hpSquares; i++) {
        const square = document.createElement('div');
        square.className = 'hpSquare';
        if (i < 4) square.style.backgroundColor = 'red';
        else if (i < 6) square.style.backgroundColor = 'orange';
        else square.style.backgroundColor = 'green';
        hpBarContainer.appendChild(square);
    }

    hpBarContainer.style.display = 'flex'; // Mostra la barra
}

function updateHPBar() {
      if (selectedDiet && diets[selectedDiet]?.includes(foodElement)) {
        // L'elemento corrente è valido
        if (hpSquares > 0) {
            // Rimuovi un quadratino dalla barra HP
            const hpBarContainer = document.getElementById('hpBarContainer');
            hpBarContainer.removeChild(hpBarContainer.lastChild);
            hpSquares--;
            console.log("Elemento valido! HP -1");
        } else {
            console.log("Non ci sono più HP disponibili!");
        }
    } else {
        // L'elemento corrente non è valido
        if (hpSquares < 10) {
            const square = document.createElement('div');
            square.className = 'hpSquare';

            // Imposta il colore in base alla posizione
            if (hpSquares < 4) {
                square.style.backgroundColor = 'red';
            } else if (hpSquares < 6) {
                square.style.backgroundColor = 'orange';
            } else {
                square.style.backgroundColor = 'green';
            }

            document.getElementById('hpBarContainer').appendChild(square);
            hpSquares++;
            console.log("Elemento non valido! HP +1");
        }
    }

    // Controlla se la barra HP è a 0, termina il gioco
    if (hpSquares <= 0) {
        exitGame();
    }
}

// Function to exit the game
function exitGame() {
    document.getElementById('title').style.display = 'block';
    document.getElementById('gameCanvas').style.display = 'none';
    document.getElementById('scoreBoard').style.display = 'none';
    document.getElementById('elementSelection').style.display = 'none';
    document.getElementById('dietSelection').style.display = 'none';
    document.getElementById('selectedDietText').style.display = 'none';
    document.getElementById('gameover').style.display = 'block';

    if (gameInterval) {
        clearInterval(gameInterval);
    }
}

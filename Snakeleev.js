console.log("Snakeleev.js è stato caricato correttamente");

// Define the elements
const elements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md"
];

const elementNames = [
    "Idrogeno", "Elio", "Litio", "Berillio", "Boro", "Carbonio", "Azoto", "Ossigeno", "Fluoro", "Neon", "Sodio", "Magnesio", "Alluminio", "Silicio", "Fosforo", "Zolfo", "Cloro", "Argon", "Potassio", "Calcio", "Scandio", "Titanio", "Vanadio", "Cromo", "Manganese", "Ferro", "Cobalto", "Nichel", "Rame", "Zinco", "Gallio", "Germanio", "Arsenico", "Selenio", "Bromo", "Kripton", "Rubidio", "Stronzio", "Ittrio", "Zirconio", "Niobio", "Molibdeno", "Tecnezio", "Rutenio", "Rodio", "Palladio", "Argento", "Cadmio", "Indio", "Stagno", "Antimonio", "Tellurio", "Iodio", "Xeno", "Cesio", "Bario", "Lantanio", "Cerio", "Praseodimio", "Neodimio", "Promezio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Olmio", "Erbio", "Tulio", "Itterbio", "Lutezio", "Afnio", "Tantalio", "Tungsteno", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Tallio", "Piombo", "Bismuto", "Polonio", "Astato", "Radon", "Francio", "Radio", "Attinio", "Torio", "Protoattinio", "Uranio", "Nettunio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einsteinio", "Fermio", "Mendelevio"
];

const elementNumbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102"
];

// List of diet options and elements associated with each diet
const DietsList = [
    "elements of a smartphone", "elements of life", "critical raw elements",
    "elements of DNA", "radioactive elements (U-Th decay series)",
    "elements considered safety (grades A-E) in the first wall of fusion power plan",
    "elements dedicated to scientists", "elements with names of latin derivation",
    "elements with names of greek derivation",
    "elements with names derived from cities, countries, or elsewhere",
    "elements with names not derived from latin or greek, nor from cities or countries",
    "elements in solid state at standard temperature and pressure",
    "elements in liquid state at standard temperature and pressure",
    "elements in gas state at standard temperature and pressure", "metals", "nonmetals",
    "elements of group I (Hydrogen & alkali metals)",
    "elements of group II (Alkaline earth metals)", "elements of group XV (Pnictogens)",
    "elements of group XVI (Chalcogens)", "elements of group XVII (Halogens)",
    "elements of group XVIII (Noblegases)", "lanthanides", "actinides",
    "transition metals", "post-transition metals", "metalloids", "reactive nonmetals",
    "s-block elements", "p-block elements", "d-block elements", "f-block elemnts"
];

const diets = {
    "elements of a smartphone": ["H", "Li", "Be", "B", "C", "O", "F", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Br", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "Ba", "La", "Ce", "Pr", "Nb", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", Yb", "Lu", "Hf", "Ta", "W", "Os", "Ir", "Pt", "Au", "Hg", "Pb", "Bi"],
    "elements of life": ["O", "C", "H", "N", "P", "Ca", "S", "K", "Na", "Cl", "Mg", "Fe", "Zn", "Cr", "Co", "Cu", "Mn", "Mo", "Ni", "V", "Si", "B", "Se", "F", "I", "Br"],
    "critical raw elements": ["Sb", "Ba", "Al", "Be", "Bi", "B", "Co", "F", "Ga", "Ge", "Hf", "In", "Li", "Mg","Nb","P", "Sc","Si","Sr","Ta","Ti","W","V"],
    "elements of DNA": ["C", "H", "O", "N", "P"],
    "radioactive elements (U-Th decay series)": ["U", "Th", "Pa", "Ra", "Rn", "Po", "Pb", "Bi", "Pu", "Ac", "Tl", "Am", "Np"],
    "elements considered safety (grades A-E) in the first wall of fusion power plan": ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Mg", "Al", "Si", "P", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Fe", "Co", "Ni", "Cu", "Ge", "Se", "Kr", "Sr", "Y", "Ru", "Sn", "Te", "I", "Xe", "Cs", "Ba", "Ce", "Nd", "Sm", "Dy", "Yb", "Lu", "Tl"],
    "elements dedicated to scientists": ["Ge", "Sm", "Gd", "Bi", "Cm", "Es", "Fm"],
    "elements with names of latin derivation": ["B", "C", "F", "Na", "Al", "Si", "S", "K", "Ca", "Sc", "Mn", "Fe", "Cu", "Ga", "Ge", "Rb", "Ru", "Pd", "In", "Sn", "Sb", "Te", "Cs", "La", "Ce", "Pm", "Eu", "Ho", "Tm", "Lu", "Hf", "Ta", "Ir", "Au", "Hg", "Pb", "Bi", "Po", "Rn", "Ra", "Np", "Cm"],
    "elements with names of greek derivation": ["H", "He", "Li", "Be", "N", "O", "Ne", "P", "Cl", "Ar", "Ti", "Cr", "Co", "As", "Se", "Br", "Kr", "Nb", "Mo", "Tc", "Rh", "Ag", "Cd", "Sb", "I", "Xe", "Ba", "La", "Pr", "Nd", "Dy", "Os", "Tl", "Bi", "At", "Ac", "Pa", "U", "Pu"],
    "elements with names derived from cities, countries, or elsewhere": ["Mg", "Sc", "Mn", "Ga", "Ge", "Se", "Sr", "Y", "Nb", "Tc", "Ru", "Pd", "Cd", "Te", "Eu", "Tb", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Re", "Bi", "Po", "Fr", "U", "Np", "Am", "Bk", "Cf"],
    "elements with names not derived from latin or greek, nor from cities or countries": ["V", "Ni", "Zn", "Zr", "Sb", "W", "Pt", "Th"],
    "elements in solid state at standard temperature and pressure": ["Li", "Be", "B", "C", "Na", "Mg", "Al", "Si", "P", "S",  "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Tl", "Pb", "Bi", "Po", "At", "Fr", "Ra", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm"],
    "elements in liquid state at standard temperature and pressure": ["Hg", "Br"],
    "elements in gas state at standard temperature and pressure": ["H", "He", "N", "O", "F", "Ne","Cl", "Ar", "Kr", "Xe", "Rn"],
    "metals": ["Li", "Be", "Na", "Mg", "Al", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm"],
    "nonmetals": ["H", "He", "B", "C", "N", "O", "F", "Ne", "Si", "P", "S", "Cl", "Ar", "Ge", "As", "Se", "Br", "Kr", "Sb", "Te", "I", "Xe", "At", "Rn"],
    "elements of group I (Hydrogen & alkali metals)": ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
    "elements of group II (Alkaline earth metals)": ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    "elements of group XV (Pnictogens)": ["N", "P", "As", "Sb", "Bi"],
    "elements of group XVI (Chalcogens)": ["O", "S", "Se", "Te", "Po"],
    "elements of group XVII (Halogens)": ["F", "Cl", "Br", "I", "At"],
    "elements of group XVIII (Noblegases)": ["He", "Ne","Ar", "Kr", "Xe", "Rn"],
    "lanthanides": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],
    "actinides": ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm"],
    "transition metals": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg"],
    "post-transition metals": ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po"],
    "metalloids": ["B", "Si", "Ge", "As", "Sb", "Te", "At"],
    "reactive nonmetals": ["H", "C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"],
    "s-block elements": ["H", "He", "Li", "Be", "Na", "Mg", "K", "Ca", "Rb", "Sr", "Cs", "Ba", "Fr", "Ra"],
    "p-block elements": ["B", "C", "N", "O", "F", "Ne", "Al", "Si", "P", "S", "Cl", "Ar", "Ga", "Ge", "As", "Se", "Br", "Kr", "In", "Sn", "Sb", "Te", "I", "Xe", "Tl", "Pb", "Bi", "Po", "At", "Rn"],
    "d-block elements": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg"],
    "f-block elements": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm"],
};

// Ref. elements of a smartphone: https://meg.resourcesregulator.nsw.gov.au/sites/default/files/2022-11/periodic-table-of-mobile-phones-a3complete.pdf
// Ref. elements of a smartphone: https://doi.org/10.1016/j.resourpol.2020.101750

const erasedElements = [
    "Sc", "V", "Ga", "Ge", "Br", "Kr", "Rb", "Y", "Nb", "Mo", "Tc", "Ru", "Rh", "In", "Te", "Xe", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "Re", "Os", "Ir", "Tl", "Po", "At", "Fr", "Ac", "Th", "Pa", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md"
];

// Initialize game state
const SPEED = 150;
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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainMenu').style.display = 'block';
    updateScore(score);
});

document.addEventListener('keydown', (event) => {
    console.log(event.key); 
    
    if (event.key === ' ') {
        event.preventDefault(); // Previene il comportamento predefinito della barra spaziatrice
        changeFoodElement();    // Cambia l'elemento del cibo senza cambiarne la posizione
    } else {
        switch (event.key) {
            case 'ArrowUp':
                if (direction.y === 0) direction = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                if (direction.y === 0) direction = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                if (direction.x === 0) direction = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
                if (direction.x === 0) direction = { x: 1, y: 0 };
                break;
            case 'w':
            case 'W':
                if (direction.y === 0) direction = { x: 0, y: -1 };
                break;
            case 's':
            case 'S':
                if (direction.y === 0) direction = { x: 0, y: 1 };
                break;
            case 'a':
            case 'A':
                if (direction.x === 0) direction = { x: -1, y: 0 };
                break;
            case 'd':
            case 'D':
                if (direction.x === 0) direction = { x: 1, y: 0 };
                break;
        }
    }
});

function changeFoodElement() {
    console.log("Changing food element...");

    generateFood();

    console.log("New food element:", foodElement, foodElementName, foodElementNumber);

    drawFood();
    updateScore(score); 
}

function drawFood() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    console.log(`Clearing old food at (${food.x}, ${food.y})`);
    ctx.clearRect(food.x, food.y, SIZE, SIZE);

    ctx.fillStyle = "red"; // Colore per il simbolo dell'elemento
    ctx.font = "20px Arial"; // Imposta la dimensione del font
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Disegna il simbolo dell'elemento nel punto (x, y) del cibo
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);
    console.log(`Drawing new food: ${foodElement} at (${food.x}, ${food.y})`);
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

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('dietSelection').style.display = 'block';
}

function startNewGame() {
    selectedDiet = document.getElementById("dietDropdown").value;
    alert(`1) Eat the ${selectedDiet},\n\n2) Skip the elements that don’t belong to this diet by pressing the spacebar.\n\n3) Stay Hungry! Stay Periodic!`);

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    document.getElementById('dietSelection').style.display = 'none';
    canvas.style.display = 'block';

    snake = [{ x: 100, y: 100 }];
    direction = { x: 1, y: 0 };
    score = 0;
    updateScore(score);

    
    generateFood();
    startGameLoop(ctx);
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

    console.log(`Valid food position: (${food.x}, ${food.y})`);
    
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
    }, SPEED);
}

function updateScore(newScore) {
    document.getElementById('scoreBoard').style.color = "rgb(173, 176, 184)";
    document.getElementById('scoreBoard').innerText = 
        `${selectedDiet}\nScore: ${newScore} | ${foodElementName} [${foodElement}], Z = ${foodElementNumber}`;
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
            alert("Stay Hungry! Stay Periodic!");
            exitGame();
            return;
        }
    }
            
    // Aggiungi la nuova testa
    snake.unshift(head);
            
    // Controlla se il serpente mangia il cibo
    if (head.x === food.x && head.y === food.y) {
        if (diets[selectedDiet] && diets[selectedDiet].includes(foodElement)) {
            score += 10;
            flashEffect("rgb(65, 127, 69)");
            expandFoodEffect();
        } else {
            score -= 5;
            flashEffect("rgb(229, 26, 75)");
        }
        updateScore(score);
        generateFood();
    } else {
        snake.pop();
    }

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    function flashEffect(color) {
        const originalColor = ctx.fillStyle;
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        setTimeout(() => {
            ctx.fillStyle = originalColor;
        }, 100); // Torna al colore originale dopo 100ms
    }

    function expandFoodEffect() {
        let size = SIZE;
        const expandInterval = setInterval(() => {
            size += 2; // Espande gradualmente
            ctx.fillStyle = "rgb(120, 179, 224)";
            ctx.fillRect(food.x - size / 4, food.y - size / 4, size, size);
        }, 30);

        setTimeout(() => {
            clearInterval(expandInterval);
        }, 300); // Ferma l'espansione dopo 300ms
    }

    // Draw the snake
       snake.forEach((part, index) => {
        const gradientFactor = index / snake.length;
        const red = 65 + gradientFactor * (150 - 65);
        const green = 127 + gradientFactor * (174 - 127);
        const blue = 69 + gradientFactor * (33 - 69);
        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
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
    ctx.font = "bold 14px Arial";
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

// Function to exit the game
function exitGame() {
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('dietSelection').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'none';

    if (gameInterval) {
        clearInterval(gameInterval);
    }
}

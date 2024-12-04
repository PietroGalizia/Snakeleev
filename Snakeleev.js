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
    "elements of a smartphone": ["H", "Li", "Be", "B", "C", "O", "F", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Br", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "Ba", "La", "Ce", "Pr", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Os", "Ir", "Pt", "Au", "Hg", "Pb", "Bi"],
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
const SIZE = 20;
const CANVAS_WIDTH = 620;
const CANVAS_HEIGHT = 520;
let gameInterval = null;
let direction = { x: 1, y: 0 };
let score = 0;
let food = {};
let selectedDiet = "elements of a smartphone";
let foodElement = "";
let foodElementName = "";
let foodElementNumber = "";
// Posizione iniziale del serpente
let snake = [{ x: 100, y: 100 }];
let snakeColors = ["green"];
let scoreText = null;
let SPEED = 150;

document.addEventListener('DOMContentLoaded', () => {
    showScreen('startScreen');
    let playerName = '';
    let selectedDiet = 'elements of a smartphone';
    const diets = [
        'elements of a smartphone',
        'elements of life',
        'critical raw elements',
        'elements of DNA',
        'd-block elements',
        'radioactive elements (U-Th decay series)',
        'elements considered safety (grades A-E) in the first wall of fusion power plan',
        'elements dedicated to scientists',
        'elements with names of latin derivation',
        'elements with names of greek derivation',
        'elements with names derived from cities, countries, or elsewhere',
        'elements with names not derived from latin or greek, nor from cities or countries',
        'elements in solid state at standard temperature and pressure',
        'elements in liquid state at standard temperature and pressure',
        'elements in gas state at standard temperature and pressure',
        'metals',
        'nonmetals',
        'elements of group I (Hydrogen & alkali metals)',
        'elements of group II (Alkaline earth metals)',
        'elements of group XV (Pnictogens)',
        'elements of group XVI (Chalcogens)',
        'elements of group XVII (Halogens)',
        'elements of group XVIII (Noblegases)',
        'lanthanide',
        'actinides',
        'transition metals',
        'post-transition metals',
        'metalloids',
        'reactive nonmetals',
        's-block elements',
        'p-block elements',
        'd-block elements',
        'f-block elements'     
    ];

    let currentDietIndex = diets.indexOf(selectedDiet);

    const showScreen = (screenId) => {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('visible'));
        document.getElementById(screenId).classList.add('visible');
    };

    // Start Screen setup
    const nameInput = document.getElementById('playerName');
    document.getElementById('nameOkButton').addEventListener('click', () => {
        playerName = nameInput.value || 'Player';
        nameInput.disabled = true;
        document.getElementById('nameChangeButton').style.display = 'inline-block';
    });

    document.getElementById('nameChangeButton').addEventListener('click', () => {
        nameInput.disabled = false;
        nameInput.focus();
    });

    const updateDiets = () => {
        const dietElements = diets.slice(currentDietIndex - 1, currentDietIndex + 2);
        const dietContainer = document.getElementById('diets');
        dietContainer.innerHTML = dietElements.map((diet, index) => {
            const isSelected = index === 1; // Quello al centro
            return `<div class="diet-item ${isSelected ? 'selected' : ''}">${diet}</div>`;
        }).join('');
    };

    document.getElementById('dietUp').addEventListener('click', () => {
        currentDietIndex = (currentDietIndex - 1 + diets.length) % diets.length;
        updateDiets();
    });

    document.getElementById('dietDown').addEventListener('click', () => {
        currentDietIndex = (currentDietIndex + 1) % diets.length;
        updateDiets();
    });

    // Default setup
    updateDiets();

    // Speed selection
    let SPEED = 150;
    document.querySelectorAll('#speedButtons button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('#speedButtons button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            SPEED = parseInt(button.dataset.speed);
        });
    });

    // Start Game
    document.getElementById('playButton').addEventListener('click', () => {
        selectedDiet = diets[currentDietIndex];
        showScreen('gameScreen');
        startNewGame(playerName, selectedDiet, SPEED); // Chiamata alla funzione di avvio
    });
});


function startGame() {
    initializeGameVariables(); // Reinizializza tutte le variabili per una nuova partita
    gameLoop();
}

document.addEventListener('keydown', (event) => {
    console.log(event.key);

    if (event.key === ' ') {
        event.preventDefault(); // Previene il comportamento predefinito della barra spaziatrice
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
        } else {
            console.log("Collision detected, ignoring direction change.");
        }
    }
});

function changeFoodElement() {
    console.log("Changing food element...");

    do {
        generateFood();
    } while (erasedElements.includes(foodElement));

    console.log("New food element:", foodElement, foodElementName, foodElementNumber);

    drawFood();
    updateScore(score); 
}

function drawFood() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    console.log(`Clearing old food at (${food.x}, ${food.y})`);
    ctx.clearRect(food.x - 1, food.y - 1, SIZE + 2, SIZE + 2);
    
    ctx.fillStyle = "red"; // Colore per il simbolo dell'elemento
    ctx.font = "20px Arial"; // Imposta la dimensione del font
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Disegna il simbolo dell'elemento nel punto (x, y) del cibo
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);
    console.log(`Drawing new food: ${foodElement} at (${food.x}, ${food.y})`);
}

function startNewGame(playerName, selectedDiet, SPEED) {
    alert(`1) Eat the ${selectedDiet},\n\n2) Skip the elements that don’t belong to this diet by pressing the spacebar.\n\n3) Stay Hungry! Stay Periodic!`);

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    // Mostra il canvas di gioco e nascondi altre schermate
    document.getElementById('startScreen').classList.remove('visible');
    document.getElementById('gameScreen').classList.add('visible');

    // Reset del serpente e dei parametri di gioco
    snake = [{ x: 100, y: 100 }];
    snakeColors = ["green"]; // Resetta i colori del serpente, partendo con la testa verde
    direction = { x: 1, y: 0 };
    score = 0;
    updateScore(score);
    // Imposta la velocità scelta
    gameSpeed = SPEED;

    // Genera il primo elemento di cibo e avvia il ciclo di gioco
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
    
    let foodElement;
    let elementIndex;
    do {
        elementIndex = Math.floor(Math.random() * elements.length);
        foodElement = elements[elementIndex];
    } while (!diets[selectedDiet]?.includes(foodElement));

    // Assegna nome e numero dell’elemento selezionato
    foodElementName = elementNames[elementIndex];
    foodElementNumber = elementNumbers[elementIndex];

    drawFood();
    updateScore(score);
}

function startGameLoop(ctx, SPEED) {
    if (gameInterval) clearInterval(gameInterval); // Evita loop sovrapposti
    gameInterval = setInterval(() => {
        updateGame(ctx);
    }, speed);
}

function updateScore(newScore) {
    const scoreBoard = document.getElementById('scoreBoard');
    if (scoreBoard) {
        scoreBoard.style.color = "rgb(173, 176, 184)";
        scoreBoard.innerText = 
            `${selectedDiet}\nScore: ${newScore} | ${foodElementName} [${foodElement}], Z = ${foodElementNumber}`;
    }
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

            scoreText = {
                value: "+10",
                x: food.x + SIZE / 2,
                y: food.y,
                opacity: 1.0 // Trasparenza iniziale
            };
            
            snakeColors.unshift("green");
            expandFoodEffect(food.x, food.y); // Espansione prima di sparire
        } else {
            score -= 5;
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

    // Gestione animazione della scritta del punteggio
    if (scoreText) {
        ctx.fillStyle = `rgba(120, 179, 224, ${scoreText.opacity})`; // Imposta trasparenza
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(scoreText.value, scoreText.x, scoreText.y);

        // Aggiorna la posizione e la trasparenza
        scoreText.y -= 1; // Si sposta verso l'alto
        scoreText.opacity -= 0.02; // Si dissolve

        // Rimuovi la scritta quando diventa completamente trasparente
        if (scoreText.opacity <= 0) {
            scoreText = null;
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
    // Resetta il loop di gioco se attivo
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }

    // Mostra la schermata di Game Over
    showScreen('gameOverScreen');

    // Resetta altre variabili di gioco se necessario
    resetGameVariables(); // Funzione da implementare se hai variabili globali
}

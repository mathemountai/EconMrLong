const economists = [
    {
        name: 'Smith',
        clues: [
            'Known for pioneering work on capitalism and the "invisible hand."',
            'Argued that individuals acting in their self-interest unintentionally benefit society.',
            'Believed that free markets naturally regulate themselves through competition.',
            'The most famous book is "The Wealth of Nations" (1776), which is considered the foundation of modern economics.',
            'Also a moral philosopher and wrote "The Theory of Moral Sentiments" before his economic work.',
            'Influenced the creation of modern capitalism, including the economic systems of the United States and Great Britain.',
            'Advocated for limited government intervention in the economy.'
        ]
    },
    {
        name: 'Ricardo',
        clues: [
            'Best known for the theory of comparative advantage in international trade.',
            'Argued that trade between nations is beneficial if countries specialize in what they do best.',
            'One of the first to apply mathematical analysis to economic theory.',
            'The most important book is "On the Principles of Political Economy and Taxation" (1817), a cornerstone of classical economics.',
            'Introduced the concept of "rent," explaining how landowners benefit disproportionately from land ownership.',
            'Criticized the "Corn Laws" (agricultural tariffs) in Britain, advocating for free trade.',
            'Theories on labor and rent influenced later economists like Marx and Keynes.'
        ]
    },
    // Add other economists here...
];

let currentEconomist = null;
let currentClueIndex = 0;
let guessesLeft = 5;

function startGame() {
    // Select a random economist
    currentEconomist = economists[Math.floor(Math.random() * economists.length)];
    currentClueIndex = 0;
    guessesLeft = 5;
    
    document.getElementById('clue').innerText = currentEconomist.clues[currentClueIndex];
    document.getElementById('feedback').innerText = '';
}

function displayNextClue() {
    if (currentClueIndex < currentEconomist.clues.length - 1) {
        currentClueIndex++;
        document.getElementById('clue').innerText = currentEconomist.clues[currentClueIndex];
    }
}

function checkGuess() {
    const guessInput = document.getElementById('guess-input').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    if (!currentEconomist) {
        feedback.innerText = 'Click "Start Game" first!';
        feedback.style.color = 'red';
        return;
    }

    if (guessInput === currentEconomist.name.toLowerCase()) {
        feedback.innerText = `Correct! The economist is ${currentEconomist.name}.`;
        feedback.style.color = 'green';
    } else {
        guessesLeft--;
        if (guessesLeft > 0) {
            feedback.innerText = `Incorrect! You have ${guessesLeft} guesses left.`;
            feedback.style.color = 'red';
            displayNextClue();
        } else {
            feedback.innerText = `Game over! The correct answer was ${currentEconomist.name}.`;
            feedback.style.color = 'red';
        }
    }

    document.getElementById('guess-input').value = '';
}

// Event listeners
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('guess-btn').addEventListener('click', checkGuess);
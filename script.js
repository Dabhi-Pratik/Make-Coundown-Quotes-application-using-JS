const quotes = [
    {
        text: "Arise, awake, and stop not till the goal is reached.",
        author: "— Swami Vivekananda"
    },
    {
        text: "You have the right to work, but never to the fruit of work.",
        author: "— Bhagavad Gita"
    },
    {
        text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
        author: "— Dr. A. P. J. Abdul Kalam"
    },
    {
        text: "Strength does not come from physical capacity. It comes from an indomitable will.",
        author: "— Mahatma Gandhi"
    },
    {
        text: "The best way to find yourself is to lose yourself in the service of others.",
        author: "— Mahatma Gandhi"
    },
    {
        text: "Take risks in your life. If you win, you can lead. If you lose, you can guide.",
        author: "— Swami Vivekananda"
    },
    {
        text: "Man needs difficulties in life because they are necessary to enjoy success.",
        author: "— Dr. A. P. J. Abdul Kalam"
    },
    {
        text: "When you are inspired by some great purpose, all your thoughts break their bounds.",
        author: "— Patanjali"
    },
]

let index = 0;

let quoteE1 = document.getElementById("Quotes")
let authorE1 = document.getElementById("Author")

function showQuotes() {
    quoteE1.innerText = `${quotes[index].text}`;
    authorE1.innerText = `${quotes[index].author}`;
}

const prevClick = () => {

    index--;

    if (index < 0) {
        index = quotes.length - 1;
    }

    showQuotes();
}

setInterval(nextClick = () => {

    index++;

    if (index >= quotes.length - 1) {
        index = 0;
    }

    showQuotes()
},3000)



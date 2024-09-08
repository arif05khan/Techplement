const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let quotes = [
    { text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
    { text: 'Do not wait to strike till the iron is hot; but make it hot by striking.', author: 'William Butler Yeats' },
    // Add more quotes here
];

app.use(express.static('public'));

app.get('/api/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

app.get('/api/search', (req, res) => {
    const author = req.query.author.toLowerCase();
    const result = quotes.filter(quote => quote.author.toLowerCase().includes(author));
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


function fetchRandomQuote() {
    fetch('/api/random-quote')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quoteOutput').innerText = `"${data.text}"`;
            document.getElementById('authorOutput').innerText = `- ${data.author}`;
        })
        .catch(error => console.error('Error fetching quote:', error));
}

function searchByAuthor() {
    const author = document.getElementById('authorSearch').value;
    fetch(`/api/search?author=${encodeURIComponent(author)}`)
        .then(response => response.json())
        .then(data => {
            const searchResults = document.getElementById('searchResults');
            searchResults.innerHTML = '';

            if (data.length > 0) {
                data.forEach(quote => {
                    const quoteElement = document.createElement('p');
                    quoteElement.innerText = `"${quote.text}" - ${quote.author}`;
                    searchResults.appendChild(quoteElement);
                });
            } else {
                searchResults.innerText = 'No quotes found for the given author.';
            }
        })
        .catch(error => console.error('Error fetching quotes:', error));
}

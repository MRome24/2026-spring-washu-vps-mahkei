document.getElementById('fetchBtn').addEventListener('click', function () {
    const topic = document.getElementById('topic').value
    const author = document.getElementById('author').value
    const limit = document.getElementById('limit').value

    const params = new URLSearchParams()
    if (topic) params.append('topic', topic)
    if (author) params.append('author', author)
    if (limit) params.append('limit', limit)

    const url = `https://cse2004.com/api/quotes?${params}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2)
        })
        .catch(error => {
            document.getElementById('output').textContent = 'Error: ' + error.message
        })
})
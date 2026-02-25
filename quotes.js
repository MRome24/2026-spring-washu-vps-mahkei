document.getElementById('fetchBtn').addEventListener('click', function () {
    const topic = document.getElementById('topic').value
    const author = document.getElementById('author').value
    const limit = document.getElementById('limit').value

    console.log(topic, author, limit)
})
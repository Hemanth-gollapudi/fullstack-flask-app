document.getElementById('fetchBtn').addEventListener('click', async () => {
    const res = await fetch('http://backend:9000/api/message');
    const data = await res.json();
    document.getElementById('message').innerText = data.message;
});

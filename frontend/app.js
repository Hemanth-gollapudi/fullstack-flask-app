document.getElementById('fetchBtn').addEventListener('click', async () => {
    const res = await fetch('http://backend:9000/api/message');   // Use 'backend' container name
    const data = await res.json();
    document.getElementById('message').innerText = data.message;
});

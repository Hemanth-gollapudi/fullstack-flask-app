import requests

def test_frontend_to_backend():

    response = requests.get('http://localhost:9000/api/message')
    assert response.status_code == 200
    assert response.json()['message'] == "Hello from hemanth!"

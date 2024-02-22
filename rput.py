import requests
data = {
    "title": "Flammkuchen modifiée",
}
r = requests.put("http://localhost:3000/recipes/by-id/65d758ca5fb5e5cf7d23790e", json=data)
print(r.text)



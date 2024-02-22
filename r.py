import requests
data = {
    "title": "Flammkuchen",
    "ingredients": ["oignons", "lardons"],
    "instructions": ["mettre dans le four", "faire cuire"],
    "preparationTime": 60,
    "cookingTime": 60,
    "difficulty": "Facile",
    "category": "Quiches",
    "image": "https://cdn.discordapp.com/attachments/1118120254812463175/1210229933125664858/ushiro.jpg?ex=65e9cd75&is=65d75875&hm=2acc79fc26f3bc7de1fbd0295c39dd91450c1053d9af1887d374fb0d3b464e81&"
}
r = requests.post("http://localhost:3000/recipes", json=data)
print(r.text)



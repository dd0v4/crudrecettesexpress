import requests

r = requests.delete("http://localhost:3000/recipes/delete/65d759f879f91f8864b2977a")
print(r.text)



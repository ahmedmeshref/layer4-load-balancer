import requests 

for i in range(1000):
	response = requests.get("http://localhost:8888")
	print(response.json())




import time
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from PIL import Image
import requests
from unidecode import unidecode
import re

# Participantes
# Lista de nomes e URLs
participantes = [
    ("Feni Dalano Roosevelt Agostinho", "http://lattes.cnpq.br/2739577358518765"),
    ("Cecilia Maria Villas Boas de Almeida", "http://lattes.cnpq.br/1608486925932672"),
    ("Francisco Carlos Rocha de Barros Junior", "http://lattes.cnpq.br/1085274416109765"),
    ("Jairo Lizandro Schmitt", "http://lattes.cnpq.br/9831871479916100"),
    ("Ana Claudia Mendes Malhado", "http://lattes.cnpq.br/6689567685438939"),
    ("Federico Sulis", "http://lattes.cnpq.br/3008783829641984"),
    ("Leticia Anderson Bassi", "http://lattes.cnpq.br/5902741462403490"),
    ("Enio Jose Bassi", "http://lattes.cnpq.br/7909865785610711"),
    ("Ciro Ramon Felix dos Santos Silva", "http://lattes.cnpq.br/7247502886182545"),
    ("Cristiane de Souza Siqueira Pereira", "http://lattes.cnpq.br/8723281922978435"),
    ("Oscarina Viana de Sousa", "http://lattes.cnpq.br/6529999796909142"),
    ("Thiago Jose Matos Rocha", "http://lattes.cnpq.br/9228726128290600"),
    ("Aldenir Feitosa dos Santos", "http://lattes.cnpq.br/4486728733567129"),
    ("Marcell Mariano Correa Maceno", "http://lattes.cnpq.br/5020237977975416"),
    ("Thyago Anthony Soares Lima", "http://lattes.cnpq.br/1714186197608991"),
    ("Juliana de Carvalho Gaeta", "http://lattes.cnpq.br/4263676415808125"),
    ("Livia Maria Batista Vilela", "http://lattes.cnpq.br/9131024465339491"),
    ("Eugenio Dantas Gomes Lima", "http://lattes.cnpq.br/5825503745817361"),
    ("Joao Paulo Lopes da Silva", "http://lattes.cnpq.br/2493672197811747"),
    ("Giulliano Aires Anderlini", "http://lattes.cnpq.br/9921213344241191"),
]

# Pasta para salvar as fotos
os.makedirs("fotos_lattes", exist_ok=True)

def sanitize_filename(name):
    name = unidecode(name)
    name = name.lower().replace(" ", "_")
    name = re.sub(r"[^a-z0-9_]", "", name)
    return name

# Iniciar navegador (precisa do ChromeDriver)
driver = webdriver.Chrome()

for nome, url in participantes:
    print(f"Abrindo perfil: {nome}")
    driver.get(url)

    # Tempo para resolver o CAPTCHA manualmente
    print("⚠️ Resolva o CAPTCHA e clique em 'Submeter'. Depois pressione ENTER aqui.")
    input("⏳ Aguardando... ")

    try:
        img_element = driver.find_element(By.CLASS_NAME, "foto")
        img_url = img_element.get_attribute("src")
        response = requests.get(img_url)
        
        filename = f"fotos_lattes/{sanitize_filename(nome)}.jpg"
        with open(filename, "wb") as f:
            f.write(response.content)
        print(f"[✓] Foto salva: {filename}")
    except Exception as e:
        print(f"[x] Não foi possível encontrar ou salvar a imagem para {nome}: {e}")

driver.quit()

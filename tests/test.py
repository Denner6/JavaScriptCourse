import requests, tqdm

URL = 'https://ikaros.anicdn.net/apphd2/272854.mp4'


headers = {
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.6',
    'Connection': 'keep-alive',
    'Range': 'bytes=0-',
    'Referer': 'https://www.hinatasoul.com/',
    'Sec-Fetch-Dest': 'video',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-GPC': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Brave";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
}

response = requests.get('https://ikaros.anicdn.net/apphd2/272854.mp4', headers=headers)
print(response.headers)
if response.status_code == 206:
    with open("jujutsu-kaisen-2-ep-1.mp4", "wb") as file:
        # Define o tamanho do bloco de download
        block_size = 1024

        # Obtém o tamanho total do arquivo em bytes
        total_size = int(file_response.headers.get("Content-Length", 0))

        # Usa o tqdm para exibir o progresso de download
        with tqdm(total=total_size, unit="B", unit_scale=True, desc=file_name) as pbar:
            # Itera sobre os blocos de download e grava no arquivo
            for data in file_response.iter_content(block_size):
                file.write(data)
                pbar.update(len(data))
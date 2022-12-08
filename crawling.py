from bs4 import BeautifulSoup as bs
import requests

url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php'
page = requests.get(url)
page.encoding = 'UTF-8'
soup = bs(page.content, 'html.parser', from_encoding='cp949')
menu_data = soup.find_all('table', {'class':'menu_in'})
print(soup)
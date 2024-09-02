import requests
from bs4 import BeautifulSoup


def scrape_zillow(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    price = soup.find('span', attrs={"data-testid": "price"}).get_text(
    ) if soup.find('span', attrs={"data-testid": "price"}) else "N/A"
    square_footage = soup.find('span', string='sqft').find_previous(
        'span').get_text() if soup.find('span', string='sqft') else "N/A"
    bedrooms = soup.find('span', string='beds').find_previous(
        'span').get_text() if soup.find('span', string='beds') else "N/A"
    bathrooms = soup.find('span', string='baths').find_previous(
        'span').get_text() if soup.find('span', string='baths') else "N/A"
    year_built = soup.find(string='Built in').find_next(
        'span').get_text() if soup.find(string='Built in') else "N/A"
    property_type = soup.find(string='Single Family Residence').get_text(
    ) if soup.find(string='Single Family Residence') else "N/A"

    def find_by_classes(soup, tag, classes):
        for class_name in classes:
            element = soup.find(tag, class_=class_name)
            if element:
                return element.get_text()
        return "N/A"

    address_classes = ['Text-c11n-8-100-2__sc-aiai24-0',
                       'Text-c11n-8-100-2__sc-13thmml-0']
    address = find_by_classes(soup, 'h1', address_classes)

    return {
        'address': address.strip(),
        'price': price.strip(),
        'square_footage': square_footage.strip(),
        'bedrooms': bedrooms.strip(),
        'bathrooms': bathrooms.strip(),
        'year_built': year_built.strip(),
        'property_type': property_type.strip(),
    }

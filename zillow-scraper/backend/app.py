from flask import Flask, request, jsonify
from flask_cors import CORS
from scraper import scrape_zillow  # Import the scraper function

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from your React frontend


@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data.get('url')
    if url:
        try:
            details = scrape_zillow(url)  
            return jsonify(details)
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    return jsonify({'error': 'Invalid URL'}), 400


if __name__ == '__main__':
    app.run(debug=True)

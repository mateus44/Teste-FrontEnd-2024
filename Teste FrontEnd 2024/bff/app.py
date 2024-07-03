from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)  # Adicione esta linha para permitir CORS

favorites = []

YOUTUBE_API_KEY = os.getenv('YOUTUBE_API_KEY')

@app.route('/api/search')
def search_videos():
    query = request.args.get('q')
    url = f'https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&key={YOUTUBE_API_KEY}'
    response = requests.get(url)
    return jsonify(response.json())

@app.route('/api/favorites', methods=['GET'])
def get_favorites():
    return jsonify({"items": favorites})

@app.route('/api/favorites', methods=['POST'])
def add_favorite():
    video_id = request.json.get('video_id')
    if video_id not in favorites:
        favorites.append(video_id)
    return jsonify({"status": "success"})

@app.route('/api/favorites', methods=['DELETE'])
def remove_favorite():
    video_id = request.json.get('video_id')
    if video_id in favorites:
        favorites.remove(video_id)
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


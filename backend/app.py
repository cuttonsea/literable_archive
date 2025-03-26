from flask import Flask, jsonify, request, send_from_directory, send_file
from flask_cors import CORS  # CORS 허용!
import os

app = Flask(__name__)
CORS(app)  # 모든 도메인 허용 (React에서 접근 가능)

# variables

@app.route('/api/message')
def get_message():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    year = data.get('year')  # ← 여기서 React에서 보낸 값 받음
    month = data.get('month')

    article_dir = fr'./data'
    articles = [entry.name for entry in os.scandir(article_dir)]
    
    result = [file for file in articles if ((year == "defalut") or(year in file.split("_"))) and ((month =="defalut") or (month in file.split("_")))]
    
    return jsonify({"result": result})  # React로 다시 응답

@app.route('/download/<path:filename>')
def download_file(filename):
    filepath = os.path.join(fr'./data', filename)
    return send_file(os.path.abspath(filepath), as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, jsonify, request, send_from_directory, send_file
from flask_cors import CORS  # CORS 허용!
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # backend/ 절대경로
DATA_DIR = os.path.join(BASE_DIR, "../data")  # 루트 기준 상대경로

files = os.listdir(DATA_DIR)


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

    articles = [entry.name for entry in os.scandir(DATA_DIR)]
    
    result = [file for file in articles if ((year == "defalut") or(year in file.split("_"))) and ((month =="defalut") or (month in file.split("_")))]
    
    return jsonify({"result": result})  # React로 다시 응답

@app.route('/download/<path:filename>')
def download_file(filename):
    filepath = os.path.join(DATA_DIR, filename)
    return send_file(os.path.abspath(filepath), as_attachment=True)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Render가 PORT 지정함
    app.run(host="0.0.0.0", port=port)

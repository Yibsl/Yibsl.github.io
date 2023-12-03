from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

# Setup SQLite database
conn = sqlite3.connect('data.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS entries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location TEXT,
        weight TEXT,
        size TEXT,
        time TEXT
    )
''')
conn.commit()
conn.close()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/saveData', methods=['POST'])
def save_data():
    data = request.get_json()

    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()

    cursor.execute('''
        INSERT INTO entries (location, weight, size, time)
        VALUES (?, ?, ?, ?)
    ''', (data['location'], data['weight'], data['size'], data['time']))

    conn.commit()
    conn.close()

    return jsonify({'message': 'Data saved successfully'})

if __name__ == '__main__':
    app.run(debug=True)

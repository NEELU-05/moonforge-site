from flask import Flask, request, send_from_directory
import csv
import os

# Set the base directory
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, '..'))

app = Flask(__name__, static_folder=ROOT_DIR, static_url_path='')

# Serve index.html
@app.route('/')
def serve_index():
    return send_from_directory(ROOT_DIR, 'index.html')

# Handle form submission
@app.route('/submit-form', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    email = request.form.get('email')
    company = request.form.get('company')
    message = request.form.get('message')

    # Ensure data directory exists
    data_dir = os.path.join(ROOT_DIR, 'data')
    os.makedirs(data_dir, exist_ok=True)

    # Save to CSV
    with open(os.path.join(data_dir, 'data.csv'), 'a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([name, email, company, message])

    return 'Form submitted successfully!'

if __name__ == '__main__':
    app.run(debug=True)

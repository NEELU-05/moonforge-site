from flask import Flask, request, render_template
import mysql.connector

app = Flask(__name__)

# Database connection config
db = mysql.connector.connect(
    host="localhost",
    user="your_mysql_user",
    password="your_mysql_password",
    database="your_database_name"
)

cursor = db.cursor()

@app.route('/')
def home():
    return render_template('index.html')  # adjust to your actual file

@app.route('/submit-form', methods=['POST'])
def submit_form():
    name = request.form['name']
    email = request.form['email']
    company = request.form['company']
    message = request.form['message']

    sql = "INSERT INTO contacts (name, email, company, message) VALUES (%s, %s, %s, %s)"
    values = (name, email, company, message)
    cursor.execute(sql, values)
    db.commit()

    return "Form submitted successfully!"

if __name__ == '__main__':
    app.run(debug=True)


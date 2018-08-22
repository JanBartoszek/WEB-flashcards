from flask import Flask, render_template, json, request, redirect
import json

import logic

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('main.html')


@app.route('/create_question', methods = ["POST"] )
def create_question():
    new_question = request.get_json()
    logic.handle_new_question(new_question)
    return json.dumps('Thank you for submitting a question.')


@app.route('/get_data')
def get_data():
    random_set = logic.select_random_question()
    return json.dumps(random_set)

if __name__ == '__main__':
    app.run(debug=True)

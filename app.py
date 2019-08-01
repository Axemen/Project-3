from flask import Flask, jsonify, render_template, send_file, request
from wtforms import Form, TextField, validators, SubmitField, DecimalField, IntegerField
from keras.models import load_model



app = Flask(__name__)

class ReusableForm(Form):
    """User entry form for entering specifics for generation"""
    # Starting seed
    # seed = TextField("Enter a seed string or 'random':", validators=[
    #                  validators.InputRequired()])
    # Diversity of predictions
    # diversity = DecimalField('Enter diversity:', default=0.8, validators=[validators.InputRequired(), validators.NumberRange(min=0.5, max=5.0, message='Diversity must be between 0.5 and 5.')])
    # Number of words
    words = IntegerField('Enter number of words to generate:', default=50, validators=[validators.InputRequired(), validators.NumberRange(min=10, max=100, message='Number of words must be between 10 and 100')])
    # Submit button
    submit = SubmitField("Enter")

def load_keras_model():
    """Load in the pre-trained model"""
    global keras_model
    keras_model = load_model('../models/train-embeddings-rnn.h5')
    # Required for model to work
    # global graph
    # graph = tf.get_default_graph()

# render out an index page
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/model", methods=['GET', 'POST'])
def model():
    errors = []
    results = []

    if request.method == 'POST':
        try: 
            user_input = request.form['user_input']
            print(user_input)
        except Exception as e:
            errors.append("it didn't work...")

        
    return render_template('model.html', errors = errors, results = results)


if __name__ == "__main__":
    app.run()
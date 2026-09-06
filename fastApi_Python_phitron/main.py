from fastapi import FastAPI
import json
app=FastAPI()

def load_data():
    with open("expenses.json", "r") as f:
        data=json.load(f)
    return data

def show_data(data):
    with open("expenses.json","w") as wr:
        json.dump(data,wr,indent=4)    
@app.get("/") #decorator
def view():
    return "Hello World"


@app.get("/about")

def view():
    return "That's All about"


@app.get("/view")
def view_expense():
    data=load_data()
    return data

# @app.get("/home")
# def view1():
#     return "This is homepage"
# @app.get("/about")
# def view():
#     return "I am Hosni Rabbani. Currently studying in BRAC University ,Located in Dhaka,"
# @app.get("/contact")
# def view():
#     return "My phone number is 01410667446"
# @app.get("/projects")
# def view():
#     return "I have completed several types of wokings"

# @app.get("/hi")
# def view():
#     return "Hi"
# @app.get("/ai_ml")
# def view():
#     return "I have AI and ML knowledge."

# @app.get("/python")
# def view():
#     return "I have python knowledge."

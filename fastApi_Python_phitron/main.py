from fastapi import FastAPI

app=FastAPI()


@app.get("/") #decorator
def view():
    return "Hello World"
@app.get("/home")
def view1():
    return "This is homepage"
@app.get("/about")
def view():
    return "I am Hosni Rabbani. Currently studying in BRAC University ,Located in Dhaka,"
@app.get("/contact")
def view():
    return "My phone number is 01410667446"
@app.get("/projects")
def view():
    return "I have completed several types of wokings"




# from fastapi import FastAPI
# import json
# app=FastAPI()

# def load_data():
#     with open("expenses.json", "r") as f:
#         data=json.load(f)
#     return data

# def show_data(data):
#     with open("expenses.json","w") as wr:
#         json.dump(data,wr,indent=4)    
# @app.get("/") #decorator
# def view():
#     return "Hello World"


# @app.get("/about")

# def view():
#     return "That's All about"


# @app.get("/view")
# def view_expense():
#     data=load_data()
#     return data

# # @app.get("/home")
# # def view1():
# #     return "This is homepage"
# # @app.get("/about")
# # def view():
# #     return "I am Hosni Rabbani. Currently studying in BRAC University ,Located in Dhaka,"
# # @app.get("/contact")
# # def view():
# #     return "My phone number is 01410667446"
# # @app.get("/projects")
# # def view():
# #     return "I have completed several types of wokings"

# # @app.get("/hi")
# # def view():
# #     return "Hi"
# # @app.get("/ai_ml")
# # def view():
# #     return "I have AI and ML knowledge."

# # @app.get("/python")
# # def view():
# #     return "I have python knowledge."

# for i in range(25):
#     print("Hello World!")


# post, get, put, delete


from fastapi import FastAPI, HTTPException, Path 
from pydantic import BaseModel,Field
from typing import Annotated
import json
app =FastAPI()

class Expense(BaseModel):
    expense_id: Annotated[str,Field(..., description="ID of The Expense", example="ID= E001")]
    name:Annotated[str,Field(..., description="Name of The Expense", example="Lunch")]
    amount:Annotated[int,Field(..., description="Amount of The Expense", example=100)]
    category:Annotated[str,Field(..., description="Category of The Expense", example="Food")]
    date:Annotated[str,Field(..., description="Date of The Expense", example="2023-10-10")]
    description:Annotated[str,Field(..., description="Description of The Expense", example="Lunch with friends")]

def load_data():
    with open('expenses.json','r') as f:
        data=json.load(f)
    return data
def save_data(data):
    with open('expenses.json','w') as f:
        json.dump(data,f,indent=4)
    return data

@app.get("/") #@ is a decorator
def view():
    return "Hi!"
@app.get("/about")
def about():
    return "I am Hosni Rabbani. Currently studying in BRAC University ,Located in Dhaka,"

@app.get("/contact")
def contact():
    return "My phone number is 01410667446." "My email is hosni.rabbani@example.com"

@app.get("/view")
def view_expenses():
    data= load_data()
    return data

@app.get("/view/{expense_id}")
def view_individual_expense(expense_id:str=Path(..., description="ID of Expense", example="E001")):
    data=load_data()
    if expense_id in data:
        return data[expense_id]
    else:
        raise HTTPException(status_code=404,detail="Expense Not Found")

@app.get("/sort")
def sort_expenses(sorted_by:str,order:str):
    data=load_data()
    sorted_data= list(data.values())
    
    # def show_data(data1):    # this is used if i want to bypass the lambda function 
    #     return data1[sorted_by]
    # sorted_data.sort(key=show_data)
    # sorted_data.sort(key=show_data, reverse=True)

    if order=="asc":
        sorted_data.sort(key= lambda x: x[sorted_by])
    else:
        sorted_data.sort(key= lambda x: x[sorted_by], reverse=True)
    return sorted_data

@app.post("/create")
def create_expense(expense:Expense):
    data=load_data()
    if expense.expense_id in data:
        raise HTTPException(status_code=400,detail="Expense ID already exists")
    else:
        data[expense.expense_id]=expense.model_dump(exclude=["expense_id"])
        save_data(data)

       
# @app.get("/view/category/{category}")
# def view_expenses_category():
#     data=load_data()
#     return data



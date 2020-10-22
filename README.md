---
# CARE - A Skincare Routine Diary & Planner 🌿
---

Link: http://cindyfengw.pythonanywhere.com

## Description

This app allow users to create their own library of skincare products which they can use in planning and logging their daily skincare routines. The user can also send reports of their daily skincare routine from the app to their email address.

## The purpose

## How to use:

![Sign in page](signin.png)

1. Register and Sign in with your name and password.
   ![Dashboard page](header.png)
2. On the dashboard page you can 1. add your routine, 2. add a skincare product, 3. view your routines, 4. send e-reports of your routines to your e-mail (by clicking the nav-menu)
   ![Routines page](routines.png)
3. The list of our skincare routines will display the products you used in your routines, and any comments your made.
   ![Form page](routineform1.png)
4. When adding your skincare routine you will first be asked if it is a morning or evening routine, then what products you used for the steps in your routine.
   ![treatment form page](treatmentform.png)
5. On the right hand side you of the products forms you will see a list of your products from your library that you may want to use at each step of your routine.
   ![serum form page](serumform.png)
6. The list updates according to what step you are reviewing in your routine and only renders the products that fit the category.

## Instructions

- Fork and Clone
- Install dependencies (1): `pip install -r requirements.txt`
- Install dependencies (2): `npm install`
- terminal 1: Start up API `pipenv shell` > `cd routineapp` > `python manage.py runserver`
- terminal 2: Run Webpack `pipenv shell` > `cd routineapp` > `npm run dev`
- terminal 3: Start up server for the e-mail feature `pipenv shell` > `cd routineapp` > `cd frontend` > `cd src` > `cd components` > `node server.js`
- visit http://localhost:8000/

## Technologies used:

## Planning

## Challenges & Solutions

## Future Features

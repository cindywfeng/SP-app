## <pre>

---

# CARE - A Skincare Diary & Planner 🌿

---

Link: http://cindyfengw.pythonanywhere.com

## Description

This app allows users to create their own library of skincare products which they can use in planning and logging their daily skincare routines. The user can also send reports of their daily skincare routine from the app to their email address.

## Purpose

## How to use:

![Sign in page](signin.png)

1. Register and Sign in with your name and password.

   ![Dashboard page](header.png)

2. On the dashboard page you can 1. add your routine, 2. add a skincare product, 3. view your routines, 4. send e-reports of your routines to your e-mail

   ![Routines page](routines.png)

3. The list of skincare routines will display the products you used in your routines

   ![skincare products](skincareproducts.png)

4. Add and delete skincare products to your skincare products library

   ![serum form page](serumform.png)

5. Create your skincare routine. The list on the right will show you the skincare products from your skincare products library suitable for each step.

   ![e-mail form](email.png)

6. Send an e-report of your latest skincare routine to your email address

## Instructions

- Fork and Clone
- Install dependencies (1): `pip install -r requirements.txt`
- Install dependencies (2): `npm install`
- terminal 1: Start up API `pipenv shell` > `cd routineapp` > `python manage.py runserver`
- terminal 2: Run Webpack `pipenv shell` > `cd routineapp` > `npm run dev`
- terminal 3: Start up server for the e-mail feature `pipenv shell` > `cd routineapp` > `cd frontend` > `cd src` > `cd components` > `node server.js`
- visit http://localhost:8000/

## Technologies used:

- **Django**
- **ReactJS**
- **Redux**
- **Database: SQLite3**
- HTML/CSS
- **Creation of API: Django REST Framework**
- **Token-based Authentication: Django Knox**
- **Webpack** (module bundling)
- Babel
- NodeMailer (creation of e-mail functionality)
- Postman (API testing)
- NodeJS
- Express (side back-end server for e-mail)
- **Deployment: PythonAnywhere**
- **Planning/Wireframing: Figma**

### Other frameworks & libraries:

- Material UI
- React Bootstrap
- Animate.CSS
- React Alert
- React Modal

## Planning

![wireframe overview](wireframe.png)
![ERD](erd.png)

## Challenges & Solutions

## Future Features

</pre>

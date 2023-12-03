settings file : helps in maintaining all the dependencies and also the databases

url file: used to specify all the urls used in the project

assgi file : 

wsgi file:  

myap : an application that can be run using django interface

one can create multiple apps for same project

myapp >> models.py : dealing with database

to run the changes/implementations in the  files, the whole project needs to be executed along with the myap, thus on hitting: path('',include()) , it includes whatever has been done to the myap application and renders the page'/'

to render a externally built html page, templates as a folder is used and can be done using settings.py and pass in the location of files in dirs under templates

A project refers to the entire application and all its parts. An app refers to a submodule of the project

to make sites dynamic we need to pass on some data as key : value

to manage a post request in any element such as post, we need to configure the CSRF(cross site request forgery) token

to resolve the multidictkey... error we need to make the request.post and thus post method helps in cases of data breaching as url gets shortened

static folder : where all the static files such as external css is stored by mentioning in settings

BASE_DIR means the folder that conatains manage.py

dynamic django modules is same as ejs which helps in using the python code in html file while seperating the frontend from backend

django uses sql lite as default db, but it can be changed

to make the changes in mmodel.py work and establish an databse, we need:
 manage.py makemigrations followed by
 python manage.py migrate

accessing the admin panel of default django at /admin endpoint using: 
 manage.py createsuperuser

Each value in the database is an object

Redirect allows to redirect the user on other html page whenever called

On importing the User from django.contrib we can use it's properties and match its attributes thus doing various actions

Dynamic url routing helps in customising the page as per the user
<str : str_name>
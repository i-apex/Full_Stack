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


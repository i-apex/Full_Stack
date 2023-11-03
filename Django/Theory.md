settings file : helps in maintaining all the dependencies and also the databases

url file: used to specify all the urls used in the project

assgi file : 

wsgi file:  

myap : an application that can be run using django interface

one can create multiple apps for same project

myapp >> models.py : dealing with database

to run the changes/implementations in the  files, the whole project needs to be executed along with the myap, thus on hitting: path('',include()) , it includes whatever has been done to the myap application and renders the page'/'
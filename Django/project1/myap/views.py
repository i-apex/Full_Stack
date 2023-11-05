from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    # return HttpResponse('<h1>Hey,Welcome</h1>')
    context = {
        'name':'Rahul',
        'age': 20,
        'nationality': 'Indian',
    }
    response = render(request, 'index.html', context)
    return response

from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    # return HttpResponse('<h1>Hey,Welcome</h1>')
    response = render(request, 'index.html')
    return response

def counter(request):
    word = request.POST['words']
    count = len(word.split())
    response = render(request, 'counter.html', {'count':count})
    return response
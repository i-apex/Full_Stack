from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User,auth
from django.contrib import messages
from .models import Feature
# Create your views here.

def index(request):
    # return HttpResponse('<h1>Hey,Welcome</h1>')
    # feature1= Feature()
    # feature1.id= 0
    # feature1.name = 'Fast'
    # feature1.is_true = True
    # feature1.details = 'Our service is very quick'

    # feature2= Feature()
    # feature2.id= 1
    # feature2.name = 'Reliable'
    # feature2.is_true = True
    # feature2.details = 'Our service is very reliable'
    
    # feature3= Feature()
    # feature3.id= 2
    # feature3.name = 'Easy to use'
    # feature3.is_true = True
    # feature3.details = 'Our service is very easy to use'

    # feature4= Feature()
    # feature4.id= 3
    # feature4.name = 'Affordable'
    # feature4.is_true = True
    # feature4.details = 'Our service is very affordable'

    # features = [feature1, feature2, feature3, feature4]
    
    
    # response = render(request, 'index.html',{'feature' : feature1,
    #                                          'feature2':feature2,
    #                                          'feature3':feature3,
    #                                          'feature4':feature4})
    features = Feature.objects.all()
    response = render(request , 'index.html' , {'features' : features})
    return response

def login(request):
    if(request.method == 'POST'):
        username = request.POST['username']
        password = request.POST['password']
        # print(username,password)
        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            response = redirect('/')
            return response
        else:
            messages.info(request,'Invalid credentials')
            response = redirect('login')
            return response
        
    else:
        response = render(request, 'login.html')
        return response


def logout(request):
    auth.logout(request)
    response = redirect('/')
    return response

def register(request):

    if request.method == 'POST':
        response = render(request, 'register.html')
        username= request.POST['username']
        email= request.POST['email']
        password= request.POST['password']
        password2= request.POST['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                messages.info(request,'Email already exists')
                return redirect('register')
            # it redirects to the form again as email already exists
            elif User.objects.filter(username=username).exists():
                messages.info(request,'Username already exists')
                return redirect('register') 
            else:
                user = User.objects.create_user(username=username, password=password, email=email)
                user.save()
                print('User created')
                return redirect('login')
            
        else:
            messages.info(request,'Password not matching')
            return redirect('register')
        
    else:
        response = render(request, 'register.html')
        return response

  
def counter(request):
    # word = request.POST['words']
    posts = [1,2,3,4,5,'tim', 'tom', 'jerry']
    # count = len(word.split())
    response = render(request, 'counter.html', {'posts':posts})
    return response

def post(request,pk):
    # feature = Feature.objects.get(id=pk)
   
    response = render(request, 'post.html', {'pk':pk})
    return response

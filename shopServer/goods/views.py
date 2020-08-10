# from django.shortcuts import render
from django.http import response

# Create your views here.


def usefucbyname(request, fucname):
  return eval(fucname)(request)


def index(request):
  return response.HttpResponse("hello")

from django.shortcuts import render

# Create your views here.
def usefucbyname(request, fucname):
  return eval(fucname)(request)
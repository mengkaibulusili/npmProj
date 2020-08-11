# from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.http import request


# Create your views here.
def usefucbyname(request, fucname):
  return eval(fucname)(request)


# 序列化数据库数据
# python manage.py shell
# from django.core import serializers
# data = serializers.serialize('json', vips.VipsInfo.objects.all(), fields=('name','tele'))


def createVip(request):
  request.GET.get("id")
  return HttpResponse("")
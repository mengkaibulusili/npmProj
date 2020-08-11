# from django.shortcuts import render
import vips.models as vipmodel
from django.shortcuts import HttpResponse
import json

# Create your views here.
def usefucbyname(request, fucname):
  return eval(fucname)(request)


# 序列化数据库数据
# python manage.py shell
# from django.core import serializers
# data = serializers.serialize("json", vips.VipsInfo.objects.all(), fields=("name","tele"))

#  http://127.0.0.1:8000/api/vips/createVip?data={"name": "kiki", "telephone": "1232112", "birthday": "198902", "staffuuid": "2asa-1212", "staff": "keke"}
def createVip(request):
  res = {"code":"0","message":"","data":{}}
  try:
    vip_info_json = request.GET.get("data")
    vip_dict = json.loads(vip_info_json)
    vipmodel.VipsInfo(**vip_dict).save()
  except Exception as e:
    res["code"] = "-1"
    res["message"] = str(e)
  return HttpResponse(json.dumps(res,ensure_ascii=False))
import json
# from django.shortcuts import HttpResponse
from staffs import models as staffmodel
from django.core import serializers
import scriptTools.timeTools as tTools
import scriptTools.mydecorator as mydecorator

# data = serializers.serialize("json", vips.VipsInfo.objects.all(), fields=("name","tele"))

# 功能清单
# 创建新员工
# 查询所有员工所有信息
# 修改员工销售额
# 修改员工拉新顾客数目


# Create your views here.
def usefucbyname(request, fucname):
  return eval(fucname)(request)


# staffname  stafftelephone  staffbirthday
# http://127.0.0.1:8000/api/staffs/createStaff?data={"staffname": "kiki", "stafftelephone": "1232112", "staffbirthday": "198902"}
@mydecorator.httpRes
def createStaff(request):
  staff_info_json = request.GET.get("data")
  staff_dict = json.loads(staff_info_json)
  staffmodel.StaffsInfo(**staff_dict).save()


# http://127.0.0.1:8000/api/staffs/showStaffs/
# def showStaffs(request):
#   print(list(staffmodel.StaffsInfo.objects.all()))
#   return HttpResponse(serializers.serialize("json", staffmodel.StaffsInfo.objects.all()))
@mydecorator.httpGetData
def showStaffs(request):
  return json.loads(serializers.serialize("json", staffmodel.StaffsInfo.objects.all()))


# # http://127.0.0.1:8000/api/staffs/staffQuit/?data=
# def staffQuit(request):
#   res = {"code": "0", "message": "", "data": {}}
#   try:
#     x=staffmodel.StaffsInfo.objects.get(staffid=request.GET.get("data"))
#     x.state="离职"
#     x.quittime=tTools.dateStdTime()
#     x.save()
#   except Exception as e:
#     res["code"] = "-1"
#     res["message"] = str(e)
#   return HttpResponse(json.dumps(res, ensure_ascii=False))
@mydecorator.httpRes
def staffQuit(request):
  x = staffmodel.StaffsInfo.objects.get(staffid=request.GET.get("data"))
  x.state = "离职"
  x.quittime = tTools.dateStdTime()
  x.save()

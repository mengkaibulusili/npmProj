from django.db import models
import uuid
import scriptTools.timeTools as tTools

charlen = 50
# Create your models here.
# 新增会员
class VipsInfo(models.Model):
  vipid = models.AutoField("vipid",primary_key=True, auto_created=True)
  vipuuid = models.CharField("vipuuid",default=uuid.uuid1,blank=True,max_length=charlen)
  createtime = models.CharField("createtime",default=tTools.dateStdTime, max_length=charlen,blank=True)
  name = models.CharField("name",max_length=charlen)
  telephone = models.CharField("telephone",max_length=charlen)
  birthday = models.CharField("birthday",max_length=charlen)
  rechangetype = models.CharField("rechangetype",max_length=charlen)
  summoney = models.CharField("summoney",max_length=charlen)
  staffuuid = models.CharField("staffuuid",max_length=charlen)
  staff = models.CharField("staff",max_length=charlen)
  remainmoney = models.CharField("remainmoney",max_length=charlen)

# 新购项目
class VipsProj(models.Model):
  vipprojid = models.AutoField("vipprojid",primary_key=True)
  vipprojuuid = models.CharField("vipprojuuid",default=uuid.uuid1,blank=True,max_length=charlen)
  createtime = models.CharField("createtime",default=tTools.dateStdTime, max_length=charlen,blank=True)
  vipprojuuid = models.CharField("vipprojuuid", max_length=charlen)
  vipprojname = models.CharField("vipprojname",max_length=charlen)
  vipprojprice = models.CharField("vipprojname",max_length=charlen)
  staffuuid = models.CharField("staffuuid",max_length=charlen)
  staff = models.CharField("staff",max_length=charlen)
  state = models.CharField("state",max_length=charlen)
  useTime = models.CharField("useTime",max_length=charlen)

# 新增购物
class VipsConsume(models.Model):
  vipconsumeid = models.AutoField("vipconsumeid",primary_key=True)
  vipconsumeuuid = models.CharField("vipconsumeuuid",default=uuid.uuid1,blank=True,max_length=charlen)
  createtime = models.CharField("createtime",default=tTools.dateStdTime, max_length=charlen,blank=True)
  # sp  的 uuid
  gooduuid = models.CharField("gooduuid", max_length=charlen)
  goodname = models.CharField("goodname",max_length=charlen)
  goodmoney = models.CharField("goodmoney",max_length=charlen)
  staffuuid = models.CharField("staffuuid",max_length=charlen)
  staff = models.CharField("staff",max_length=charlen)


# python manage.py shell
# import vips.models as vips
# from django.core import serializers
# data = serializers.serialize('json', vips.VipsInfo.objects.all(), fields=('name','tele'))

# 存储数据
# x1=vips.VipsInfo(name="kiki",telephone="1212",birthday="129",rechangetype="sp",remainmoney="100",summoney="1222",staff="keke")
#  x1.save()
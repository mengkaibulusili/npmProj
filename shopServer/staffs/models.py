from django.db import models
import uuid
import scriptTools.timeTools as tTools
charlen = 50
# Create your models here.
class StaffsInfo(models.Model):
  staffid = models.AutoField("staffid", primary_key=True, auto_created=True)
  staffuuid = models.CharField("staffuuid", default=uuid.uuid1, blank=True, max_length=charlen)
  createtime = models.CharField("createtime", default=tTools.dateStdTime, max_length=charlen, blank=True)
  totalturnover = models.CharField("totalturnover", default="0", max_length=charlen,blank=True)
  totalvip = models.CharField("totalvip", default="0", max_length=charlen,blank=True)
  staffname = models.CharField("staffname", max_length=charlen)
  
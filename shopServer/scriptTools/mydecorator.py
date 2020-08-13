import json
from django.shortcuts import HttpResponse


def httpRes(f):
  def x(*args, **kwargs):
    res = {"code": "0", "message": "", "data": {}}
    try:
      f(*args, **kwargs)
    except Exception as e:
      res["code"] = "-1"
      res["message"] = str(e)
    return HttpResponse(json.dumps(res, ensure_ascii=False))

  return x

def httpGetData(f):
  def x(*args, **kwargs):
    res = {"code": "0", "message": "", "data": {}}
    try:
      res["data"]=f(*args, **kwargs)
    except Exception as e:
      res["code"] = "-1"
      res["message"] = str(e)
    return HttpResponse(json.dumps(res, ensure_ascii=False))

  return x
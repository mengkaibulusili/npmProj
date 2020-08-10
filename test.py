# import urllib
import urllib.request as urllib2
import ssl
# http://302301.market.alicloudapi.com/barcode/barcode?
# barcode=6924065904049&
# appcode= fc089bbd80bf4ab9a64a36a99af67143

host = 'https://302301.market.alicloudapi.com'
path = '/barcode/barcode'
method = 'GET'
appcode = 'fc089bbd80bf4ab9a64a36a99af67143'
# querys = 'barcode=6924065904049'
querys = 'barcode=8809654400370'
bodys = {}
url = host + path + '?' + querys

request = urllib2.Request(url)
request.add_header('Authorization', 'APPCODE ' + appcode)
request.add_header("Content-Type", "application/json; charset=utf-8")
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
response = urllib2.urlopen(request, context=ctx)
content = response.read()
if (content):
  print(content.decode())

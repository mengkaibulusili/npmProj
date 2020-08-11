# Generated by Django 3.1 on 2020-08-10 05:41

from django.db import migrations, models
import uuid
import vips.models


class Migration(migrations.Migration):

    dependencies = [
        ('vips', '0004_auto_20200810_0536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vipsinfo',
            name='createtime',
            field=models.CharField(blank=True, default=vips.models.dateStdTime, max_length=50, verbose_name='createtime'),
        ),
        migrations.AlterField(
            model_name='vipsinfo',
            name='vipuuid',
            field=models.CharField(auto_created=True, blank=True, default=uuid.uuid1, max_length=50, verbose_name='vipuuid'),
        ),
    ]
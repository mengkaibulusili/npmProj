# Generated by Django 3.1 on 2020-08-13 07:34

from django.db import migrations, models
import scriptTools.timeTools
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StaffsInfo',
            fields=[
                ('staffid', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='staffid')),
                ('staffuuid', models.CharField(blank=True, default=uuid.uuid1, max_length=50, verbose_name='staffuuid')),
                ('createtime', models.CharField(blank=True, default=scriptTools.timeTools.dateStdTime, max_length=50, verbose_name='createtime')),
                ('totalturnover', models.CharField(blank=True, default='0', max_length=50, verbose_name='totalturnover')),
                ('totalvip', models.CharField(blank=True, default='0', max_length=50, verbose_name='totalvip')),
                ('state', models.CharField(blank=True, default='在职', max_length=50, verbose_name='state')),
                ('quittime', models.CharField(blank=True, default='0', max_length=50, verbose_name='quittime')),
                ('salary', models.CharField(blank=True, default='0', max_length=50, verbose_name='salary')),
                ('staffname', models.CharField(max_length=50, verbose_name='staffname')),
                ('stafftelephone', models.CharField(max_length=50, unique=True, verbose_name='stafftelephone')),
                ('staffbirthday', models.CharField(max_length=50, verbose_name='staffbirthday')),
            ],
        ),
    ]

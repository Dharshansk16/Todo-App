# Generated by Django 5.0.6 on 2024-07-08 09:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todo',
            options={'ordering': ['-created']},
        ),
    ]

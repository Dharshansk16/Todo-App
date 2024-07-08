# Generated by Django 5.0.6 on 2024-07-08 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_todo_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='slug',
            field=models.SlugField(blank=True, default='', unique=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='task_name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]

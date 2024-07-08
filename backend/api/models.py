from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


# Create your models here.
class Todo(models.Model):
    task_name = models.CharField(max_length=100 , unique=True)
    created = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(User, related_name="todoList", on_delete=models.CASCADE)
    slug = models.SlugField(unique=True, blank=True , default="")
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.task_name)[:20]
        super(Todo, self).save(*args, **kwargs)
   
    def __str__(self):
        return f"{self.task_name } | {self.user}"

    class Meta:
        ordering = ["-created"]
        
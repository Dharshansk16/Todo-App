from rest_framework import serializers
from .models import Todo
from django.contrib.auth.models import User 



class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields  = "__all__"

class UserSerializer(serializers.ModelSerializer):
    todoList = serializers.PrimaryKeyRelatedField(many=True, queryset=Todo.objects.all())
    class Meta:
        model = User
        fields = ["username", "password", "todoList"]


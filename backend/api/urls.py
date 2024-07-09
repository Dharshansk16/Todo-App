from django.urls import path , include
from rest_framework.routers import DefaultRouter
from .views import TodoViewSet , UserviewSet

router = DefaultRouter()
router.register(r"todo",TodoViewSet , basename="todo")
router.register(r"user", UserviewSet , basename="")

urlpatterns = [
    path("", include(router.urls)),
    path("current_user/", UserviewSet.as_view({"get":"current_user"}), name="current-user")
]

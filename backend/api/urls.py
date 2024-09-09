from django.urls import path , include
from rest_framework.routers import DefaultRouter
from .views import TodoViewSet , UserviewSet

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r"todo",TodoViewSet , basename="todo")
router.register(r"user", UserviewSet , basename="user")

urlpatterns = [
    path("", include(router.urls)),
    path("current_user/", UserviewSet.as_view({"get":"current_user"}), name="current-user"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair_view"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh_view"),
]

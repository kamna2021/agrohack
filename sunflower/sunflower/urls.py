from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin_sunflower/', admin.site.urls),
    path('', include("core.urls")),
]

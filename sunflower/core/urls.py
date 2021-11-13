from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from core.views import AuditViewSet, FlowerViewSet, PlaceViewSet, TypeFlowerViewSet

router = DefaultRouter()
router.register(r'typeflower', TypeFlowerViewSet)
router.register(r'flower', FlowerViewSet)
router.register(r'place', PlaceViewSet)
router.register(r'audit', AuditViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

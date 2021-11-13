from django.shortcuts import render
from rest_framework import viewsets

from core.models import Audit, Flower, Place, TypeFlower
from core.serializers import AuditSerializer, FlowerSerializer, PlaceSerializer, TypeFlowerSerializer

class TypeFlowerViewSet(viewsets.ModelViewSet):
    queryset = TypeFlower.objects.all()
    serializer_class = TypeFlowerSerializer

class FlowerViewSet(viewsets.ModelViewSet):
    queryset = Flower.objects.all()
    serializer_class = FlowerSerializer

class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer

class AuditViewSet(viewsets.ModelViewSet):
    queryset = Audit.objects.all()
    serializer_class = AuditSerializer


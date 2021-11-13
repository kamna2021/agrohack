from rest_framework import serializers
from rest_framework.relations import HyperlinkedRelatedField
from core.models import TypeFlower, Flower, Place, Audit

class TypeFlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeFlower
        fields = "__all__"


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = "__all__"


class FlowerSerializer(serializers.ModelSerializer):
    # type_flower = TypeFlowerSerializer(many = False)
    # place = PlaceSerializer(many = False)
    class Meta:
        model = Flower
        fields = "__all__"


class AuditSerializer(serializers.ModelSerializer):
    # place = PlaceSerializer(many = False)
    class Meta:
        model = Audit
        fields = "__all__"
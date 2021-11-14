from rest_framework import serializers
from rest_framework.relations import HyperlinkedRelatedField
from core.models import TypeFlower, Flower, Place, Audit, Organization

class TypeFlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeFlower
        fields = "__all__"


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = "__all__"


class FlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flower
        fields = "__all__"


class AuditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audit
        fields = "__all__"


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = "__all__"
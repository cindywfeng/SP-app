from rest_framework import serializers
from routines.models import Routine
from routines.models import Item


# Routine Serializer


class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

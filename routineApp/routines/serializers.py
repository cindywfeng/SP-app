from rest_framework import serializers
from routines.models import Routine
from routines.models import Item


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('__all__')

# Routine Serializer


class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ('__all__')

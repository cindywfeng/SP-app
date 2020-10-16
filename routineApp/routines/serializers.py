from rest_framework import serializers
from routines.models import Routine
from routines.models import Item

# Routine Serializer


class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ('id', 'date', 'timeofday', 'itemid1', 'itemid2', 'itemid3',
                  'itemid4', 'itemid5', 'itemid6', 'itemid7', 'comment', 'owner')


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name', 'brand', 'category', 'created_at', 'owner')

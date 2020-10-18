from rest_framework import serializers
from routines.models import Routine
from routines.models import Item

# Routine Serializer


class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ('id', 'date', 'timeofday', 'itemid1', 'itemid2', 'itemid3',
                  'itemid4', 'itemid5', 'itemid6', 'itemid7', 'comment', 'owner')

    def to_representation(self, instance):
        rep = super(RoutineSerializer, self).to_representation(instance)
        rep['itemid1'] = instance.itemid1.name
        rep['itemid2'] = instance.itemid2.name
        rep['itemid3'] = instance.itemid3.name
        rep['itemid4'] = instance.itemid4.name
        rep['itemid5'] = instance.itemid5.name
        rep['itemid6'] = instance.itemid6.name
        rep['itemid7'] = instance.itemid7.name
        return rep


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name', 'brand', 'category', 'created_at', 'owner')

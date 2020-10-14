from rest_framework import serializers
from routines.models import Routine
from routines.models import Item


# Routine Serializer


class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        itemid1 = serializers.ReadOnlyField(source='itemid1.name')
        model = Routine
        fields = ('id', 'date', 'timeofday', 'comment', 'itemid1',
                  'itemid2', 'itemid3', 'itemid4', 'itemid5', 'itemid6', 'itemid7')

        def to_representation(self, instance):
            rep = super(UserSerializer, self).to_representation(instance)
            rep['itemid1'] = itemid1.name
            return rep


class ItemSerializer(serializers.ModelSerializer):
    class Meta:

        model = Item
        fields = ('id', 'name', 'brand', 'category', 'created_at')

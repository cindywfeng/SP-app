from rest_framework import serializers
from routines.models import Routine

# Routine Serializer


class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = '__all__'

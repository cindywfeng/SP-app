from routines.models import Routine
from routines.models import Item
from rest_framework import viewsets, permissions
from .serializers import RoutineSerializer
from .serializers import ItemSerializer


# Routine ViewSet


class RoutineViewSet(viewsets.ModelViewSet):
    queryset = Routine.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RoutineSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ItemSerializer

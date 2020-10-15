from routines.models import Routine
from routines.models import Item
from rest_framework import viewsets, permissions
from .serializers import RoutineSerializer
from .serializers import ItemSerializer


# Routine ViewSet


class RoutineViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = RoutineSerializer

    def get_queryset(self):
        return self.request.user.items.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# Item ViewSet


class ItemViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ItemSerializer

    def get_queryset(self):
        return self.request.user.routines.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

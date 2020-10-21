from routines.models import Routine
from routines.models import Item
from rest_framework import viewsets, permissions
from .serializers import RoutineSerializer
from .serializers import ItemSerializer


# Routine ViewSet


class RoutineViewSet(viewsets.ModelViewSet):
    queryset = Routine.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = RoutineSerializer

    def get_queryset(self):
        return self.request.user.routines.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ItemSerializer

    def get_queryset(self):
        return self.request.user.items.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

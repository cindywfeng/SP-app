from routines.models import Routine
from rest_framework import viewsets, permissions
from .serializers import RoutineSerializer

# Routine ViewSet


class RoutineViewSet(viewsets.ModelViewSet):
    queryset = Routine.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RoutineSerializer

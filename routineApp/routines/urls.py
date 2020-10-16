from rest_framework import routers
from .api import RoutineViewSet
from .api import ItemViewSet
router = routers.DefaultRouter()
router.register('api/routines', RoutineViewSet, 'routines')
router.register('api/items', ItemViewSet, 'items')

urlpatterns = router.urls

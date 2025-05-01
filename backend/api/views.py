"""
Classes:
    SportListView:
        A view that provides a read-only list of all Sport instances.
        Inherits from `generics.ListAPIView`.

    SportDetailView:
        A view that provides detailed information about a single Sport instance.
        Inherits from `generics.RetrieveAPIView`.
"""

from rest_framework import generics



from .models import Sport
from .serializers import SportSerializer, SportDetailSerializer

class SportListView(generics.ListAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class SportDetailView(generics.RetrieveAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportDetailSerializer

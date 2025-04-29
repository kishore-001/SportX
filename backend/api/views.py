from rest_framework import generics
from .models import Sport
from .serializers import SportSerializer, SportDetailSerializer

class SportListView(generics.ListAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class SportDetailView(generics.RetrieveAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportDetailSerializer

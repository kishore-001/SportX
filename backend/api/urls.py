from django.urls import path
from .views import SportListView, SportDetailView

urlpatterns = [
    path('sports/', SportListView.as_view(), name='sport-list'),
    path('sports/<int:pk>/', SportDetailView.as_view(), name='sport-detail'),
]

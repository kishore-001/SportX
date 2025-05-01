"""
This module defines the URL patterns for the SportX API.

It includes the following endpoints:
- /sports/ : Lists all sports (handled by SportListView).
- /sports/<int:pk>/ : Retrieves details of a specific sport by its primary key (handled by SportDetailView).
"""

from django.urls import path
from .views import SportListView, SportDetailView

urlpatterns = [
    path('sports/', SportListView.as_view(), name='sport-list'),
    path('sports/<int:pk>/', SportDetailView.as_view(), name='sport-detail'),
]

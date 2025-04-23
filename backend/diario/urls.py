from django.urls import path
from .views import RegistroListCreateView, RegistroDetailView

urlpatterns = [
    path('registros/', RegistroListCreateView.as_view(), name='registro-list'),
    path('registros/<int:pk>/', RegistroDetailView.as_view(), name='registro-detail'),
]
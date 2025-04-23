from django.shortcuts import render
from rest_framework import generics
from .models import RegistroDiario
from .serializers import RegistroDiarioSerializer

class RegistroListCreateView(generics.ListCreateAPIView):
    queryset = RegistroDiario.objects.all()
    serializer_class = RegistroDiarioSerializer

class RegistroDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RegistroDiario.objects.all()
    serializer_class = RegistroDiarioSerializer
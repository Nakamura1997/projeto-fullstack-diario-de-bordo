from rest_framework import serializers
from .models import RegistroDiario

class RegistroDiarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroDiario
        fields = ['id', 'titulo', 'conteudo', 'data_criacao', 'data_atualizacao']
from django.db import models
from django.utils import timezone

class RegistroDiario(models.Model):
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    data_criacao = models.DateTimeField(default=timezone.now)
    data_atualizacao = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.titulo
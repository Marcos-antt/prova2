from asyncio.windows_events import NULL
from django.db import models


class Estagito(models.Model):                              
    nome = models.CharField(max_length=100)                    
    texto = models.CharField(max_length=200)                          
    date = models.DateTimeField()






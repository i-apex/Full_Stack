from django.db import models

# Create your models here.
class Feature(models.Model):
    # id:int 
    name = models.CharField(max_length=100)
    details = models.CharField(max_length =500)
 
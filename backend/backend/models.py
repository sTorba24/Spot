from django.db import models

class Product(models.Model):
    prod_id=models.IntegerField(primary_key=True)
    prod_name=models.CharField(max_length=100)

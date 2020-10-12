from django.db import models

# Create your models here.


class Routine(models.Model):
    date = models.DateTimeField()
    timeofday = models.CharField(max_length=2)
    itemid1 = models.PositiveIntegerField()
    itemid2 = models.PositiveIntegerField()
    itemid3 = models.PositiveIntegerField(blank=True)
    itemid4 = models.PositiveIntegerField(blank=True)
    itemid5 = models.PositiveIntegerField(blank=True)
    itemid6 = models.PositiveIntegerField(blank=True)
    itemid7 = models.PositiveIntegerField(blank=True)
    comment = models.CharField(max_length=300, blank=True)

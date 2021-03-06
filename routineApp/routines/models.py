from django.db import models
# authentications and tokens
from django.contrib.auth.models import User
# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="items", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Routine(models.Model):
    date = models.DateField(auto_now_add=True)
    timeofday = models.CharField(max_length=10)
    itemid1 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid1', default=None, null=True)
    itemid2 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid2', default=None, null=True, blank=True)
    itemid3 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid3', default=None, null=True, blank=True)
    itemid4 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid4', default=None, null=True, blank=True)
    itemid5 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid5', default=None, null=True, blank=True)
    itemid6 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid6', default=None, null=True, blank=True)
    itemid7 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid7', default=None, null=True)
    comment = models.CharField(max_length=300, blank=True)
    owner = models.ForeignKey(
        User, related_name="routines", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.date

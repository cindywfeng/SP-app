from django.db import models

# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class Routine(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    timeofday = models.CharField(max_length=2)
    itemid1 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid1')
    itemid2 = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='itemid2')
    itemid3 = models.ForeignKey(
        Item, on_delete=models.CASCADE,  blank=True, related_name='itemid3')
    itemid4 = models.ForeignKey(
        Item, on_delete=models.CASCADE,  blank=True, related_name='itemid4')
    itemid5 = models.ForeignKey(
        Item, on_delete=models.CASCADE,  blank=True, related_name='itemid5')
    itemid6 = models.ForeignKey(
        Item, on_delete=models.CASCADE,  blank=True, related_name='itemid6')
    itemid7 = models.ForeignKey(
        Item, on_delete=models.CASCADE,  blank=True, related_name='itemid7')
    comment = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return self.name

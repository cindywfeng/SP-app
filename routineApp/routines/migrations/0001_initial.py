# Generated by Django 3.1.2 on 2020-10-21 15:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('brand', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='items', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Routine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True)),
                ('timeofday', models.CharField(max_length=10)),
                ('comment', models.CharField(blank=True, max_length=300)),
                ('itemid1', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid1', to='routines.item')),
                ('itemid2', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid2', to='routines.item')),
                ('itemid3', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid3', to='routines.item')),
                ('itemid4', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid4', to='routines.item')),
                ('itemid5', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid5', to='routines.item')),
                ('itemid6', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid6', to='routines.item')),
                ('itemid7', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid7', to='routines.item')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='routines', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

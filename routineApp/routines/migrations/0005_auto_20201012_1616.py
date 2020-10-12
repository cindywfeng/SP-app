# Generated by Django 3.1.2 on 2020-10-12 16:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('routines', '0004_auto_20201012_1513'),
    ]

    operations = [
        migrations.AlterField(
            model_name='routine',
            name='itemid1',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='itemid1', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid2',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='itemid2', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid3',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='itemid3', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid4',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='itemid4', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid5',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='itemid5', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid6',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='itemid6', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid7',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='itemid7', to='routines.item'),
        ),
    ]

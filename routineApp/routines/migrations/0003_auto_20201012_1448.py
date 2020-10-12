# Generated by Django 3.1.2 on 2020-10-12 14:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('routines', '0002_auto_20201012_1430'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('brand', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='itemid1', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid2',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='itemid2', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid3',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid3', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid4',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid4', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid5',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid5', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid6',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid6', to='routines.item'),
        ),
        migrations.AlterField(
            model_name='routine',
            name='itemid7',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemid7', to='routines.item'),
        ),
    ]
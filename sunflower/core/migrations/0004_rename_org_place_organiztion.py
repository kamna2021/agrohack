# Generated by Django 3.2.9 on 2021-11-13 23:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_place_org'),
    ]

    operations = [
        migrations.RenameField(
            model_name='place',
            old_name='org',
            new_name='organiztion',
        ),
    ]

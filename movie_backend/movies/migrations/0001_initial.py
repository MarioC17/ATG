# Generated by Django 3.2.5 on 2022-09-03 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movies',
            fields=[
                ('movie_id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, default=None, null=True)),
                ('title', models.CharField(max_length=128)),
                ('year', models.CharField(max_length=128)),
                ('rated', models.CharField(max_length=128)),
                ('released', models.CharField(max_length=128)),
                ('runtime', models.CharField(max_length=128)),
                ('genre', models.TextField(blank=True, null=True)),
                ('director', models.CharField(max_length=128)),
                ('writer', models.CharField(max_length=128)),
                ('actors', models.CharField(max_length=128)),
                ('plot', models.TextField(blank=True, null=True)),
                ('language', models.CharField(max_length=128)),
                ('country', models.CharField(max_length=128)),
                ('awards', models.CharField(max_length=128)),
                ('poster', models.TextField(blank=True, null=True)),
                ('ratings', models.TextField(blank=True, null=True)),
                ('metascore', models.TextField(blank=True, null=True)),
                ('imdbRating', models.CharField(max_length=128)),
                ('imdbVotes', models.CharField(max_length=128)),
                ('imdbID', models.CharField(max_length=128)),
                ('type', models.CharField(max_length=128)),
                ('dvd', models.CharField(max_length=128)),
                ('boxOffice', models.CharField(max_length=128)),
                ('production', models.CharField(max_length=128)),
                ('website', models.CharField(max_length=128)),
                ('response', models.CharField(max_length=128)),
            ],
            options={
                'db_table': 'movies',
                'managed': True,
            },
        ),
    ]

# Create your models here.
from django.db import models
from django_paranoid.models import ParanoidModel


# Create your models here.
class Movies(ParanoidModel):
    movie_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False)
    title =  models.CharField(max_length=128)
    year =  models.CharField(max_length=128)
    rated =  models.CharField(max_length=128)
    released =  models.CharField(max_length=128)
    runtime =  models.CharField(max_length=128)
    genre =  models.TextField(blank=True, null=True)
    director =  models.CharField(max_length=128)
    writer =  models.CharField(max_length=128)
    actors =  models.CharField(max_length=128)
    plot =  models.TextField(blank=True, null=True)
    language =  models.CharField(max_length=128)
    country =  models.CharField(max_length=128)
    awards =  models.CharField(max_length=128)
    poster =  models.TextField(blank=True, null=True)
    ratings =  models.TextField(blank=True, null=True)
    metascore =  models.TextField(blank=True, null=True)
    imdbRating =  models.CharField(max_length=128)
    imdbVotes =  models.CharField(max_length=128)
    imdbID =  models.CharField(max_length=128)
    type =  models.CharField(max_length=128)
    dvd =  models.CharField(max_length=128)
    boxOffice =  models.CharField(max_length=128)
    production =  models.CharField(max_length=128)
    website =  models.CharField(max_length=128)
    response =  models.CharField(max_length=128)


    def __str__(self):
        return self.name


    class Meta:
        managed = True
        db_table = 'movies'

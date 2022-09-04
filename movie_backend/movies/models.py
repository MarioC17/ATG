# Create your models here.
from django.db import models
from django_paranoid.models import ParanoidModel


# Create your models here.
# Movie model
class Movies(ParanoidModel):
    movie_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False)
    Title =  models.CharField(max_length=128)
    Year =  models.CharField(max_length=128)
    Rated =  models.CharField(max_length=128)
    Released =  models.CharField(max_length=128)
    Runtime =  models.CharField(max_length=128)
    Genre =  models.TextField(blank=True, null=True)
    Director =  models.CharField(max_length=128)
    Writer =  models.CharField(max_length=128)
    Actors =  models.CharField(max_length=128)
    Plot =  models.TextField(blank=True, null=True)
    Language =  models.CharField(max_length=128)
    Country =  models.CharField(max_length=128)
    Awards =  models.CharField(max_length=128)
    Poster =  models.TextField(blank=True, null=True)
    Ratings =  models.TextField(blank=True, null=True)
    Metascore =  models.TextField(blank=True, null=True)
    imdbRating =  models.CharField(max_length=128)
    imdbVotes =  models.CharField(max_length=128)
    imdbID =  models.CharField(max_length=128)
    Type =  models.CharField(max_length=128)
    DVD =  models.CharField(max_length=128)
    BoxOffice =  models.CharField(max_length=128)
    Production =  models.CharField(max_length=128)
    Website =  models.CharField(max_length=128)
    Response =  models.CharField(max_length=128)


    def __str__(self):
        return self.Title


    class Meta:
        managed = True
        db_table = 'movies'

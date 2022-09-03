from django.urls import path

from .views import MovieDetail, MovieList

app_name = 'movies_api'

urlpatterns = [
    #Shows a single movies information
    path('<int:pk>/',MovieDetail.as_view(), name='detailcreate'),
    #Shows all of the Movie data in the database
    path('',MovieList.as_view(), name='listcreate'),
]

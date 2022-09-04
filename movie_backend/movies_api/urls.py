from django.urls import path,re_path

from .views import MovieDetail, MovieList,MovieListSearchView,MovieDelete,MovieDeleteByMovieID

app_name = 'movies_api'

urlpatterns = [
    #Shows a single movies information
    path('<int:pk>/',MovieDetail.as_view(), name='detailcreate'),
    #Shows all of the Movie data in the database
    path('',MovieList.as_view(), name='listcreate'),
    #Deletes a movie by imdb ID
    path('delete/imdbID=<str:imdbID>/',MovieDelete.as_view(), name='delete'),
    #Deletes a movie by movie id in database
    path('delete/movie_id=<int:movie_id>/',MovieDeleteByMovieID.as_view(), name='delete'),
    #Searchs the database for movies containing the search word in their title
    re_path('^search/(?P<title>.+)/$', MovieListSearchView.as_view()),
]

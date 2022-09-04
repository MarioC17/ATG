from movies.models import Movies
from rest_framework import generics
from rest_framework import filters
from .serializers import MovieSerializer
from django_filters.rest_framework import DjangoFilterBackend

#list/create movie
class MovieList(generics.ListCreateAPIView):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer

#Get the details of a movie
class MovieDetail(generics.RetrieveDestroyAPIView):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer

#delete a movie by imdbID
class MovieDelete(generics.DestroyAPIView):
    queryset = Movies.objects.all()   
    serializer_class = MovieSerializer
    lookup_field = 'imdbID'
    lookup_url_kwarg = 'imdbID' 

#Delete movie by id
class MovieDeleteByMovieID(generics.DestroyAPIView):
    queryset = Movies.objects.all()   
    serializer_class = MovieSerializer
    lookup_field = 'movie_id'
    lookup_url_kwarg = 'movie_id' 

#Look up a movie by title search
class MovieListSearchView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        """
        """
        title = self.kwargs['title']
        return Movies.objects.filter(Title__icontains=title)
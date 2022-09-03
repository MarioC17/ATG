from movies.models import Movies
from rest_framework import generics

from .serializers import MovieSerializer


class MovieList(generics.ListCreateAPIView):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer


class MovieDetail(generics.RetrieveDestroyAPIView):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer

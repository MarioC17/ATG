from rest_framework import serializers
from movies.models import Movies


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('movie_id', 'title')
        model = Movies

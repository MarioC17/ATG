from rest_framework import serializers
from movies.models import Movies

#Movie serializer
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('movie_id', 'Title','Year','Rated','Released','Runtime','Genre','Director','Writer','Actors','Plot','Language','Awards','Poster','Ratings','Metascore','imdbRating','imdbVotes','imdbID','Type','DVD','BoxOffice','Production','Website','Response')
        model = Movies

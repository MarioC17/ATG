from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('movies.urls',namespace='movies')),
    path('api/',include('movies_api.urls',namespace='movies_api')),
]

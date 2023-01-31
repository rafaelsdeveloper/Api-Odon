from rest_framework import viewsets
from books.api import serializers
from books import models

class Booksviewsets(viewsets.ModelViewSet):
    serializer_class = serializers.Bookserializers
    queryset = models.Books.objects.all
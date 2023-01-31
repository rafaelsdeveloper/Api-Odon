from rest_framework import viewsets
from books.api import serializers
from books import models

class Booksviewsets(viewsets.ModelViewSet):
    serializer_class = seralizers.Bookserializers
    queryset = models.Books.objects.all
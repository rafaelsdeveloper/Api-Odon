from rest_framework import serializers
from books import models


class booksSerializers(serializers.ModelSerializer):
    class meta :
        models = models.Books
        fields = '__all__'
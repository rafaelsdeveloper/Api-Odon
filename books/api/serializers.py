from rest_framework import serializers
from books import models


class BooksSerializers(serializers.ModelSerializer):
    class meta :
        models = models.books
        fields = '__all__'
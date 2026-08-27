from rest_framework import serializers
from .models import Category, Product, SizeCategory

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Product
        fields = '__all__'


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SizeCategory
        fields = '__all__'
    
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Category, Product,SizeCategory
from .serializers import CategorySerializer, ProductSerializer, SizeSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_sizecategory(request):
    sizecategory = SizeCategory.objects.all()
    serializer =  SizeSerializer(sizecategory, many=True)
    return Response(serializer.data)

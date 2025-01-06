from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from french_app.models import Lesson


# Create your views here.

@api_view(['GET'])
def get_lessons(request):
    lessons = [
        {'id': 1, 'title': 'Vocab', 'description': 'Learn basic vocabulary'},
        {'id': 2, 'title': 'Grammar', 'description': 'Learn grammar rules'},
    ]
    return Response(lessons)

def index(request):
    return render(request, 'frontend/index.html')
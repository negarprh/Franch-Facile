from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
from django.http import JsonResponse
from datasets import load_dataset
from french_app.models import Lesson
import random



# Create your views here.

@api_view(['GET'])
def get_lessons(request):
    lessons = [
        {'id': 1, 'title': 'Vocab', 'description': 'Learn basic vocabulary'},
        {'id': 2, 'title': 'Grammar', 'description': 'Learn grammar rules'},
    ]
    return Response(lessons)

@api_view(['GET'])
def fetch_quote(request):
    try:
        # Load the dataset
        dataset = load_dataset("AhmedBou/French_quotes", split="train")

        # Ensure dataset is not empty
        if len(dataset) == 0:
            return Response({"quote": "No quotes available.", "author": "Unknown"}, status=404)

        # Randomly select a quote
        random_quote = random.choice(dataset)

        # Extract the quote and set the author as "Unknown"
        quote = random_quote.get("citation", "No quote found.")  # Use "citation" for the quote
        author = "Unknown"  # Default author

        return Response({"quote": quote, "author": author})
    except Exception as e:
        print(f"Error: {e}")  # Log the error
        return Response({"error": "Failed to load dataset.", "details": str(e)}, status=500)


def index(request):
    return render(request, 'frontend/index.html')
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
from django.http import JsonResponse
from datasets import load_dataset
from french_app.models import Lesson
from french_app.models import Vocabulary
import random
from bs4 import BeautifulSoup


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


@api_view(['GET'])
def fetch_wiktionary_data(request):
    word = request.GET.get('word', '').lower()
    if not word:
        return JsonResponse({"error": "No word provided"}, status=400)

    # Check if the word is already in the database
    vocab = Vocabulary.objects.filter(word=word).first()
    if vocab:
        return JsonResponse({
            "word": vocab.word,
            "translations": vocab.translations.split("; ") if vocab.translations else [],
            "examples": vocab.examples.split("; ") if vocab.examples else []
        })

    # Fetch from Wiktionary
    url = f"https://en.wiktionary.org/wiki/{word}"
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        print(response.text[:1000])  # Debugging: Print first 1000 chars of HTML

        # Extract translations
        translations_section = soup.find("span", {"id": "Translations"})
        translations = []
        if translations_section:
            print("Translations section found!")  # Debug
            translations_table = translations_section.find_next("table")
            if translations_table:
                print("Translations table found!")  # Debug
                rows = translations_table.find_all("tr")
                for row in rows:
                    cells = row.find_all("td")
                    if len(cells) >= 2:
                        lang = cells[0].text.strip()
                        translation = cells[1].text.strip()
                        if lang == "English":  # Focus on English translations
                            translations.append(translation)
            else:
                print("Translations table NOT found!")  # Debug
        else:
            print("Translations section NOT found!")  # Debug

        # Extract examples
        examples_section = soup.find("span", {"id": "Usage_notes"})
        examples = []
        if examples_section:
            examples_list = examples_section.find_next("ul").find_all("li")
            examples = [example.text.strip() for example in examples_list]

        # Save to database
        Vocabulary.objects.create(
            word=word,
            translations="; ".join(translations) if translations else None,
            examples="; ".join(examples) if examples else None
        )

        return JsonResponse({
            "word": word,
            "translations": translations,
            "examples": examples
        })

    return JsonResponse({"error": "Word not found"}, status=404)


def index(request):
    return render(request, 'frontend/index.html')
from django.db import models

# Create your models here.
class Lesson(models.Model):
    title = models.CharField(max_length=200)
    discription = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Vocabulary(models.Model):
    word = models.CharField(max_length=255, unique=True)
    translations = models.TextField(null=True, blank=True)
    examples = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.word
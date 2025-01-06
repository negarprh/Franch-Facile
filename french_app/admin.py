from django.contrib import admin
from .models import Lesson



class LessonAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'discription')

# Register your models here.
admin.site.register(Lesson, LessonAdmin)
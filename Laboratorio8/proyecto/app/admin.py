from django.contrib import admin
from .models import Autor, Libro, Estudiante, Curso

admin.site.register(Autor)
admin.site.register(Libro)
admin.site.register(Estudiante)
admin.site.register(Curso)


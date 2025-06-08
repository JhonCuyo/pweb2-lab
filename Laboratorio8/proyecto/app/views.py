from django.shortcuts import render, get_object_or_404
from .models import Autor, Estudiante, Curso

def libros_de_autor(request, autor_id):
    autor = get_object_or_404(Autor, id=autor_id)
    libros = autor.obtener_libros()
    return render(request, 'app/libros_autor.html', {'autor': autor, 'libros': libros})


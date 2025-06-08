from django.shortcuts import render, get_object_or_404
from .models import Autor, Estudiante, Curso

def libros_de_autor(request, autor_id):
    autor = get_object_or_404(Autor, id=autor_id)
    libros = autor.obtener_libros()
    return render(request, 'app/libros_autor.html', {'autor': autor, 'libros': libros})

def cursos_de_estudiante(request, estudiante_id):
    estudiante = get_object_or_404(Estudiante, id=estudiante_id)
    cursos = estudiante.obtener_cursos()
    return render(request, 'app/cursos_estudiante.html', {'estudiante': estudiante, 'cursos': cursos})
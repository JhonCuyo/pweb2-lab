from django.urls import path
from . import views

urlpatterns = [
    path('autor/<int:autor_id>/', views.libros_de_autor, name='libros_de_autor'),
    path('estudiante/<int:estudiante_id>/', views.cursos_de_estudiante, name='cursos_de_estudiante'),
    path('curso/<int:curso_id>/', views.estudiantes_de_curso, name='estudiantes_de_curso'),
]
from django.shortcuts import render, get_object_or_404
from .models import Autor, Estudiante, Curso
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa

def libros_de_autor(request, autor_id):
    autor = get_object_or_404(Autor, id=autor_id)
    libros = autor.obtener_libros()
    return render(request, 'app/libros_autor.html', {'autor': autor, 'libros': libros})

def cursos_de_estudiante(request, estudiante_id):
    estudiante = get_object_or_404(Estudiante, id=estudiante_id)
    cursos = estudiante.obtener_cursos()
    return render(request, 'app/cursos_estudiante.html', {'estudiante': estudiante, 'cursos': cursos})

def estudiantes_de_curso(request, curso_id):
    curso = get_object_or_404(Curso, id=curso_id)
    estudiantes = curso.obtener_estudiantes()
    return render(request, 'app/estudiantes_curso.html', {'curso': curso, 'estudiantes': estudiantes})

def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html  = template.render(context_dict)
    response = HttpResponse(content_type='application/pdf')
    pisa_status = pisa.CreatePDF(html, dest=response)
    return response

def generar_pdf(request):
    context = {'nombre': 'Jhon'}
    return render_to_pdf('app/pdf.html', context)

def enviar_email(request):
    send_mail(
        'Hola desde Django',
        'Este es un mensaje enviado automáticamente desde tu proyecto.',
        'jcuyocc@unsa.edu.pe', 
        ['sssjohn125@gmail.com'],  
        fail_silently=False,
    )
    return HttpResponse("Correo enviado correctamente.")
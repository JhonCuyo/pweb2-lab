from django.db import models

# Uno a muchos
class Autor(models.Model):
    nombre = models.CharField(max_length=100)

    def obtener_libros(self):
        return self.libro_set.all()

    def tiene_libros(self):
        return self.libro_set.exists()
        
    def __str__(self):
        return self.nombre
    
class Libro(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo

# Muchos a muchos
class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    cursos = models.ManyToManyField('Curso')

    def obtener_cursos(self):
        return self.cursos.all()

    def esta_inscrito_en(self, curso):
        return self.cursos.filter(id=curso.id).exists()
    
    def __str__(self):
        return self.nombre

class Curso(models.Model):
    nombre = models.CharField(max_length=100)

    def obtener_estudiantes(self):
        return self.estudiante_set.all()

    def tiene_estudiantes(self):
        return self.estudiante_set.exists()
    
    def __str__(self):
        return self.nombre
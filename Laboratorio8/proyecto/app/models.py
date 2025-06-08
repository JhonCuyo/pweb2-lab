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

from interpreter import draw
from chessPictures import *
cuadroBlanco=Picture(SQUARE)
cuadroNegro=cuadroBlanco.negative()
join=cuadroBlanco.join(cuadroNegro)
fila1=join.horizontalRepeat(4)
join2=cuadroNegro.join(cuadroBlanco)
fila2=join2.horizontalRepeat(4)
img1=fila2.up(fila1)
imagen=img1.up(img1)
draw(imagen)

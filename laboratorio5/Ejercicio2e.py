from interpreter import draw
from chessPictures import *
cuadroBlanco=Picture(SQUARE)
cuadroNegro=cuadroBlanco.negative()
join=cuadroNegro.join(cuadroBlanco)
draw(join.horizontalRepeat(4))
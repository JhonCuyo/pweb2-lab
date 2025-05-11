from interpreter import draw
from chessPictures import *

caballo1=Picture(KNIGHT)
caballo2=Picture(KNIGHT).negative()
fila1= caballo1.join(caballo2)
fila2= caballo2.join(caballo1)
img= fila2.up(fila1)
draw(img)

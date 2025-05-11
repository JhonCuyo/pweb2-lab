from interpreter import draw
from chessPictures import *

caballo1=Picture(KNIGHT)
caballo2=Picture(KNIGHT).negative()
fila1= caballo1.join(caballo2)
c2=caballo2.verticalMirror()
c1=caballo1.verticalMirror()
fila2= c2.join(c1)
img= fila2.up(fila1)
draw(img)
from interpreter import draw
from chessPictures import *

peon=Picture(PAWN)
peonesBlanco=peon.horizontalRepeat(8)
peonesNegro=peon.negative().horizontalRepeat(8)
caballo=Picture(KNIGHT)
torre=Picture(ROCK)
alfil=Picture(BISHOP)
rey=Picture(KING)
reina=Picture(QUEEN)

fichasB=torre.join(caballo).join(alfil).join(reina).join(rey).join(alfil).join(caballo).join(torre)
fichasN=fichasB.negative()
fichasBlancas=fichasB.up(peonesBlanco)
fichasNegras=peonesNegro.up(fichasN)
cuadroBlanco=Picture(SQUARE)
cuadroNegro=cuadroBlanco.negative()

join1=cuadroBlanco.join(cuadroNegro)
fila1=join1.horizontalRepeat(4)
join2=cuadroNegro.join(cuadroBlanco)
fila2=join2.horizontalRepeat(4)
cuadroFichas=fila2.up(fila1)
cuadroConFichasBlancas=cuadroFichas.under(fichasBlancas)
cuadroConFichasNegras=cuadroFichas.under(fichasNegras)
mitadCuadro= cuadroFichas.up(cuadroFichas)
tabla= cuadroConFichasBlancas.up(mitadCuadro)
tablaAjedrez= tabla.up(cuadroConFichasNegras)
draw(tablaAjedrez)


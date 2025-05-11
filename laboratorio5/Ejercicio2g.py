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
fichasBlanco=torre.join(caballo).join(alfil).join(reina).join(rey).join(alfil).join(caballo).join(torre)
fichasNegro=fichasBlanco.negative()
draw(fichasBlanco.up(fichasNegro))


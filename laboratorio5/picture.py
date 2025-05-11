from colors import *
class Picture:
  def __init__(self, img):
    self.img = img

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = []
    for value in self.img:
      vertical.append(value[::-1])
    return vertical

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    horizontal = self.img[::-1]
    return Picture(horizontal)

  def negative(self):
    """ Devuelve un negativo de la imagen """
    negativo = []
    for fila in self.img:
      filaLista = list(fila) if isinstance(fila, str) else fila
      nuevaFila = [self._invColor(color) for color in filaLista]
      negativo.append("".join(nuevaFila) if isinstance(fila, str) else nuevaFila)
    return Picture(negativo)

  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    unir = []
    for i in range(len(self.img)):
      nuevaFila = self.img[i] + p.img[i]
      unir.append(nuevaFila)
    return Picture(unir)

  def up(self, p):
    arriba= p.img + self.img
    return Picture(arriba)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    abajo= self.img + p.img
    return Picture(abajo)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    repetirImg = []
    for fila in self.img:
      nuevaFila = []
      for i in range(n):
        nuevaFila += fila
      repetirImg.append(nuevaFila)
    return Picture(repetirImg)

  def verticalRepeat(self, n):
    repetirImg = []
    for i in range(n):
      for fila in self.img:
        repetirImg.append(fila)
    return Picture(repetirImg)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)
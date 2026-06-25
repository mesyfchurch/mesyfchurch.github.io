from rembg import remove
from PIL import Image

# Cargamos la imagen original con fondo azul
input_path = '/storage/emulated/0/Pictures/1781037826864.png'
output_path = '/root/mesyf.github.io/images/MESYF-LOGO-transparent.png'

print("Procesando imagen con IA... (esto puede tardar unos momentos)")
input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
print("¡Éxito! Imagen guardada con transparencia real.")

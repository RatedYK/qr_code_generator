import qrcode
import qrcode.image.svg

factory = qrcode.image.svg.SvgPathImage
svg_image = qrcode.make("https://www.youtube.com/watch?v=9bZkp7q19f0", image_factory=factory)

svg_image.save("qr_code.svg")
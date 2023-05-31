import qrcode

# img = qrcode.make('https://www.youtube.com/watch?v=9bZkp7q19f0')
# img.save('qr_code.png')

qr = qrcode.QRCode(version=1, box_size=10, border=3)

qr.add_data("https://www.youtube.com/watch?v=9bZkp7q19f0")
qr.make(fit=True)

img = qr.make_image(fill="black", back_color="white")
img.save('qr_code.png')
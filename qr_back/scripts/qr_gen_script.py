#!/usr/bin/env python3

import qrcode
import sys

url = sys.argv[1]
size = int(sys.argv[2])
# dot_color = sys.argv[3]
# background_color = sys.argv[4]

qr = qrcode.QRCode(version=1, box_size=size, border=3)

def make_qr_code(url):
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save('public/qr_code.png')


make_qr_code(url)



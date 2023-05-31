type QRcodeProps = {
    qrcodePng: string
}

const QRcode = ({qrcodePng} : QRcodeProps) => {
  return (
    <img src={qrcodePng} alt="QR CODE" />
  )
}

export default QRcode
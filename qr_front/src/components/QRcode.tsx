import EnlargeQRcode from "./EnlargeQRcode"
import { useState } from "react"
type QRcodeProps = {
    qrcodePng: string
}

const QRcode = ({qrcodePng} : QRcodeProps) => {
  const [showEnlarge, setShowEnlarge] = useState(false)

  function handleClick() {
    setShowEnlarge(!showEnlarge)
  }

  return (
    <>
      <img onClick={handleClick
      } className="shadow-lg shadow-black rounded" src={qrcodePng} alt="QR CODE" />
      <p className="text-xs text-center">Right click the image <br></br> and click "Save Image As..."</p>
      {showEnlarge && <EnlargeQRcode closeQR={handleClick} qrcodePng={qrcodePng} />}
    </>
  )
}

export default QRcode
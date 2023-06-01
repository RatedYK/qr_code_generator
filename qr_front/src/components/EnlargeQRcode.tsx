type EnlargeQRcodeProps = {
    qrcodePng: string
    closeQR: () => void
}

const EnlargeQRcode = ({qrcodePng, closeQR} : EnlargeQRcodeProps) => {
  return (
    <div className="fixed top-0 h-screen w-screen bg-overlay flex items-center justify-center animate-fade-in" onClick={closeQR}>
        <img className="h-1/2" src={qrcodePng} alt="Large QR Code" />
    </div>
  )
}

export default EnlargeQRcode
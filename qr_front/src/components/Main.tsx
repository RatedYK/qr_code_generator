import {useState} from 'react'
import QRcode from './QRcode'
import LoadPopUp from './LoadPopUp'

const Main = () => {
    const [url, setUrl] = useState('')
    const [size, setSize] = useState(5)
    const [qrcodePng, setQrcodePng] = useState('')
    const [showLoading, setShowLoading] = useState(false)


    // HANDLER FUNCTIONS

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setShowLoading(true)
        await fetchQRcode(url)
        setShowLoading(false)
        setUrl('')
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUrl(e.target.value)
    }

    function handleSizeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSize(parseInt(e.target.value))
    }

    function fetchQRcode(inputUrl: string) {
        fetch('http://localhost:8000/qrcode', {
            method: 'POST',
            body: JSON.stringify({
                url: inputUrl,
                size: size
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.blob())
        .then(blob => {
            const reader = new FileReader()
            reader.onload = () => {
                setQrcodePng(reader.result as string)
            }
            // Read the Blob as Data URL
            reader.readAsDataURL(blob) 
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='flex flex-col items-center gap-5 w-full'>
        {showLoading && <LoadPopUp title='Generating QR Code' message='Please wait' />}
        {qrcodePng ? <QRcode qrcodePng={qrcodePng} /> :  <div></div>}
        <h1 className='text-flex m-6'>Generate your QR Code</h1>
        <form className='flex flex-col gap-5 w-1/2' onSubmit={handleFormSubmit}>
            <input className='border-double border-2 p-1 rounded text-smallFlex' type="text" onChange={handleChange} value={url} placeholder="Enter your text/url here" />
            <input className='border-double border-2 p-1 rounded text-smallFlex' type="number" onChange={handleSizeChange} placeholder="Size (1 - 20)" min="1" max="20" value={size}/>
            <button className='p-5 bg-slate-800 color-white text-white rounded-xl hover:bg-slate-300 hover:text-black hover:scale-110 ease-in duration-300 text-flex' type="submit">Generate</button>
        </form>
    </div>
  )
}

export default Main
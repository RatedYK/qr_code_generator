type LoadPopUpProps = {
    message: string
    title: string
}

const LoadPopUp = ({title, message} : LoadPopUpProps) => {
  return (
    <div className="flex flex-col items-center rounded bg-slate-500 text-white top-36 text-flex p-5 animate-pulse absolute">
        <h1 className="color">{title}...</h1>
        <p className="">{message}</p>
    </div>
  )
}

export default LoadPopUp
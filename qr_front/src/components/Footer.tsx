type FooterProps = {
    name: string
}

const Footer = ({name} : FooterProps) => {
  return (
    <footer className="fixed bottom-2 text-xs">© 2022-2023 {name}</footer>
  )
}

export default Footer
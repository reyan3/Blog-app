import './Footer.css'

const Footer = () => {
  return (
    <footer className='foot-container'>
        <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
    </footer>
  )
}

export default Footer

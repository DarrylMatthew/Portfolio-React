import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo"><a href="#">EV-olution</a></div>
        <ul className='nav-menu'>
            <li><a href="https://www.byd.com/id/car/seal">Models</a></li>
            <li><a href="https://www.byd.com/us/car/han-ev">Explore</a></li>
            <li><a href="https://www.byd.com/us/about-byd">About</a></li>
            <li className='nav-contact'><a href="https://www.byd.com/us/contact-us">Contact</a></li>
        </ul>
    </div>
  )
}

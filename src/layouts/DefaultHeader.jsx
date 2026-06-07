import { Link } from 'react-router-dom'
import NavBar from '../components/layout/Nav'

function DefaultHeader(){
  return (
    <header id="header">
      <h1><Link to="/"></Link></h1>
      <p className="title"><Link to="/">MyStory</Link></p>
      <NavBar />
    </header>
  )
}

export default DefaultHeader;
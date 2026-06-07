import Header from './DefaultHeader';
import Footer from './DefaultFooter';
import { Outlet } from 'react-router-dom'

function DefaultLayout(){
  return (
    <div id="wrapper">
      <Header />
      <div id="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout;
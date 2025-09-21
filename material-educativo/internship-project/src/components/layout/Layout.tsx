import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px', minHeight: '100vh' }}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

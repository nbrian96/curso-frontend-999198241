import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <main style={{ paddingTop: '70px', minHeight: '100vh' }}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

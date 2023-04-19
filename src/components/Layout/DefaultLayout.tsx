import { Link, Outlet } from 'react-router-dom'
import { ROUTES } from '../../utils/constants/routes'

export const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white fixed w-full top-0 left-0">
        <nav className="container mx-auto flex items-center justify-between h-16">
          <Link to={ROUTES.HOME} className="text-xl font-bold">
            Home
          </Link>
        </nav>
      </header>
      <main className="container mx-auto flex-grow px-4 py-8 mt-10">
        <Outlet />
      </main>
    </div>
  )
}

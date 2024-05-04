import { Outlet } from 'react-router-dom'

// Se tivesse algum Header ou Footer ele seria incluido aqui.

const Layout = () => {
	return (
		<main className='App'>
			<Outlet />
		</main>
	)
}

export default Layout

import { Outlet } from 'react-router-dom'
import Header from './Header'

// Se tivesse algum Header ou Footer ele seria incluido aqui.

const Layout = () => {
	return (
		<>
			<Header />
			<main className='App'>
				<Outlet />
			</main>
		</>
	)
}

export default Layout

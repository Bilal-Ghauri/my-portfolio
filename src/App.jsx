import { useState, useEffect, useContext, useCallback } from 'react'
import './App.css'
import Home from './components/Pages/Home'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import ContactUs from './components/Pages/ContactUs'
import { appContext } from './components/context/AppContext'
import MenuContainer from './components/reusable/MenuContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ParticlesJS from './components/reusable/Particles'
import AboutUs from './components/Pages/AboutUs'
import Products from './components/Pages/Products'

function App() {
	const { menuIconColor, open, setOpen, showExpolore, setShowExplore } =
		useContext(appContext)

	return (
		<>
			<ParticlesJS />
			<ToastContainer />
			<div
				className={`menu-icon ${menuIconColor()}`}
				onClick={() => setOpen(!open)}>
				<div className='first'></div>
				<div className='second'></div>
				<div className='third'></div>
			</div>
			<div className='App container-fluid p-0  relative'>
				<MenuContainer />
				<Routes>
					<Route
						path='/'
						element={
							<Home
								showExpolore={showExpolore}
								setShowExplore={setShowExplore}
								open={open}
								setOpen={setOpen}
							/>
						}
					/>
					<Route path='/contact' element={<ContactUs />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/products' element={<Products />} />
				</Routes>
			</div>
		</>
	)
}

export default App

import React, { useContext } from 'react'
import { appContext } from '../context/AppContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Appbar = () => {
	const { open, setOpen, menuIconColor, showExpolore } =
		useContext(appContext)
	const navigate = useNavigate()

	const iconBgColor = () => {
		if (useLocation().pathname == '/') {
			return false
		}
		if (useLocation().pathname == '/contact') {
			return true
		}
		if (useLocation().pathname == '/about') {
			return true
		}
		if (useLocation().pathname == '/products') {
			return true
		}
	}

	return (
		<div className='appbar d-flex py-4 align-items-center  justify-content-between'>
			<div className='logo p-0 ' style={{ cursor: 'pointer' }}>
				<Link to={'/'} style={{ textDecoration: 'none' }}>
					<h1
						className={`${
							open
								? 'main-logo-style-white'
								: iconBgColor() || showExpolore
								? 'main-logo-style-black'
								: 'main-logo-style-white'
						}`}>
						Bilal Ghauri
					</h1>
				</Link>
				{/* <img src="./imgs/logo.png" alt="" className={`p-0 main-logo ${iconBgColor()}`} style={{cursor : 'pointer'}} /> */}
			</div>
			<div
				className={`menu-icon-small ${menuIconColor()}`}
				onClick={() => setOpen(!open)}>
				<div className='first'></div>
				<div className='second'></div>
				<div className='third'></div>
			</div>
		</div>
	)
}

export default Appbar

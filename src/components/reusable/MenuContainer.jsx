import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../context/AppContext'
import Appbar from './Appbar'
import ParticlesJS from './Particles'

const MenuContainer = () => {
	const { open, setOpen, showLinks, setShowLinks } = useContext(appContext)

	useEffect(() => {
		if (open) {
			setTimeout(() => {
				setShowLinks(true)
			}, 500)
		} else {
			setShowLinks(false)
		}
	}, [open])

	return (
		<div
			className={`menu-container ${
				open && 'show'
			} px-3 px-md-5 d-flex flex-column justify-content-between`}>
			<Appbar />
			<div className={` menu-links ${showLinks && 'show'}  text-center`}>
				<Link
					to={'/'}
					onClick={() => {
						setOpen(false)
					}}>
					Home
				</Link>
				<Link to={'/about'} onClick={() => setOpen(false)}>
					About Us
				</Link>
				<Link to={'/products'} onClick={() => setOpen(false)}>
					Products
				</Link>
				<a href='#'>Innovation</a>
				<Link to={'/contact'} onClick={() => setOpen(false)}>
					Contact Us
				</Link>
			</div>
			<div></div>
		</div>
	)
}

export default MenuContainer

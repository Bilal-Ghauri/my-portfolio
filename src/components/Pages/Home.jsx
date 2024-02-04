import React, { useState, useEffect, useCallback, useContext } from 'react'
import ExploreContainer from '../PageComponents/Home/ExploreContainer'
import Appbar from '../reusable/Appbar'
import { appContext } from '../context/AppContext'
import ParticlesJS from '../reusable/Particles'

const Home = () => {
	const { open, setOpen, showExpolore, setShowExplore, menuIconColor } =
		useContext(appContext)

	return (
		<div className='main-container home position-relative'>
			{/* <ParticlesJS /> */}
			<div className=' h-100 mx-3 mx-md-5 pb-4 d-flex flex-column justify-content-between'>
				<Appbar open={open} setOpen={setOpen} />
				<div className='d-flex align-items-center ml-10'>
					<div>
						<h1 className='noto display-3 fw-bold p-0 m-0 heading-adaptive '>
							Bilal Ghauri
						</h1>
						<h2 className='text-white fw-bold p-0 m-0 noto pt-2 pt-md-1'>
							Experienced MERN Stack Devloper.
						</h2>
						<p className='text-white noto heading-para  pt-md-2 pt-2'>
							Transforming your visions into seamless digital
							experiences — Let's build something extraordinary
							together.
							{/* I take pride in contributing to the success of
							leading asset finance and leasing companies
							worldwide. Through innovative and efficient software
							solutions, I empower businesses to navigate the
							digital landscape with confidence. Let's collaborate
							to elevate your technology journey and drive
							sustainable growth. */}
						</p>
					</div>
				</div>

				<div className='d-flex flex-column align-items-center'>
					<button
						className='explore-btn d-flex flex-column justify-content-center align-items-center'
						onClick={() => setShowExplore(true)}>
						EXPLORE
					</button>
				</div>
			</div>
			{/* Explore container shows here */}
			<ExploreContainer showExpolore={showExpolore} />
		</div>
	)
}

export default Home

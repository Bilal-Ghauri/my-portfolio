import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../../context/AppContext'

const ExploreContainer = () => {
	const { showExpolore } = useContext(appContext)
	console.log('showExpolore', showExpolore)
	return (
		<div className={`explore-container ${showExpolore && 'show'}`}>
			<div className=' h-100 mx-3 mx-md-5 py-4 d-flex flex-column justify-content-between'>
				<div className='appbar d-flex align-items-center  justify-content-between'>
					<div className='logo p-0 ' style={{ cursor: 'pointer' }}>
						<Link to={'/'} style={{ textDecoration: 'none' }}>
							<h1
								className={`${
									showExpolore
										? 'main-logo-style-black'
										: 'main-logo-style-white'
								}`}>
								Bilal Ghauri
							</h1>
						</Link>
					</div>
				</div>

				<div className='d-flex align-items-center'>
					<div className='me-md-5'></div>

					<div className='ms-md-5'>
						<h1 className='noto display-3 fw-bold p-0 m-0 heading-adaptive text-black'>
							Digital Frontiers
						</h1>
						<h2 className=' fw-bold p-0 m-0 noto pt-2 pt-md-1 text-black'>
							Thursday February 23, 2023
						</h2>
						<p className=' noto heading-para  pt-md-1 pt-2'>
							2nd Quarterly Un-Audited Financial Statements
							2022-23 are available on this Website
						</p>
					</div>
				</div>

				<div className='d-flex flex-column align-items-center invisible'>
					<button className='explore-btn d-flex flex-column justify-content-center align-items-center'>
						EXPLORE
					</button>
				</div>
			</div>
		</div>
	)
}

export default ExploreContainer

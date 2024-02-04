import React, { useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { appContext } from '../context/AppContext'

const ParticlesJS = () => {
	const { open, showExpolore } = useContext(appContext)

	const linksColors = () => {
		if (open) {
			return '#fff'
		}
		if (showExpolore) {
			return '000'
		}
		if (useLocation().pathname == '/') {
			return '#fff'
		}
		if (useLocation().pathname == '/contact') {
			return '#000'
		}
		if (useLocation().pathname == '/about') {
			return '#000'
		}
		if (useLocation().pathname == '/products') {
			return '#000'
		}
	}

	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine)
	}, [])

	const particlesLoaded = useCallback(async (container) => {}, [])

	return (
		<Particles
			id='tsparticles'
			className='position-fixed'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: 'linear-gradient(to bottom right, #0f1012, #181b90)',
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'grab',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
						grab: {
							distance: 200,
							link_linked: {
								opacity: 0.5,
							},
						},
					},
				},
				particles: {
					color: {
						value: linksColors(),
					},
					links: {
						color: linksColors(),
						distance: 150,
						enable: true,
						opacity: 0.3,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						directions: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 0.8,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 4 },
					},
				},
				detectRetina: true,
			}}
		/>
	)
}

export default ParticlesJS

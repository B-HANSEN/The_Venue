import React, { useState } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

const Pricing = () => {
	const [prices, setPrices] = useState([100, 150, 250]);
	const [positions, setPositions] = useState(['Balcony', 'Medium', 'Star']);
	const [desc, setDesc] = useState([
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Duis aute irure dolor.',
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
		'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
	]);
	const [linkto, setLinkTo] = useState([
		'http://sales/b',
		'http://sales/m',
		'http://sales/s',
	]);
	const [delay, setDelay] = useState([500, 0, 500]);

	const showBoxes = () =>
		prices.map((box, i) => (
			<Zoom delay={delay[i]} key={i}>
				<div className='pricing_item'>
					<div className='pricing_inner_wrapper'>
						<div className='pricing_title'>
							<span>${prices[i]}</span>
							<span>{positions[i]}</span>
						</div>
						<div className='pricing_description'>{desc[i]}</div>
						<div className='pricing_buttons'>
							<MyButton
								text='Purchase'
								bck='#ffa800'
								color='#ffffff'
								link={linkto[i]}
							/>
						</div>
					</div>
				</div>
			</Zoom>
		));

	console.log(setPrices, setPositions, setDesc, setLinkTo, setDelay);

	return (
		<div className='bck_black'>
			<div className='center_wrapper pricing_section'>
				<h2>Pricing</h2>
				<div className='pricing_wrapper'>{showBoxes()}</div>
			</div>
		</div>
	);
};

export default Pricing;

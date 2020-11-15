import React, { useState, useEffect, useCallback } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

const Discount = () => {
	const [state, setState] = useState({
		discountStart: 0,
		discountEnd: 30,
	});

	const porcentage = useCallback(() => {
		if (state.discountStart < state.discountEnd) {
			setState({ ...state, discountStart: state.discountStart + 1 });
		}
	}, [state]);

	useEffect(() => {
		porcentage();
	}, [porcentage]);

	return (
		<div className='center_wrapper'>
			<div className='discount_wrapper'>
				<Fade onReveal={() => porcentage()}>
					<div className='discount_porcentage'>
						<span>{state.discountStart}%</span>
						<span>OFF</span>
					</div>
				</Fade>

				<Slide right>
					<div className='discount_description'>
						<h3>Purchase tickets before 20th June</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<MyButton
							text='Purchase ticket'
							bck='#ffa800'
							color='#ffffff'
							link='http://google.com'
						/>
					</div>
				</Slide>
			</div>
		</div>
	);
};

export default Discount;

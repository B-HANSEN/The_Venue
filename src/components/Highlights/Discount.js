import { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';
import { DISCOUNT } from '../../eventData';

const Discount = () => {
	const [count, setCount] = useState(0);

	// Increments count every 50ms until it reaches DISCOUNT.percentage
	useEffect(() => {
		if (count >= DISCOUNT.percentage) return;
		const timer = setTimeout(() => setCount((c) => c + 1), 50);
		return () => clearTimeout(timer);
	}, [count]);

	return (
		<div className='center_wrapper'>
			<div className='discount_wrapper'>
				<Fade>
					<div className='discount_porcentage'>
						<span>{count}%</span>
						<span>OFF</span>
					</div>
				</Fade>

				<Slide direction='right'>
					<div className='discount_description'>
						<h3>{DISCOUNT.deadlineText}</h3>
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
							link={DISCOUNT.link}
						/>
					</div>
				</Slide>
			</div>
		</div>
	);
};

export default Discount;

import MyButton from '../utils/MyButton';
import { Zoom } from 'react-awesome-reveal';

// Static data — never changes, no need for state
const TICKETS = [
	{
		price: 100,
		position: 'Balcony',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Duis aute irure dolor.',
		link: 'http://sales/b',
		delay: 500,
	},
	{
		price: 150,
		position: 'Medium',
		desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
		link: 'http://sales/m',
		delay: 0,
	},
	{
		price: 250,
		position: 'Star',
		desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
		link: 'http://sales/s',
		delay: 500,
	},
];

const Pricing = () => {
	return (
		<div className='bck_black'>
			<div className='center_wrapper pricing_section'>
				<h2>Pricing</h2>
				<div className='pricing_wrapper'>
					{TICKETS.map((ticket, i) => (
						<Zoom delay={ticket.delay} key={i}>
							<div className='pricing_item'>
								<div className='pricing_inner_wrapper'>
									<div className='pricing_title'>
										<span>${ticket.price}</span>
										<span>{ticket.position}</span>
									</div>
									<div className='pricing_description'>{ticket.desc}</div>
									<div className='pricing_buttons'>
										<MyButton
											text='Purchase'
											bck='#ffa800'
											color='#ffffff'
											link={ticket.link}
										/>
									</div>
								</div>
							</div>
						</Zoom>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pricing;

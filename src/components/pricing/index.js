import MyButton from '../utils/MyButton';
import { Zoom } from 'react-awesome-reveal';
import { TICKETS } from '../../eventData';

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

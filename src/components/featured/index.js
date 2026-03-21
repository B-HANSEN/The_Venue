import Carousel from './Carousel';
import TimeUntil from './TimeUntil';
import { EVENT } from '../../eventData';

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carousel />
			<div className='artist_name'>
				<div className='wrapper'>{EVENT.artist}</div>
			</div>
			<TimeUntil />
		</div>
	);
};

export default Featured;

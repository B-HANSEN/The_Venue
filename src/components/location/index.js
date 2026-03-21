import { EVENT } from '../../eventData';

const Location = () => {
	return (
		<div className='location_wrapper'>
			<iframe
				title='venue'
				src={EVENT.mapsEmbedUrl}
				width='100%'
				height='500px'
				frameBorder='0'
				allowFullScreen
				aria-hidden='false'
				tabIndex='0'
			></iframe>

			<div className='location_tag'>
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;

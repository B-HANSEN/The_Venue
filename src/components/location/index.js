import React from 'react';

const Location = () => {
	return (
		<div className='location_wrapper'>
			<iframe
				title='venue'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59264.83897476167!2d-118.34234276499807!3d34.10155597447344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6a6f62cf3836e2fd!2sHollywood%20Bowl!5e0!3m2!1sen!2ses!4v1605393565910!5m2!1sen!2ses'
				width='100%'
				height='500px'
				frameBorder='0'
				allowFullScreen
				aria-hidden='false'
				tabindex='0'
			></iframe>

			<div className='location_tag'>
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;

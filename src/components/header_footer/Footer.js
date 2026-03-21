import { Fade } from 'react-awesome-reveal';
import { BRAND } from '../../eventData';

const Footer = () => {
	return (
		<footer className='bck_red'>
			<Fade delay={350}>
				<div className='font_righteous footer_logo_venue'>{BRAND.name}</div>
				<div className='footer_copyright'>
					{BRAND.name} {BRAND.copyrightYear}. All rights reserved.
				</div>
			</Fade>
		</footer>
	);
};

export default Footer;

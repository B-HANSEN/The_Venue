import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const slides = [slide_one, slide_two, slide_three];

const Carousel = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

	return (
		<div
			className='carousel_wrapper'
			style={{
				height: `${window.innerHeight}px`,
				overflow: 'hidden',
			}}
		>
			<div ref={emblaRef} style={{ overflow: 'hidden', height: '100%' }}>
				<div style={{ display: 'flex', height: '100%' }}>
					{slides.map((slide, i) => (
						<div
							key={i}
							style={{
								flex: '0 0 100%',
								background: `url(${slide}) center/cover no-repeat`,
								height: `${window.innerHeight}px`,
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;

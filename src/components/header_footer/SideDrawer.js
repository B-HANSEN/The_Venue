import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

const SideDrawer = props => {
	const scrollToElement = element => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -150, // to consider the fixed header
		});
		props.onClose(false);
	};

	return (
		<Drawer
			anchor='right'
			open={props.open}
			onClose={() => props.onClose(false)}
		>
			<List component='nav'>
				<ListItemButton onClick={() => scrollToElement('featured')}>
					Event starts in
				</ListItemButton>
				<ListItemButton onClick={() => scrollToElement('venueNfo')}>
					Venue INFO
				</ListItemButton>
				<ListItemButton onClick={() => scrollToElement('highlights')}>
					Highlights
				</ListItemButton>
				<ListItemButton onClick={() => scrollToElement('pricing')}>
					Pricing
				</ListItemButton>
				<ListItemButton onClick={() => scrollToElement('location')}>
					Location
				</ListItemButton>
			</List>
		</Drawer>
	);
};

export default SideDrawer;

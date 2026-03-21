// Single source of truth for all event-specific content.
// In production, update these values for each new event.
//
// Note: EVENT.date is the real advertised event date and is displayed in the UI.
// The countdown timer in TimeUntil.js uses a rolling deadline strategy instead —
// keeping the counter always live for demo purposes, independent of this date.
// DISCOUNT.deadlineText is also derived from EVENT.date — always 3 months before the event.
export const EVENT = {
	artist: 'Ariana Grande',
	date: '7 December 2026',
	doorsTime: '07.00 pm',
	startTime: '08.30 pm',
	venueName: 'Hollywood Bowl',
	venueStreet: 'N Highland Ave',
	venueCity: 'Los Angeles, CA',
	mapsEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59264.83897476167!2d-118.34234276499807!3d34.10155597447344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6a6f62cf3836e2fd!2sHollywood%20Bowl!5e0!3m2!1sen!2ses!4v1605393565910!5m2!1sen!2ses',
};

const ticketDeadline = (() => {
	const d = new Date(EVENT.date);
	d.setMonth(d.getMonth() - 3);
	return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
})();

export const DISCOUNT = {
	percentage: 30,
	deadlineText: `Purchase tickets before ${ticketDeadline}`,
	link: 'http://google.com',
};

export const TICKETS = [
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

export const BRAND = {
	name: 'The Venue',
	copyrightYear: 2020,
};

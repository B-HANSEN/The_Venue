import { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';

// localStorage key for persisting the deadline across sessions
const DEADLINE_KEY = 'venue_deadline';

// Returns the current deadline from localStorage.
// First visit: sets deadline to the 1st of the month, 7 months from now.
// On the 1st of the month before the deadline: rolls it forward 6 months.
const getOrUpdateDeadline = () => {
	const stored = localStorage.getItem(DEADLINE_KEY);
	const now = new Date();

	// No deadline stored yet — initialise to 7 months ahead
	if (!stored) {
		const initial = new Date(
			now.getFullYear(),
			now.getMonth() + 7,
			1
		).toISOString();
		localStorage.setItem(DEADLINE_KEY, initial);
		return initial;
	}

	// Trigger day = the 1st of the month immediately before the deadline
	const deadline = new Date(stored);
	const triggerMonth = new Date(
		deadline.getFullYear(),
		deadline.getMonth() - 1,
		1
	);
	const isTriggerDay =
		now.getDate() === 1 &&
		now.getFullYear() === triggerMonth.getFullYear() &&
		now.getMonth() === triggerMonth.getMonth();

	// Roll deadline forward 6 months from today
	if (isTriggerDay) {
		const updated = new Date(
			now.getFullYear(),
			now.getMonth() + 6,
			1
		).toISOString();
		localStorage.setItem(DEADLINE_KEY, updated);
		return updated;
	}

	return stored;
};

const TimeUntil = () => {
	// Deadline is resolved once on mount; never re-runs unless the page reloads
	const [deadline] = useState(getOrUpdateDeadline);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	// Calculates remaining time and updates state; logs if the event has passed
	const getTimeUntil = (deadline) => {
		const time = new Date(deadline).getTime() - Date.now();
		if (time < 0) {
			return;
		} else {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));

			setDays(days);
			setHours(hours);
			setMinutes(minutes);
			setSeconds(seconds);
		}
	};

	// Ticks every second to keep the countdown live; clears on unmount
	useEffect(() => {
		const interval = setInterval(() => getTimeUntil(deadline), 1000);
		return () => clearInterval(interval);
	}, [deadline]);

	return (
		<Slide direction='left' delay={1000}>
			<div className='countdown_wrapper'>
				<div className='countdown_top'>Event starts in</div>
				<div className='countdown_bottom'>
					<div className='countdown_item'>
						<div className='countdown_time'>{days}</div>
						<div className='countdown_tag'>Days</div>
					</div>
					<div className='countdown_item'>
						<div className='countdown_time'>{hours}</div>
						<div className='countdown_tag'>HRS</div>
					</div>
					<div className='countdown_item'>
						<div className='countdown_time'>{minutes}</div>
						<div className='countdown_tag'>MIN</div>
					</div>
					<div className='countdown_item'>
						<div className='countdown_time'>{seconds}</div>
						<div className='countdown_tag'>SEC</div>
					</div>
				</div>
			</div>
		</Slide>
	);
};

export default TimeUntil;

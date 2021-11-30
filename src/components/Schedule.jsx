// import { Fragment } from 'react';
import Link from './Link'
import Collapsible from './Collapsible'
import { schedule } from '../utils/data.js'
import { getCurrentIsoDate } from '../utils/datetime.js'
import './schedule.css'

const Schedule = () => {
	const today = getCurrentIsoDate()
	return (
		<Collapsible title={'Schema'}>
		<section>
			<h3> Schema </h3>
			<div className="schedule-grid">
			{schedule.map(({ date, time, theme, materials }) => (
				<div key={date} className={dateClass(date, today) + ' schedule-row'}>
					<div>{date}</div>
					<div>{time}</div>
					<div>{theme}</div>
					<div>{materials.map(({ url, text }) => <Link key={url} url={url} text={text} />)}</div>
				</div>
			))}
			</div>
		</section>
		</Collapsible>
	)
}

function dateClass(date, today) {
	if( date < today ) return 'past'
	else if( date > today ) return 'future'
	return 'present'
}

export default Schedule

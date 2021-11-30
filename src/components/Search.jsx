import { useState } from 'react'
import Link from './Link'
import { resources, schedule } from '../utils/data.js'

const Search = () => {
	const [search, setSearch] = useState('')

	function match(xs, y) { return xs.toLowerCase().includes(y.toLowerCase()) }
	function matchLinks(links, s) {
		return links.filter( ({url, text}) => match(url, s) || match(text, s) ).length > 0
	}

	let resultsR = search ? resources.filter(({url,text}) => match(url, search) || match(text, search)) : [];
	let resultsS = search ? schedule.filter( ({date,time,theme,materials}) => match(date, search) || match(time, search) || match(theme, search) || matchLinks(materials, search)) : [];

	let jsxR = resultsR?.map(({ url, text }) => (
		<li key={url}>
		<Link url={url} text={text} />
		</li>
	))
	let jsxS = resultsS?.map(({ date, time, theme, materials }) => (
		<div key={date} className="schedule-row">
			<div>{date}</div>
			<div>{time}</div>
			<div>{theme}</div>
			<div>{materials.map(({ url, text }) => <Link key={url} url={url} text={text} />)}</div>
		</div>
	))

	return (
		<div className="search">
			<label> Sök efter länk eller text. </label>
			<input type="text" value={search} onChange={e => setSearch(e.target.value)} />
			{search ? (
				<div>
					<h3> Sökträffar resurser </h3>
					{jsxR.length > 0 ? jsxR : 'Inga'}
					<h3> Sökträffar schema </h3>
					{jsxS.length > 0 ? jsxS : 'Inga'}
				</div>
			) : 'Börja skriv för att söka.'}
		</div>
	)
}

export default Search

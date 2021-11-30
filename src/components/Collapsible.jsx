import { useState } from 'react'
import CollapseButton from './CollapseButton'

const Collapsible = ({ title, children, initialShow=true }) => {
	const [show, setShow] = useState(initialShow)

	return (
		<>
		<h2>
			<CollapseButton
				initialShow={show}
				onClick={newState => setShow(newState)}/>
			{title}
		</h2>
		{show ? children : null}
		</>
	)
}

export default Collapsible

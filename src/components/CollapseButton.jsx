import { useState } from 'react'

const CollapseButton = ({ initialShow = true, onClick }) => {
	const [show, setShow] = useState(initialShow)

	function handleClick() {
		setShow(!show)
		onClick(!show)
	}

	return (
		<button
			className='collapse'
			onClick={handleClick}>
			{show ? '-' : '+'}
		</button>
	)
}

export default CollapseButton

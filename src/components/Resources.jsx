import Link from './Link'
import Collapsible from './Collapsible'
import { resources } from '../utils/data.js'


const Resources = () => (
	<Collapsible title={'Resurser'}>
	<section>
		<ul>
			{resources.map(({ url, text }) => (
				<li key={url}>
				<Link url={url} text={text} />
				</li>
			))}
		</ul>
	</section>
	</Collapsible>
)


export default Resources

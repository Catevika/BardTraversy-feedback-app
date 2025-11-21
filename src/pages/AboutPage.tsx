import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>About this project</h1>
				<p>This is a React App to leave feedback for a product or a service</p>
				<p>Original from Brad Traversy 2022</p>
				<p>Updated to latest versions of packages by <a href='https://github.com/Catevika'>Catevika</a> 2025</p>
				<p>Version: 2.0.0</p>
				<p>
					<Link to='/'>Back to home</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;

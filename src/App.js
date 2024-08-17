import logo from './moon.png';
import './App.css';

const App = () => {
	const imageStyle = {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	};

	return (
		<div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
			<img src={logo} alt='Description' style={imageStyle} />
		</div>
	);
};

export default App;

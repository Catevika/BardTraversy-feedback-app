function Header({ text = 'Feedback UI', bgColor = 'rgba(0,0,0,0.4)', textColor = '#ff6a95' }: { text?: string; bgColor?: string; textColor?: string; }) {
	const headerstyles = {
		backgroundColor: bgColor,
		color: textColor
	};

	return (
		<header style={headerstyles}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
}

export default Header;

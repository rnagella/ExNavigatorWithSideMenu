// import code
let React = require('react-native');
let {
	View,
	Text,
	StyleSheet
} = React;

// create component
let Home = React.createClass({
	render: function () {
		return <View style={[styles.conatiner]}>
			<View>
				<Text style={[styles.text]}
					onPress={() =>{
						console.log('Take me to About Us page.');
						let AboutUs = require('../Router').AboutUs();
						this.props.navigator.push(AboutUs);
					}}>
					Home - Take me to AboutUs
				</Text>
			</View>
		</View>
	}
});

// styles
let styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		
		justifyContent: 'center',
    	alignItems: 'center',
	},
	text: {
		fontSize: 20
	}
});

// export module
module.exports = Home;

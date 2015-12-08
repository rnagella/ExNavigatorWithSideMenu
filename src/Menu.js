// import code
let React = require('react-native');
let Dimensions = require('Dimensions');
let window = Dimensions.get('window');
let {
	View,
	Text,
	StyleSheet
} = React;

// create component
let Menu = React.createClass({
	render: function () {
		return <View style={[styles.conatiner]}>
			<View>
				<Text style={[styles.text]}
				onPress={() => {
					console.log('Menu-Take me to About Us page text clicked');
					let AboutUs = require('../Router').AboutUs();
					this.props.navigator.push(AboutUs);
				}}>
					Menu - Take me to About Us page 
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
		backgroundColor: 'gray',
		fontSize: 20,
		top: window.height/2,
		left: 10,
		width: window.width/3

	}
});

// export module
module.exports = Menu;

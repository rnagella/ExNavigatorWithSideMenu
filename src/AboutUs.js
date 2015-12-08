// import code
let React = require('react-native');
let {
	View,
	Text,
	StyleSheet
} = React;

// create component
let AboutUs = React.createClass({
	render: function () {
		return <View style={[styles.conatiner]}>
			<View>
				<Text style={[styles.text]}>
					AboutUs
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
module.exports = AboutUs;

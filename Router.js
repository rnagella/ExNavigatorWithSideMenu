let React = require('react-native');
import ExNavigator from '@exponent/react-native-navigator';

// Define router for each view.
let Router = {
	Menu() {
		return {
			getSceneClass() {
				return require('./src/Menu');
			},
			getTitle() {
				return 'Menu';
			}
		}
	},
	AboutUs() {
		return {
			getSceneClass() {
				return require('./src/AboutUs')
			},
			getTitle() {
				return 'AboutUs';
			}
		}
	},
	Home() {
		return {
			getSceneClass() {
				return require('./src/Home');
			},
			getTitle() {
				return 'Home';
			},
			configureScene() {
				return ExNavigator.SceneConfigs.FromTheRight;
			}
		}
	}
};

// export router
module.exports = Router;
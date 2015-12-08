// import code
let React = require('react-native');
// https://github.com/react-native-fellowship/react-native-side-menu.git
let SideMenu = require('react-native-side-menu');
let {
  View,
  Text,
  StyleSheet,
  AppRegistry
} = React;
// @exponent: ExNavigator
// https://github.com/exponentjs/ex-navigator.git
import ExNavigator from '@exponent/react-native-navigator';

let Router = require('./Router');
let Menu = require('./src/Menu');

// create component
let ExNavigatorWithSideMenu = React.createClass({
  render: function () {
    let Menu = require('./src/Menu');
    return (
      <SideMenu menu={<Menu/>}>
        <ExNavigator
          initialRoute={Router.Home()}
          style={[{flex: 1}]}
          navigator={navigator}
          sceneStyle={[{paddingTop: 64}]}
        ExNavigator/>
      </SideMenu>
    );
  }
});

//  StyleSheet
let styles = StyleSheet.create({
});
// Register component, one per application.
AppRegistry.registerComponent('ExNavigatorWithSideMenu', () => ExNavigatorWithSideMenu);

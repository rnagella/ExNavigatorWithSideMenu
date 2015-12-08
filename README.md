# ExNavigatorWithSideMenu

this.props.navigator.push method available to Views that are pushed to ExNavigator or to the views that set via initialRoute. 

Can we able to access this.props.navigator.push property, if the view is not either of the above two options. for ex: 
I have this SideMenu with a Text and onPress of this Text I would like to push the View to ExNavigator. But, this.props.navigator.push method is not available in this context because this scence is not rendered using ExNavigator.

Is there a way to access this.props.navigator.push from non ExNavigator Views?

Note: Please, swipe Home screen to see the side menu.

Ref: 
SideMenu: https://github.com/react-native-fellowship/react-native-side-menu.git
ExNavigator: https://github.com/exponentjs/ex-navigator.git

import React from 'react';
import { View, Text } from 'react-native';

class Test extends React.Component {
    render() {
	    return <View style={{
		    flex: 1,
		    backgroundColor: 'red',
		    alignItems: 'center',
		    justifyContent: 'center'
		}}>
			<Text onPress={() => this.props.push(TestPage)}>
				Go to Test Page
			</Text>
		</View>;
    }
}

class TestPage extends React.Component {
    render() {
	    return <View style={{
		    flex: 1,
		    backgroundColor: 'blue',
		    alignItems: 'center',
		    justifyContent: 'center'
		}}>
			<Text onPress={() => this.props.pop()}>
				Go back to Test
			</Text>
		</View>;
    }
}

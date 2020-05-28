import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = () => {
return (
    <View style={Styles.spinner}>
<ActivityIndicator size={'large'}/>
</View>
);
}

const Styles = StyleSheet.create({
spinner:{
flex:1,
justifyContent:'center',
alignContent:'center'
}
});
export {spinner}
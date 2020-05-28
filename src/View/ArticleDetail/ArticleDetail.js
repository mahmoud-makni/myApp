// Components/ArticleDetail.js
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class ArticleDetail extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text> ArticleDetail</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default ArticleDetail;
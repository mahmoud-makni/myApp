
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import flatListData from '../../data/flatListData';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

const FlatListItem = (props) => {
    console.log('Notif Props:: ', props)
    const navigation = useNavigation()

    return (        
        <TouchableOpacity style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Details', {key: props.item.key})}>
        <View style={{
            flex: 1,
            flexDirection:'column',                                
        }}>            
            <View style={{
                    flex: 1,
                    flexDirection:'row',
                    // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                    backgroundColor: '#FFFFFF'
            }}>            
            
                <Image 
                    source={{uri: props.item.image}}
                    style={{width: 80, height: 80, margin: 5,borderRadius: 80,}}
                >

                </Image>
                <View style={{
                        flex: 1,
                        flexDirection:'column',   
                        height: 100                 
                    }}>            
                
                        <Text style={styles.flatListItem}>{props.item.notification}</Text>
                </View>              
            </View>
            <View style={{
                height: 1,
                backgroundColor:'white'                            
            }}>
        
            </View>
      </View> 
      </TouchableOpacity>
    )
}

class FlatListItemClass extends Component {



    DetailArt = (item) => {
        this.props.navigation.navigate("Details", {key: item.key})
        console.log('ITEM:: ', item)
   
      
    }
    render() {          
        return (        


            <TouchableOpacity style={{ flex: 1, flexDirection: 'column' }} onPress={() => this.DetailArt(this.props.item)}>
            <View style={{
                flex: 1,
                flexDirection:'column',                                
            }}>            
                <View style={{
                        flex: 1,
                        flexDirection:'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                        backgroundColor: '#04D1FF'
                }}>            
                
                    <Image 
                        source={{uri: this.props.item.image}}
                        style={{width: 80, height: 80, margin: 5,borderRadius: 80,}}
                    >

                    </Image>
                    <View style={{
                            flex: 1,
                            flexDirection:'column',   
                            height: 100                 
                        }}>            
                    
                            <Text style={styles.flatListItem}>{this.props.item.notification}</Text>
                    </View>              
                </View>
                <View style={{
                    height: 1,
                    backgroundColor:'white'                            
                }}>
            
                </View>
          </View> 
          </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: '#212424',
        padding: 8,
        fontSize: 16,  
    }
});

class BasicFlatList extends Component {
    render() {
      return (
        <View style={{flex: 1, marginTop: 0}}>
           <Text style={{ left:0, color: '#EA66B1', fontSize: 25,fontWeight: 'bold' }} >Notification</Text>

            <FlatList 
                data={this.props.flatData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
        </View>
      );
    }
}

const mapStateToProps = state => {
    return {
        flatData: state.Login.flatListData
    }
}

export default connect(mapStateToProps)(BasicFlatList)
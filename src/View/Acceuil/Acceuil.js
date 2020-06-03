import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import flatListData from '../../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from '../../modals/AddModal';
import EditModal from '../../modals/EditModal';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

class FlatListItemClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }




    DetailArt = (item) => {
        // this.props.navigation.navigate("ArticleDetail");
        // this.props.parentFlatList.props.secondPropNavigation.navigate("Details", {key: item.key})
        this.props.navigation.navigate("Details", {key: item.key})
        console.log('ITEM:: ', item)

    }



    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }


    render() {
        // console.log('secondPropNavigation: ', Object.keys(this.props))
        // console.log('this.props.parentFlatList.props.secondPropNavigation: ', this.props.parentFlatList.props.secondPropNavigation)
        // console.log('this.props.index: ', this.props.index)
        // console.log('Accueil Props:t: ', this.props)
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        // alert("Update");
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    }, text: 'Modifier', type: 'primary', backgroundColor:'#00BFFF'
                },

                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert('Attentions', 'Cette article est confirmer de vendu!!',
                            [
                                { text: 'Non', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Oui', onPress: () => {
                                        this.props.dispatch({type: 'ARTICLE_SALE'})
                                        flatListData.splice(this.props.index, 1); 
                                        //Refresh FlatList ! 
                                        this.props.parentFlatList.refreshFlatList(deletingRow);

                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Vendu', type: 'delete',backgroundColor:'#02FC3A'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };


        return (

            <Swipeout {...swipeSettings}  >
                <TouchableOpacity style={{ flex: 1, flexDirection: 'column' }} onPress={() => this.DetailArt(this.props.item)}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFFFFF' }}>
                        <Image source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 150, height: 100, margin: 5 }}>

                        </Image >
                        <View style={{ flex: 1, flexDirection: 'column', height: 100 }}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                            <Text style={styles.flatListItemP}>Prix:{this.props.item.PrixClient}</Text>
                        </View>
                    </View>
                    <View style={{ height: 2, backgroundColor: '#F187DF' }}>

                    </View>
                </TouchableOpacity>
            </Swipeout>);
    }
}

const FlatListItem = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return <FlatListItemClass {...props} navigation={navigation} dispatch={dispatch} />
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'gray',
        padding: 9,
        left: 15,
        fontSize: 15,
    },
    flatListItemP: {
        color: '#02FC3A',
        padding: 9,
        left: 25,
        top: -12,
        fontSize: 19,
    }
});


export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }


    _pass = (rowId) => {
        console.log("le id de article " + rowId)
    }





    render() {
        return (
            <View style={{ flex: 1, marginTop: 5 }} >
                <View>
                    <TextInput style={{ width: 410, height: 40, top: -3, backgroundColor: '#E1D5D5', borderRadius: 10, }} placeholder="   Rechercher" /></View>
                <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: 64 }}>
                    <Text style={{ left: -30, color: '#EA66B1', fontSize: 25,fontWeight: 'bold' }} >LISTE DES ARTICLES</Text>
                    <TouchableHighlight style={{ marginRight: 10 }} underlayColor='tomato' onPress={this._onPressAdd}  >
                        <Image style={{ width: 35, height: 35 }}
                            source={require('../../icons/icons-add.png')} />
                    </TouchableHighlight>

                </View>
                <FlatList ref={"flatList"}
                    data={flatListData}
                    renderItem={({ item, index }) => {

                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>
                            </FlatListItem>);
                    }}
                >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this} ></AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}> </EditModal>
            </View>
        );
    }
}
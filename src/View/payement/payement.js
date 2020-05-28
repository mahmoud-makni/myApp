import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight} from 'react-native';
const DATA = [
  {
    id: 1,
    name: 'Mahmoud',
    Article: 'Veste cuire',
    Prix : '100DT',
    Prixgagner :'45DT',
    Etat:'1',
  },
  { id: 2,
    name: 'Amal',
    Article: 'Pantalon',
    Prix: '60DT',
    Prixgagner :'15DT',
    Etat:'0',
  },
  { id: 3,
    name: 'Mohamed',
    Article: 'Sac',
    Prix :'40DT',
    Prixgagner :'10DT',
    Etat:'0',
  },
  { id: 4,
    name: 'Najeh',
    Article: 'Chemise',
    Prix :'30DT',
    Prixgagner :'5DT' ,
    Etat:'1',
  },

    { id:5 ,
      name: 'Eya',
      Article: 'Chemise',
      Prix :'30DT',
      Prixgagner :'5DT' ,
      Etat :'1',
    
    },
      { id:6 ,
        name: 'Ameni',
        Article: 'Chemise',
        Prix :'30DT',
        Prixgagner :'5DT' ,
        Etat:'0',
      },
        { id:7 ,
          name: 'Mariem',
          Article: 'Chemise',
          Prix :'30DT',
          Prixgagner :'5DT' ,
          Etat:'1',
        
        }, ]
function payement(props) {
  return (
    <View style={styles.MainContainer}>
    <Text style={{left:0,color:'#EA66B1',fontSize:22}}>Payement des factures</Text>

               <Text style={{left:80,top:5,color:'#454545',fontSize:13}}>Somme des factures : 200DT </Text>
               <Text style={{left:80,top:5,color:'#454545',fontSize:13}}>Somme des ganger : 75DT</Text>

           <FlatList
             data={DATA}
             renderItem={({ item }) => (
<View style={{
             elevation: 5, //hedhi ma temchych aala emulateur kn aala tel
             height: '5%',
             padding:'8%'  }}>
    <Text>{item.name}{'\t'}{item.Article}{'\t'} {item.Prix} {'\t'}{item.Prixgagner}{'\t'}{item.Etat} </Text>
 </View>
         )}
 keyExtractor={item => item.id.toString()}  />
</View>)
}
const styles = StyleSheet.create({
MainContainer: {
flex: 1,
backgroundColor: '#FFFFFF', },
notification: {
fontSize: 14,
left: 0,
margin: 10,
top: 20,
color: "#999999",
textAlign: "center",
position: "absolute"  },
S:{flex: 1,
  backgroundColor: '#FFFFFF',

},
Somm1:{
  fontSize: 25,
},
Somm2:{
  fontSize: 25,

}
});

export default payement;

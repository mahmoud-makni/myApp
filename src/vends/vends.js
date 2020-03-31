import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image} from 'react-native';
export default class Vends extends Component {
  render() {
    return (
    <View style={styles.MainContainer}>
    <Text style={styles.vends}>Je Vends!</Text>
    <Text style={styles.Annuler}>ANNULER</Text>
    <Text style={styles.photo}>photos</Text>
    <Text style={styles.Titre}>Titre</Text>
    <Text style={styles.Description}>Description</Text>
    <Text style={styles.Detail}>Détails</Text>
    <Text style={styles.cat}>Catégorie</Text>
    <Text style={styles.coul}>Couleur</Text>
    <Text style={styles.etat}>Etat</Text>
    <Text style={styles.Prix1}>Prix client</Text> 
    <TextInput style={styles.Prix11} placeholder="Ex99.900"/>
    <Text style={styles.Prix2}>Prix Commerciale</Text> 
    <TextInput style={styles.Prix22} placeholder="Ex99.900"/>
    <Text style={styles.text}>(Ces information te seront demandées uniquement
 la première fois et resteront privées)</Text>
    <Text style={styles.Numero}>Numéro</Text>
    <TextInput style={styles.Numero1} placeholder="Ex:20136..."/>
    <Text style={styles.Email}>Email</Text> 
    <TextInput style={styles.Email1} placeholder="Ex:MandM@gmail.com"/>
    <Text style={styles.Adress}>Adress</Text>
    <TextInput style={styles.Adress1} placeholder="Ex:Sfax,Tunisie"/>
    <View style={styles.fixToText}>
        <Button color="#EA66B1" title="JE VENDS" > </Button>
 </View>

    </View>);

  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
   vends: {
    color:"#EA66B1",
    fontSize: 22,
    left:5,
    margin: 10,
   },
   Annuler:{
    color:"#FB1129",
    fontSize: 22,
    left:240,
    margin: 10,
    top:-45,
   },
   photo:{
    color:"#57494B",
    fontSize: 16,
    left:15,
    margin: 10,
    top:-55,
   },
   Titre:
   {color:"#57494B",
   fontSize: 16,
   left:15,
   margin: 10,
   top:-55,
   }, 
  
   Description:{
    color:"#57494B",
    fontSize: 16,
    left:15,
    margin: 10,
    top:-55,
   



   },
   Detail:{
   color:"#EA66B1",
   fontSize: 20,
   left:25,
   margin: 10,
   top:-55,
   },
     cat:{
    color:"#1D04F9",
    fontSize: 16,
    left:15,
    margin: 10,
    top:-55,
     },
    coul  :{
    color:"#1D04F9",
        fontSize: 16,
        left:15,
        margin: 10,
        top:-55,
         },

    etat :{
            color:"#1D04F9",
            fontSize: 16,
            left:15,
            margin: 10,
            top:-55,
             },
             Prix1:{
                color:"#57494B",
                fontSize: 16,
                left:32,
                margin: 10,
                top:-55,

             },
            Prix11:{
                width: 100,
                height: 30,
                backgroundColor: "#FFFFFF",
                borderRadius: 250,
                marginTop: -85,
                marginLeft: 170,


            },

            Prix2:{
                color:"#57494B",
                fontSize: 16,
                left:32,
                margin: 10,
                top:0,
             },
            Prix22:{
                width: 100,
                height: 30,
                backgroundColor: "#FFFFFF",
                borderRadius: 250,
                marginTop: -35,
                marginLeft: 170,
            },
           text:{
            color:"#FB1129",
            fontSize: 14,
            left:5,
           },


           Numero:{
            color:"#00FF90",
            fontSize: 14,
            left:5,
            margin: 10,
           },
           Numero1:{
            width: 100,
            height: 30,
            backgroundColor: "#FFFFFF",
            borderRadius: 250,
            marginLeft:80,
            marginTop:-35,

           },
           Email:{
            color:"#00FF90",
            fontSize: 14,
            left:5,
            margin: 10,
           },
           Email1:{
            width: 180,
            height: 30,
            backgroundColor: "#FFFFFF",
            borderRadius: 250,
            marginLeft:80,
            marginTop:-35,
           },
           Adress:{
            color:"#00FF90",
            fontSize: 14,
            left:5,
            margin: 10,
           },
           Adress1:{
            width: 180,
            height: 30,
            backgroundColor: "#FFFFFF",
            borderRadius: 250,
            marginLeft:80,
            marginTop:-35,
           },
           fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 20,
            left: 140,
                height: 35,
          },
});  
import { StyleSheet, Text, View , Dimensions } from 'react-native'


 const styles = StyleSheet.create({
     head:{
         fontSize:20,
         marginLeft:10,
         fontWeight:'bold',
         color:"#127cc0"

     },
     innerHead:{
        fontSize:18,
        fontWeight:'bold',
        color:"#127cc0",
        borderBottomWidth:4,
     },
     input:{
         width: Dimensions.get('window').width-20,
         marginTop:20,
         
     },
     button:{
         width: Dimensions.get('window').width-20,
        backgroundColor:"#127cc0",
        margin: 20,
        alignItems:'center',
        borderRadius:50,
    },
    buttonText:{
        fontSize:20,
        marginVertical:10,
        color:'white',

    },
 })

 export default styles;

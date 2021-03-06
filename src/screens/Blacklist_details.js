import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import ViewProfileCard from "../shared/ViewProfileCard";
import BookNow from "../shared/BookNow";
import Complaints from "../Icons/complaints";
import Faqs from "../Icons/Faqs";
import Reviews from "../Icons/Reviews";



export default function App({navigation}){

return (

    <SafeAreaView style = {styles.container}> 

    <ScrollView showsVerticalScrollIndicator = {false}> 
    
    {/* <View style={styles.titleBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={30} color="#52575D"></Ionicons>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Ionicons name="md-menu" size={30} color="#52575D"></Ionicons>
                    </TouchableOpacity>
    </View> */}

    <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("../images/PP1.png")} style={styles.image} resizeMode="center"></Image>
                    </View>

                  
                    
    </View>

    <View style={styles.infoContainer}>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 40 }]}>Saad</Text>
        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Electrican</Text>
    </View>


        


    <View style = {{flexDirection:'row', marginLeft:8, marginTop:8}}>

           




            {/* </Button> */}
    </View>

    
    </ScrollView>





    </SafeAreaView>    



)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: 'space-evenly'
        
    },
    text: {
        // fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: 300,
        width: 200
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },

    ProfilesubText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500",
        marginLeft:40,
        marginTop:8,

    },

    ProfilesubTextR: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500",
        marginLeft:38,
        marginTop:8,

    },
    ProfilesubTextL: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500",
        marginLeft:35,
        marginTop:8,

    },
    ProfilesubTextS: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500",
        marginLeft:45,
        marginTop:8,

    },
    ProfilesubTextB: {
        fontSize: 17,
        color: "#ffff",
        textTransform: "uppercase",
        // fontWeight: 'bold',
        marginLeft:24,
        marginTop:32,


    }
    ,
    Profiletext: {
        // fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    profileImage: {
        marginTop: 30,
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 40,
        width: 40,
        height: 40,
        borderRadius: 20,
        
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 35,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 0
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 14
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});
import React, { Component,useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import SignupSVG from '../Icons/SignupSVG'
import {Picker} from '@react-native-picker/picker';
import "firebase/firestore";

import firebase from "./firebase";
export default class ClientSignup extends Component {
      
constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmpassword: "",
      email: "",
      city: "",
      province: "",
      username: "",
      colony: "",
      SQ: "",
      phonenumber: "",
      hourlyRate : "",
      securityanswer: "",
      workCategory : "",


    };
    this.data_black = []
    this.check = 1
  }

  processPress (){

    firebase
      .database()
      .ref('service_providers')
      .push()
      .set(this.state) 

}

myfun(){
 

  if (this.state.password != "" && this.state.confirmpassword != "" && 
  this.state.email != "" && this.state.city != "" &&
  this.state.province != "" && this.state.username != "" && 
  this.state.colony != "" && this.state.SQ != ""&& 
  this.state.phonenumber != "" && this.state.securityanswer != "" && this.state.hourlyRate != "")
  {

    firebase
    .database()
    .ref("/per_blacklist")
    .on("value", snapshot => {
        const data = snapshot.val()
        this.data_black = Object.values(data)})
  
  for (let i = 0; i < this.data_black.length; i++) {
    const element = this.data_black[i];
    if(element.email == this.state.email)
    {
      this.check = 1

    }
  }
}
    else{
      alert("Make sure all the fileds are filled.")
      return;
    }
    if(this.check == 1){
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        this.processPress()
        this.props.navigation.navigate('SPLogin')
      })
      .catch((error) => {
          alert(error)
  });

    }
    else{
      alert("User is blacklisted by the admin.")
    }



}

	render() {
		return(
      <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator = {false}>
			
        <View>
        <Text style={styles.textContainer0}>Register With Us!</Text>
        </View>
        <SignupSVG style = {styles.SignupSVG}/>
        <View style = {styles.signuptextContainer}>
        <TextInput style={styles.inputBox}  
              placeholder="Email Address"
              placeholderTextColor = "rgba(0,0,0,0.4)"
            onChangeText={(value) => this.setState({email: value})}
              value={this.state.email}
              
            
              />
              <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "rgba(0,0,0,0.4)"
            //   ref={(input) => this.state.password = input}
                onChangeText={(value) => this.setState({password: value})}
                value={this.state.password}

              />
              <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Confirm Password"
                secureTextEntry={true}
                placeholderTextColor = "rgba(0,0,0,0.4)"
            //   ref={(input) => this.state.password = input}
                onChangeText={(value) => this.setState({confirmpassword: value})}
                value={this.state.confirmpassword}
              />
        <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="User Name"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(value) => this.setState({username: value})}
              value={this.state.username}
            
              />
          
              {/* <Button 
                onPress = {this.dashboard}
                title = "Sign Up"

              /> */}
              <TextInput style={styles.inputBox}  
              placeholder="Phone Number"
              placeholderTextColor = "rgba(0,0,0,0.4)"
            onChangeText={(value) => this.setState({phonenumber: value})}
              value={this.state.phonenumber}
              />
              <TextInput style={styles.inputBox}  
              placeholder="Hourly Work Rate (PKR)"
              placeholderTextColor = "rgba(0,0,0,0.4)"
            onChangeText={(value) => this.setState({hourlyRate: value})}
              value={this.state.hourlyRate}
              />
              <View style = {styles.inputBox6}>

              <Picker style = {styles.picker2}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ workCategory: itemValue })}} >
                  <Picker.Item label="Select Work Category" value="" />
                  <Picker.Item label="Electrician" value="Electrician" />
                  <Picker.Item label="Plumber" value="Plumber" />
                  <Picker.Item label="Labor" value="Labor" />
                  <Picker.Item label="Mechanic" value="Mechanic" />
                  <Picker.Item label="Car Washer" value="Car Washer" />
              </Picker>
              </View>
              
              <View style = {{flexDirection:'row'}}>
              <Text style={{fontSize: 14, color: '#000000',marginLeft: -45,marginTop: 20}}>City:</Text>
              <Text style={{fontSize: 14, color: '#000000',marginLeft: 120,marginTop: 20}}>Province:</Text>
              </View>
              <View style = {{flexDirection:'row'}}>
              <View style = {styles.inputBox3}>
              <Picker style = {styles.picker}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ city: itemValue })}}>
                  <Picker.Item label="Select a city..." value="" />
                  <Picker.Item label="Lahore" value="Lahore" />
              </Picker>
              </View>
              {/* <Text style={{fontSize: 14, color: '#000000',marginLeft: -130}}>Select your province:</Text> */}
        
              <View style = {styles.inputBox4}>
              <Picker style = {styles.picker}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ province: itemValue })}}
               >
                 <Picker.Item label="Select a province..." value="" />
                  <Picker.Item label="Punjab" value="Punjab" />
              </Picker>
              </View>
              </View>
              <Text style={{fontSize: 14, color: '#000000',marginLeft: -200,marginTop: 20}}>Society:</Text>
              <View style = {styles.inputBox5}>
              <Picker style = {styles.picker1}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ colony: itemValue })}} >
                  <Picker.Item label="Select a society..." value="" />
                  <Picker.Item label="Defence" value="Defence" />
                  <Picker.Item label="Bahria Town" value="Bahria Town" />
                  <Picker.Item label="Wapda Town" value="Wapda Town" />
                  <Picker.Item label="Defence Colony" value="Cantt" />
              </Picker>
              </View>


              <Text style={{fontSize: 14, color: '#000000',marginLeft: -140,marginTop: 20}}>Security question:</Text>
              


              <View style = {styles.inputBox6}>
              <Picker style = {styles.picker2}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ SQ: itemValue })}}>
                  <Picker.Item label="Select a Security Question..." value="" />
                  <Picker.Item label="Your pet's name?" value="Your pet's name?" />
              </Picker>
              </View>
              <TextInput style={styles.inputBox}  
              placeholder="Your Answer"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              onChangeText={(value) => this.setState({securityanswer: value})}
              value={this.state.securityanswer}
              />
              
              

            

              
              
            <TouchableOpacity style={styles.button}
            onPress = {this.myfun.bind(this)}>
             <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
			{/* </View> */}
      </ScrollView>
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E5E5E5',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signuptextContainer:{
    flexGrow:1,
    marginTop: 30,
    alignItems:'center',
    justifyContent :'center',
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(0,0,0,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#2E305F',
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width:262,
    height:42,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    fontSize:16,
    color:'#000000',
    marginVertical: 10
  },
  inputBox2: {
    width:115,
    height:42,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    fontSize:16,
    color:'#000000',
    marginVertical: 10
  },
  inputBox3: {
    width:140,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    marginLeft: 35,
    color:'#000000',
    marginVertical: 10
  },
  inputBox4: {
    width:140,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    marginLeft: 10,
    color:'#000000',
    marginVertical: 10
  },
  inputBox5: {
    width:190,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    marginLeft:-70,
    color:'#000000',
    marginVertical: 10
  },
  inputBox9: {
    width:180,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    marginLeft:-70,
    color:'#000000',
    marginVertical: 10
  },
  inputBox6: {
    width:260,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    color:'#000000',
    marginLeft:-5,
    marginVertical: 10
  },
  button: {
    width:178,
    height:49,
    backgroundColor:'#2E305F',
     borderRadius: 8,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#fff',
    opacity:0.8,
    textAlign:'center'
  },textContainer0:{
    marginTop:55,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1.0)'

  },
  SignupSVG : {
    marginLeft: 85,
    marginTop: 25,

  },
  scrollView: {
    marginHorizontal: 0,
  },
  picker:
  {
    width: 150,
    height:45,
    marginLeft:10,
    borderColor:'blue',
    borderWidth: 1
  },
    picker1:
  {
    width: 190,
    height:45,
    borderColor:'blue',
    borderWidth: 1
  },
  picker2:
  {
    marginLeft:90,
    width: 270,
    height:45,
    marginLeft:10,
    borderColor:'blue',
    borderWidth: 1
  }
});

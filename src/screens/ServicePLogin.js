import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity
} from 'react-native';
import SigninSVG from '../Icons/SigninSVG';
import firebase from './firebase'


export default class ClientLogin extends Component {  
  
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",


    };
    this.data_black = []
    this.check = 1
  }
  actionsfun()
  {
    // console.log(this.state.email)
    // console.log(this.state.password)
    if(this.state.password != "" && this.state.email != "")
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
            this.check = 0 
        }
        
      }
        
      


      }
      else{
        alert("Make sure all fields are filled.")
        return;
      }
      if(this.check == 1){
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
          this.props.navigation.navigate('SPHome')  
          
        })
        .catch(error => {
            alert(error)
        })

      }
      else{
        alert("User is blacklisted by the admin.")
      }
   
  }

	render() {
		return(
			<View style={styles.container}>
				
        <View>
        <Text style={styles.textContainer0}>Welcome back!</Text>
        </View>
        <View style={{flexDirection : 'row'}}>
        <Text style={styles.textContainer1}> Sign In</Text>
        </View>
        <SigninSVG style = {styles.SigninSVG}/>
        <View style = {styles.logintextContainer}>
          <TextInput style={styles.inputBox}  
              placeholder="Email"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(value) => this.setState({email: value})}
              value={this.state.email}
              />
          <TextInput style={styles.inputBox} 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "rgba(0,0,0,0.4)"
              onChangeText={(value) => this.setState({password: value})}
              value={this.state.password}
              />  
            <TouchableOpacity style={styles.button}
            onPress = {this.actionsfun.bind(this)}>
             <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            
    
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPasswordSP')}><Text style={styles.signupButton}> Forgot Password?</Text></TouchableOpacity>
        </View> 
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account?</Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('SPSignUP')}><Text style={styles.signupButton}> Sign up</Text></TouchableOpacity>
				</View>
			</View>	
			);
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E5E5E5',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  logintextContainer:{
    flexGrow:1,
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
  },
  textContainer0:{
    marginTop:85,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1.0)'

  },
  textContainer1:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1.0)'

  },
  SigninSVG : {
    marginLeft: 0,
    marginTop: 25,

  }
});

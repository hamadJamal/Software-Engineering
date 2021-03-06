import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {styleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Categories';
import CompletedOrders from '../screens/Category People List';
import ViewProfile from '../screens/View Profile';
import ViewClientProfile from '../screens/ViewClientProfile';
import Reviews from '../screens/SPInProgressOrdersList';
import DetailsOfServiceProvider from '../screens/DetailsSP';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import SubmitOrder from "../screens/Submit Order";
import { exp } from 'react-native-reanimated';
import  Main from '../screens/MainScreen'
import  ClientSignUp from '../screens/ClientSignup'
import  ClientLogin from '../screens/ClientLogin'
import  SPLogin from '../screens/ServicePLogin'
import  SPSignUP from '../screens/ServicePSignup'
import ForgetPasswordClient from '../screens/ForgetPassword_client'
import ForgetPasswordSP from '../screens/ForgetPassword_sp'
import SPHome from "../screens/Service_Provider_Dashboard";
import SPCompleted from "../screens/Completed_Orders_List";
import SPPending from "../screens/Pending_Orders_List";
import SPReviews from "../screens/SPInProgressOrdersList";
import AdminDashboard from "../screens/Admin_Dashboard";
import Transactions from "../screens/Transaction";
import BlacklistWorkers from "../screens/Blacklist_Workers";
import BlacklistClients from "../screens/Blacklist_Clients";
import ServiceProvidersList from "../screens/ServiceProviders_list"
import ClientsList from "../screens/Clients_list"
import SPPendingOrderDetails from "../screens/ViewPendingOrderDetail"
import SPInProgressOrderDetail from "../screens/InProgressOrderDetail"
import SPReview from "../screens/SP_Review"
import SPCompletedDetail from "../screens/SPCompletedOrderDetails"
import ConfirmPassClient from "../screens/confirmpassword_clients"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from "../screens/ChatScreen"
import Inbox from "../screens/Inbox"
import ClientInbox from "../screens/ClientInbox"
import ChatWithSP from "../screens/ChatScreen.js"
import ChatWithClient from "../screens/SPChatScreen"
import AdminLogin from "../screens/Admin_Login"
import ViewSPProfile from "../screens/ViewSPProfile"

import BlacklistDetails from "../screens/Blacklist_accept"

const Stack = createStackNavigator()
const InboxNavigator = createStackNavigator()
const Tab = createBottomTabNavigator()
const SPTab = createBottomTabNavigator()

const InboxNav = () => {
return (
  <InboxNavigator.Navigator initialRouteName = "ClientInbox">
      <InboxNavigator.Screen name = "ClientInbox" component = {ClientInbox} options={{
          title: 'Inbox',
          headerLeft: ()=> null,
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

  </InboxNavigator.Navigator>
)
}


function HomeTabs() {
  return (
    <Tab.Navigator
    tabBarOptions = {{
      showLabel : false,
      style : {
        position : 'absolute',
        // bottom : 10,
        // left : 10,
        // right : 10,
        backgroundColor : '#2E305F',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        borderBottomLeftRadius : 0,
        height : 50

      }
    }}
    >
      <Tab.Screen name="Home" component={Home} options= {{
        tabBarIcon: ({focused}) => (
          <View>
            <Ionicons name="home" size={24} style = {{color : focused ? 'white' : '#899BC9' }} />
            <Text style = {{color : focused ? 'white' : '#899BC9' , fontSize: 10}}>HOME</Text>
          </View>

        ),
      }}/>
      <Tab.Screen name="Chat" component={InboxNav} options= {{
        tabBarIcon: ({focused}) => (
          <View>
            <Ionicons name="chatbox-ellipses" size={24} style = {{color : focused ? 'white' : '#899BC9' }} />
            <Text style = {{color : focused ? 'white' : '#899BC9' , fontSize: 10}}>CHAT</Text>
          </View>

        ),
      }}/>


      <Tab.Screen name="Notifications" component={Home} options= {{
        tabBarIcon: ({focused}) => (
          <View>
            <Ionicons name="notifications" size={24} style = {{color : focused ? 'white' : '#899BC9' }} />
            <Text style = {{color : focused ? 'white' : '#899BC9' , fontSize: 10}}>ALERTS</Text>
          </View>

        ),
        title: 'Inbox',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}/>

    </Tab.Navigator>
  );
}
const SPInboxNav = () => {
  return (
    <InboxNavigator.Navigator initialRouteName = "Inbox">
      <InboxNavigator.Screen name = "Inbox" component = {Inbox} options={{
            title: 'Inbox',
            headerLeft: ()=> null,
            headerStyle: {
              backgroundColor: '#2E305F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        
    </InboxNavigator.Navigator>
  )
  }

function SPHomeTabs() {
  return (
    <Tab.Navigator
    tabBarOptions = {{
      showLabel : false,
      style : {
        position : 'absolute',
        // bottom : 10,
        // left : 10,
        // right : 10,
        backgroundColor : '#2E305F',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        borderBottomLeftRadius : 0,
        height : 50

      }
    }}
    >
      <Tab.Screen name="SPHome" component={SPHome} options= {{
        tabBarIcon: ({focused}) => (
          <View>
            <Ionicons name="home" size={24} style = {{color : focused ? 'white' : '#899BC9' }} />
            <Text style = {{color : focused ? 'white' : '#899BC9' , fontSize: 10}}>HOME</Text>
          </View>

        ),
      }}/>
      <Tab.Screen name="Chat" component={SPInboxNav} options= {{
        tabBarIcon: ({focused}) => (
          <View>
            <Ionicons name="chatbox-ellipses" size={24} style = {{color : focused ? 'white' : '#899BC9' }} />
            <Text style = {{color : focused ? 'white' : '#899BC9' , fontSize: 10}}>CHAT</Text>
          </View>

        ),
      }}/>


      <Tab.Screen name="Notifications" component={SPHome} options= {{
        tabBarIcon: ({focused}) => (
          <View>
            <Ionicons name="notifications" size={24} style = {{color : focused ? 'white' : '#899BC9' }} />
            <Text style = {{color : focused ? 'white' : '#899BC9' , fontSize: 10}}>ALERTS</Text>
          </View>

        ),
        title: 'Inbox',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}/>

    </Tab.Navigator>
  );
}
export default function App () {

return (

    <NavigationContainer>

        <Stack.Navigator initialRouteName = "Main">

        <Stack.Screen name = "Main" component = {Main} options={{ headerShown: false }}/>
        <Stack.Screen name = "ClientSignUp" component = {ClientSignUp} options={{ headerShown: false }}/>
        <Stack.Screen name = "ClientLogin" component = {ClientLogin} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPLogin" component = {SPLogin} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPSignUP" component = {SPSignUP} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPHome" component = {SPHomeTabs} options={{ headerShown: false }}/>
        <Stack.Screen name = "ForgetPasswordClient" component = {ForgetPasswordClient} options={{ headerShown: false }}/>
        <Stack.Screen name = "ForgetPasswordSP" component = {ForgetPasswordSP} options={{ headerShown: false }}/>
        <Stack.Screen name = "ConfirmPassClient" component = {ConfirmPassClient} options={{ headerShown: false }}/>
        <Stack.Screen name = "AdminLogin" component = {AdminLogin} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPCompleted" component = {SPCompleted} options={{
          title: 'Completed Orders',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

      <Stack.Screen name = "SPReview" component = {SPReview} options={{
          title: 'Review and Complete',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name = "SPCompletedDetail" component = {SPCompletedDetail} options={{
          title: 'Order Details',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>


           <Stack.Screen name = "ChatWithClient" component = {ChatWithClient} options={{
            title: 'Chat with Client',
            headerLeft: ()=> null,
            headerStyle: {
              backgroundColor: '#2E305F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
  
         <Stack.Screen name = "ChatWithSP" component = {ChatWithSP} options={{
          title: 'Chat with Service Provider',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>


        <Stack.Screen name = "SPPendingOrderDetails" component = {SPPendingOrderDetails} options={{
          title: 'Order Details',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        <Stack.Screen name = "SPInProgressOrderDetail" component = {SPInProgressOrderDetail} options={{
          title: 'Order Progress',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>  

        <Stack.Screen name = "SPPending" component = {SPPending} options={{
          title: 'Pending Orders',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>  
        <Stack.Screen name = "SPInProgress" component = {SPReviews} options={{
          title: 'In Progress Orders',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        
        <Stack.Screen name = "AdminDashboard" component = {AdminDashboard} options={{ headerShown: false }}/>
        <Stack.Screen name = "Transactions" component = {Transactions} options={{ headerShown: false }}/>
        <Stack.Screen name = "BlacklistWorkers" component = {BlacklistWorkers} options={{ headerShown: false }}/>
        <Stack.Screen name = "BlacklistClients" component = {BlacklistClients} options={{ headerShown: false }}/>
        <Stack.Screen name = "ServiceProvidersList" component = {ServiceProvidersList} options={{ headerShown: false }}/>
        <Stack.Screen name = "ClientsList" component = {ClientsList} options={{ headerShown: false }}/>
        <Stack.Screen name = "BlacklistDetails" component = {BlacklistDetails} options={{ headerShown: false }}/>
        



           <Stack.Screen name = "Home" component = {HomeTabs} options={{ headerShown: false }}/> 
            <Stack.Screen name = "Detail" component = {Detail} options={{
          title: 'Categories',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
            <Stack.Screen name = "CompletedOrders" component = {CompletedOrders} options={{
          title: 'Service Providers',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
            <Stack.Screen name = "ViewProfile" component = {ViewProfile} options={{
          title: 'View Profile',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name = "ViewClientProfile" component = {ViewClientProfile} options={{
                  title: 'My Profile',
                  headerStyle: {
                    backgroundColor: '#2E305F',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }} />

<Stack.Screen name = "ViewSPProfile" component = {ViewSPProfile} options={{
                  title: 'My Profile',
                  headerStyle: {
                    backgroundColor: '#2E305F',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }} />




            <Stack.Screen name = "DetailsOfServiceProvider" component = {DetailsOfServiceProvider} options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
            <Stack.Screen name = "Reviews" component = {Reviews} options={{
          title: 'Reviews',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
            <Stack.Screen name = "Order" component = {SubmitOrder} options={{
          title: 'Complete Order',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
 



        </Stack.Navigator>
    </NavigationContainer>
)

}


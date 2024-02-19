import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Connection } from './util/database';
import { NavigationContainer } from '@react-navigation/native';
import IconButton from './components/UI/IconButton';
import Allplaces from './components/view/Allplaces';
import AddPlace from './components/view/AddPlaces';

const Stack = createNativeStackNavigator();


export default function App() {


  // 앱의 리소스를 준비하는 동안 대기 화면을 보여주기 위한 state
  const [localInit, setLocalInit] = useState(false);

  // app을 실행하면 DB와 연결한다
  useEffect(() => {
    const dbInit = async() => {
      Connection().then(() => {
        setLocalInit(true);
      }).catch((error)=> console.log(error));
    }

    dbInit();
  },[localInit])


  if(!localInit){
    return(
      <ActivityIndicator
        style={styles.container}
        size="large" color="#FFF000"
      />
    )
  }


  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name='Allplaces' 
          component={Allplaces}
          options={({navigation})=>({
            title:"등록한 장소",
            headerRight:({tintColor})=><IconButton icon="add" size={24} color={tintColor} onPress={()=>navigation.navigate("AddPlace")}/>
          })}
          />

          <Stack.Screen
            name='AddPlace'
            component={AddPlace}
            options={{
              title:"장소 추가"
            }}
            />

          <Stack.Screen name='Map' component={Map}/>
          <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{title:"loading Place.."}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

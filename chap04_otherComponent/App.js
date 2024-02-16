
import { Button, Dimensions, Modal, StatusBar, StyleSheet, Text, View } from 'react-native';
import ActivityIndicatorComponent from './01_otherComponent/01_ActivityIndicatorComponent';
import { useState } from 'react';
import SafeAreaViewComponent from './01_otherComponent/02_SafeAreaView';
import SwitchComponent from './01_otherComponent/03_SwitchComponent';
import FlatListComponent from './01_otherComponent/04_FlatList';
import ModalComponent from './01_otherComponent/07_ModalComponent';


export default function App() {

const [loading, setLoading] = useState(true);

const [isDark, setIsDark] = useState(false);
const [modalVisible, setModalVisible] = useState(false);

if(loading){
  return(
    <View style={styles.loadingConatiner}>
      <ActivityIndicatorComponent/>
      <View style={{marginTop:5}}>
        <Button title='로딩 완료' onPress={()=>{setLoading(false)}}/>
      </View>
    </View>
  )
}  

return(
  <SafeAreaViewComponent isDark={isDark}>
    <StatusBar style='aute'/>
    <SwitchComponent isDark={isDark} setIsDark={setIsDark}/>
    <View style={isDark&& styles.titleView}>
      <Text>window의 현재 넓이: {Dimensions.get("window").width}</Text>
      <Text>window의 현재 높이: {Dimensions.get("window").height}</Text>
    </View>
    <Text>test Text</Text>
    <View style={styles.rootContainer}></View>
      <FlatListComponent isDark={isDark}/>
    <View/>

    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    <Button title="모달" onPress={()=> setModalVisible(true)}/>


  </SafeAreaViewComponent>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  loadingConatiner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  rootContainer:{
    flex:1,
  },
  titleView:{
    backgroundColor:'lightblue',
  }
});

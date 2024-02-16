import {  StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="black"/>
      <View>
        <Text style={styles.title}>hello react Native</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.item}>jsx를 이용한 컴포넌트 렌더링</Text>
        <Text style={styles.item}>javascript를 이용한 방법보다 수월</Text>
      </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFF',
    alignItems:'center',
    marginTop:30
  },
  titleContainer:{
    flex:0.2,
    justifyContent:'center',
    backgroundColor:"#99FFCC",
    width:"100%",
    alignItems:"center"
  },
  title:{
    fontSize:30,
    color:"blue"
  },
  itemContainer:{
    flex:0.8,
    justifyContent:'center',
    backgroundColor:'#99FFFF',
    width:"100%",
    alignItems:'center'
  },
  item : {
    fontSize:20,
    color:"#003300"
  }
});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ViewComponent from './01_basicComponent/01_ViewComponent';
import TextInputComponent from './01_basicComponent/03_TextInputComponent';
import TextComponent from './01_basicComponent/03_TextComponent';
import ImageComponent from './01_basicComponent/04_ImageComponent';
import ScrollViewComponent from './01_basicComponent/05_ScrollViewComponent';


export default function App() {

  const [name, setName] = useState();

  const onChangeHandler=(name)=>{
    setName(name);
  }


//   return (
//     <ScrollView style={styles.scrollContainer}>
//       <View style={styles.container}>
//         <ViewComponent isTrue={true} style={styles.viewComponent} />
//       </View>d
//     </ScrollView>
//   );
// }

  return(
    <ScrollViewComponent>
      <View style={styles.container}>
      <ViewComponent isTrue={true} styles={styles.viewComponent}/>
      <TextInputComponent onChangeHandler={onChangeHandler} name={name} styles={styles.textInputComponent}/>
      <TextComponent name={name} styles={styles.textComponent}/>
      <ImageComponent isTrue={false} styles={styles.imageComponent}/>
      <ImageComponent isTrue={true} styles={styles.imageComponent}/>
      <ImageComponent isTrue={false} styles={styles.imageComponent}/>
    </View>
    </ScrollViewComponent>

  )
}

// 요소가 동적으로 보여지는 부분은 ScrollViewCompoent Not Recommended

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  container: {
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF99',
    marginTop:20
  },
  viewComponent: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    marginVertical: 2,
    marginHorizontal: 4,
    width: '80%'
  },
  textInputComponent:{
    borderColor:'black',
    borderRadius:3,
    fontSize:15,
    borderWidth:1,
    marginHorizontal:4,
    marginVertical:3,
    paddingHorizontal:4,
    width:'80%'
  },
  textComponent:{
    marginHorizontal:4,
    borderWidth:1,
    paddingHorizontal:3,
    marginVertical:3,
    fontSize:20,
    width: "80%"
  },
  imageComponent:{
    height:300,
    marginTop:10,
    borderRadius:10,
    width:'80%'
  }
});

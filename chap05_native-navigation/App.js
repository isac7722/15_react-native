
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import IndexComponent from './01_screen/01_StackNavigation/01_IndexComponent';

export default function App() {

  /*
    npm install @react-navigation/native-stack
    Stack 네비게이션은 화면을 쌓는 개념으로 화면을 쌓아서 뒤로가기와 같은 기능을 제공한다.

    NavigationContainer: 내비게이션 구조 설정 및 전체적인 내비게이션을 관리
    Stack.Navigator: 스택 내비게이션을 구성하고 화면 간 이동을 스택으로 관리 
    Stack.Screen : 화면을 설정하는 컴포넌트 
    추가적인 내비게이션 구성 요소들을 이곳에 추가하여 앱 내비게이션을 완성할 수 있다.
  */
  return (
    <>
      <StatusBar barStyle="default"/>
      <NavigationContainer>
        <IndexComponent/>
      </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




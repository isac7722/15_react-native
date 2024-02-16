import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackComponent from "./02_StackComponent";
import StackView from "./03_StackView";
import { Button } from "react-native";
import StackParams, { TitleView } from "./05_StackParams";
import StackProps from "./04_StackProps";

const Stack = createNativeStackNavigator();

const IndexComponent = () => {

    const openHandler = () => {
        console.log('화면 이동');
    }

    return (
        <Stack.Navigator
            initialRouteName="StackComponent" // 먼저 화면에 보여줄 컴포넌트
            screenOptions={
                {
                    title: 'My Home', // 상단에 보여잘 이름
                    headerStyle: {backgroundColor: '#f4511e'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    contentStyle:{
                        backgroundColor: '#fff'
                    }
                }
            }
        >
            <Stack.Screen
                name='StackComponent'
                component={StackComponent}
            />

            <Stack.Screen
                name='StackView'
                component={StackView}
                options={{
                    title: 'Stack View'
                }}
                listeners={openHandler}
            />

            <Stack.Screen name='StackProps'>
                {(props) => <StackProps {...props} test='Props'/>}
            </Stack.Screen>

            <Stack.Screen
                name='StackParams'
                options={{
                    headerTitle: (props) => <TitleView/>,
                    headerRight: () => (
                        <Button onPress={() => alert('this is button')}
                            title='info'
                            color='#000'/>
                    )
                }}
                component={StackParams}
            />
        </Stack.Navigator>
    )

}


export default IndexComponent;
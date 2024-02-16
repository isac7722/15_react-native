import { Button, Text, View } from "react-native";


const StackView = ({navigation}) => {
    const onPageHandler = () => {
        navigation.navigate('StackProps');
    }

    return (
        <View>
            <Text>
                Stack 컴포넌트는 다음과 같이 화면을 쌓아두고
                뒤고가기와 같은 기능을 제공한다
            </Text>
            <Button onPress={onPageHandler} title="PropsPage" />
        </View>
    )
}

export default StackView;
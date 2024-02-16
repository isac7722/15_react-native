import { Text, View } from "react-native"


export const TitleView = () => {
    const log = () => {
        console.log('log')
    }

    return (
        <View>
            <Text>
                상단 화면
            </Text>
        </View>
    )
}

const StackParams = ({route}) => {
    const {userId, userPass} = route.params;

    return (
        <View>
            <Text>
                전달 받은 사용자 id: {userId}
            </Text>
            <Text>
                전달 받은 사용자 pass: {userPass}
            </Text>
        </View>
    )
}


export default StackParams;
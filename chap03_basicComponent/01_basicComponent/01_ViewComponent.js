// import { Text, View } from "react-native";

// const ViewComponent = ({ isTrue, styles }) => {

//     if (isTrue) {
//         return <View>
//             에러발생
//         </View>
//     }

//     return (
//         <View style={styles}>
//             <Text>나는 썬더 람쥐</Text>
//         </View>
//     )
// }

// export default ViewComponent;


import { Text, View } from "react-native"

const ViewComponent = ({ isTrue, styles }) => {

    if(!isTrue) {
        return <View>
            에러 발생
        </View>
    }

    return (
        <View style={styles}>
            <Text>this is me</Text>
        </View>
    )
}

export default ViewComponent;
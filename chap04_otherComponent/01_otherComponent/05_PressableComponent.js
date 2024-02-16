import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native"
import LinkingComponent from "./06_LinkingComponent";


const PressableComponent = ({item, isDark})=>{

    /*
        Pressable은 React Native에서 사용자의 터치 이벤트를 감지하고 처리하는데 사용되는 컴포넌트로 
        버튼과 같은 인터랙티브한 요소를 만들 때 주로 활용되며, 터치 피드백과 함께 사용자의 터치에 대응할 수 있도록 도와준다.

        onPress: 터치 이벤트가 발생했을 때 호출되는 콜백 함수.
        android_ripple (Android 전용): 안드로이드에서 Pressable을 터치할 때 표시되는 리플 효과를 지정합니다.
        disabled: Pressable을 비활성화할 때 사용하는 prop으로, true로 설정하면 터치 이벤트가 무시됩니다.
    */

    return (
        <Pressable
            style={({pressed})=>[{...styles.itemContainer, borderColor:isDark?'white':'black'}, pressed && styles.pressed]}
            onPress={()=>Alert.alert("인물 알림창", item.name + "의 대하여 공부합시다.", [{text:'Cancel'}], {cancelable:true})}
        >
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:item.img}}/>
            </View>
            <View style={styles.contentContainer}>
                <Text>이름: {item.name}</Text>
                <Text>업적: {item.content}</Text>
                <View sytle={styles.LinkingContainer}>
                    <LinkingComponent link={item.link}/>
                </View>
            </View>

        </Pressable>
    )
}

export default PressableComponent;


const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'yellow',
        marginHorizontal:20,
        marginVertical:3,
        borderWidth:3

    },
    imageContainer:{
        marginHorizontal:5,
        padding:2
    },
    image:{
        width:100,
        height:100
    },
    contentContainer:{
        flex:1
    },
    pressed:{
        opacity:0.7
    },
    LinkingContainer:{
        flexDirection:"row-reverse",
        marginLeft:7,
        marginBottom:5
    }
})
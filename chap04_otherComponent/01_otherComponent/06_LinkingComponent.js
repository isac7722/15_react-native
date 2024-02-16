import { Button, Linking, StyleSheet, View } from "react-native"

const LinkingComponent = ({link}) => {

    /*
        Linking은 React Native에서 외부 링크를 열거나 특정 앱으로 연결하는데 사용되는 API로
        Linking을 사용하면 웹사이트, 전화, 이메일 등의 외부 리소스에 쉽게 액세스할 수 있다. 
    */

    const openWebSite = async ()=>{
        if(await Linking.canOpenURL(link)){
            await Linking.openURL(link);

        }else{
            console.log("Cannot open url: "+link);
        }
    }

    return(
        <View style={styles.buttonContainer}>
            <Button title="자세히 보기" onPress={openWebSite}/>
        </View>
    )
}


export default LinkingComponent;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'black',
        flexDirection:'column',
        width:100
    }
})
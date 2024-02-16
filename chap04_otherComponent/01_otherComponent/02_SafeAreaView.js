import { SafeAreaView, StyleSheet } from "react-native"

const SafeAreaViewComponent = ({children, isDark})=>{

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: isDark? "black": "white"}]}>
            {children}
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    }
})

export default SafeAreaViewComponent;
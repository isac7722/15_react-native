import { ScrollView } from "react-native"


const ScrollViewComponent=({children})=>{

    return(
        <ScrollView>
            {children}
        </ScrollView>
    )
}

export default ScrollViewComponent;
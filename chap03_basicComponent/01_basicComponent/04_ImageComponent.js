import { Image } from "react-native";


const ImageComponent =({isTrue, styles})=>{

    return(
        <>
            <Image
                style={styles}
                source={require("../image/썬더람쥐.png")}
            />
            {
                isTrue 
                    && 
                <Image
                    style={styles}
                    source={
                        {
                            uri : "https://i.namu.wiki/i/ZRme-8WSx8WED4326h9gvrEBy99D-1XqTxoiDT8B4Z-k8qTc9nawjMsELUamAOhkDao6dDHdF1ZtzzBHGI4Pap3KsC3Z33sfD9-tHf5GzoktBQJAuOOdg-LCe94-lZd2gFq7Yml1e1va51DvuiTjsw.webp"
                        }
                    }
                />
            }
        </>
    )
}

export default ImageComponent;
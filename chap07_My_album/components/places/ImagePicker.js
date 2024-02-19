import { useState } from "react"
import {useCameraPermissions, PermissionStatus, launchCameraAsync} from "expo-image-picker";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../model/Colors";
import OutlineButton from "../UI/OutlineButton";

const ImagePicker = ({onTakeImage}) => {
  
    const [picekdImage, setPickedImage] = useState("");

    const {cameraPermissionInformation, requestPermission} = useCameraPermissions();

    const verifyPermissions = async () => {


      if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
      }

      if(cameraPermissionInformation.status === PermissionStatus.DENIED){
        Alert.alert("주의", "위 앱은 카메라 권한이 있어야 합니다.");
        return false;
      }

      return true;

    }

    const takeImageHandler = async () => {
      const hasPermission = await verifyPermissions();

      if(!hasPermission) return;

      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect:[16,9],
        quality:0.5
      });

      setPickedImage(image.assets[0].uri);
      onTakeImage(image.assets[0].uri);
    }

    let imagePreview = <Text>촬영한 이미지가 없습니다.</Text>

    if(picekdImage){
        imagePreview = <Image style={styles.image} source={{uri:picekdImage}}/>
    }

    return(
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlineButton icon="camera" onPress={takeImageHandler}>촬영하기</OutlineButton>
        </View>
    )

}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview:{
        width:'100%',
        height:200,
        marginVertical:8,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:4,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    }
});
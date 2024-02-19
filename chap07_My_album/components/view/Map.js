import { useCallback, useLayoutEffect, useState } from "react"
import { Alert, StyleSheet } from "react-native";
import IconButton from "../UI/IconButton";
import MapView,{Marker} from 'react-native-maps';


const Map = ({navigation, route}) => {
  
    const initialLocation = route.paramss && {
        lat : route.params.latitude,
        lng : route.params.longitue
    }

    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const region = {
        latitude : initialLocation ? initialLocation.lat : 37.78,
        longitue : initialLocation ? initialLocation.lng : -122.43,
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0421
    }

    const selectedLocationHandler = () => {
      if(initialLocation) return;

      const lat = event.nativeEvent.coordinate.latitude;
      const lng = event.nativeEvent.coordinate.longitude;

      setSelectedLocation({lat:lat, lng:lng});
    }

    const savePickedLocationHandler = useCallback(() => {
      if(!selectedLocation){
        Alert.alert("알림","위치를 선택해주세요");
        return;
      }

      navigation.navigate("Addplace",{
        pickedLat : selectedLocation.lat,
        pickedLng : selectedLocation.lng
      })
    },[navigation,selectedLocation]);

    useLayoutEffect(() => {
      if(initialLocation){
        return;
      }

      navigation.setOptions({
        headerRight:({tintCOlor})=>(
            <IconButton icon = "save" size={24} color={tintCOlor} onPress={savePickedLocationHandler}/>
        )
      })
    },[navigation, savePickedLocationHandler, initialLocation]);

    return(
        <MapView
            style={styles.map}
            initialRegion={region}
            onPress={selectedLocationHandler}
        >
            {
                selectedLocation && <Marker title="선택 위치" coordinate={{latitude:selectedLocation.lat, longitude:selectedLocation.lng}}/>
            }

        </MapView>

    )
}

export default Map;

const styles = StyleSheet.create({
    map:{
        flex:1
    }
});
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { fetchedPlaceDetails } from "../../util/query";


const PlaceDetails  = ({route, navigation}) => {
  cont [fetchedPlace, setFetchedPlace] = useState();

  const showOnMapHandler = () => {
    navigation.navigate("Map",{
        latitude : fetchedPlace.location.lat,
        longiltude : fetchedPlace.location.lng
    });
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    const loadPlaceData = async () => {
      const result = await fetchedPlaceDetails(selectedPlaceId);

      setFetchedPlace(result);
      navigation.setOptions({title:result.title});
    }

    loadPlaceData();
  },[selectedPlaceId])

  if(!fetchedPlace){
    return(
        <View style={styles.fallback}>
            <Text>로딩중</Text>
        </View>
    )
  }


  return (
    <ScrollView>
        <Image style={styles.image} source={{uri:fetchedPlace.imageUri}}/>
        <View style={styles.loadPlaceData}>
            <Text style={styles.address}>{fetedPlace.address}</Text>
        </View>
        <OutlineButton>
            지도보기
        </OutlineButton>
    </ScrollView>
  )
}



export default PlaceDetails;


const styles = StyleSheet.create({
    fallback: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        alignItems: 'center'
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    addressContainer: {
        padding: 20
    },
    address: {
        color: Colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
});
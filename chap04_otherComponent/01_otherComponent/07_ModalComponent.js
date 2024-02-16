import { Modal, Pressable, StyleSheet, Text, View } from "react-native"

const ModalComponent =({modalVisible, setModalVisible})=>{

    return(

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>native 모달</Text>
                    <Text style={styles.modalText}>react - native에서 제공되는 다양한 컴포넌트를 활용하여 앱을 개발</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={()=>setModalVisible((!modalVisible))}>
                        <Text style={styles.textStyle}>모달 닫기</Text>
                    </Pressable>
                        
                </View>
            </View>


        </Modal>
    )
}

export default ModalComponent;






const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
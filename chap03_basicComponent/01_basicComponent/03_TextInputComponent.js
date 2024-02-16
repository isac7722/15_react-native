import { Alert, TextInput } from "react-native";

const TextInputComponent=({onChangeHandler, name, styles})=>{
    return (
        <TextInput 
        // 사용자가 기기에서 설정한 폰트 및 크기를 textinput에 적용한다.
        // type은 boolean
        allowFontScaling ={false}
        // 텍스트의 특정 문자를 자동으로 대문자로 시작하는 옵션이다.
        // 키보드 확인하면 대문자로 변경되어 있다.
        // autoCapitalize = {""}
        
        // 사용자가 입력한 단어를 실제로 의도한 단어로 수정하는 기능을 담당한다.
        autoCorrect={true}
        
        // 앱이 로드될때 인풋창에 포커스를 맞추는 기능을 담당한다
        autoFocus={true}
        
        // 텍스트를 입력하고 확인을 클릭하면 키보드가 내려가도록 설정할 수 있다
        blurOnSubmit={true}

        //html의 placeholder와 동일하며 안내를 위해서 사용함
        placeholder="썬더람쥐의 이름을 입력해주세요" 

        // 텍스트 필드에 커서가 깜박거리는 것을 끄는 옵션이다
        caretHidden={false}
        // 커서의 색을 결정한다.
        cursorColor="red"

        // 텍스트의 수정을 막는 옵션으로 기본값 true
        editable={true}

        // 입력 가능한 텍스트의 길이를 제한
        maxLength={400}

        // 입력을 여러 줄로 받을 수 있는 옵션이다
        // 화면을 넘기는 값이 입력되면 아래줄로 내려간다.
        multiline={true}

        // 텍스트의 입력 값이 변경될 대 호출되는 콜백메서드로 
        // 변경된 텍스트는 콜백 핸들러에 단일 문자열로 전달된다
        onChangeText={onChangeHandler}
        /*
            onChageText를 사용할 것으로 주석처리
            텍스트가 변경될 때 호출되는 콜백 함수
            ({nativeEvent: {eventCount, target, text}}) => void
        */
        // onChange={}

        // 텍스트 입력 창의 크기가 변경되면 호출되는 메서드
        //onContentSizeChange={()=> Alert.alert("와우")}
        
        keyboardType="default"
        value={name}
        style={styles}
        />
    )
}

export default TextInputComponent;
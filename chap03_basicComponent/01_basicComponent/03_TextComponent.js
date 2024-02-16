import { Text,View } from "react-native";

const TextComponent = ({name, styles}) =>{
    //<Text> 컴포넌트는 문자열을 표시하기 위한 컴포넌트이다.
    // html의 p태그와 동일한 기능을 수행하며 텍스트를 표현하기 위한 테그이다.
    return (
        <Text style={styles}>
            썬더다람쥐의 이름: {name}
        </Text>
    );
}

export default TextComponent;
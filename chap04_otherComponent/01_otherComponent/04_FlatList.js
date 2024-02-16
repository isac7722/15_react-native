
import { FlatList, Image, View,StyleSheetList, StyleSheet, Text, Pressable } from "react-native";

import { useState } from "react";
import PressableComponent from "./05_PressableComponent";
import { students } from "../FlatListData/00_exampleData";

const FlatListComponent=({isDark})=>{

    const [data, setDate ]= useState(students);
    /*
        설명
        FlatList은 React Native에서 리스트를 효과적으로 렌더링하고 성능을 최적화하기 위한 컴포넌트 중 하나이다. 
        다양한 아이템을 스크롤 가능한 리스트로 표시하고, 화면에 표시되는 아이템만 렌더링하여 효율적인 성능을 보여준다.

        ScrollView VS FlatList
        ScrollView 컴포넌트와 FlatList를 비교해서 보면 큰 차이가 없어 보이지만 성능적으로 아주 많은 차이를 보인다.
        ScrollVie은 모든 아이템을 미리 렌더링하고 메모리에 유지하기 때문에 아이템의 수가 많아지면 성능이 저하될 수 있다.
        Flalist은 화면에 보이는 아이템만 렌더링하고, 화면을 벗어난 아이템은 자동으로 언마운트하여 메모리를 효율적으로 사용한다.

        주의
        FlatList 각 아이템은 keyExtractor prop을 사용하여 고유한 키를 지정해주어야 한다.

        경우에 따른 사용 
        ScrollView: 스크롤이 가능한 단일 컨텐츠를 표시할 때 사용
        FlatList: 대량의 데이터나 동적으로 변경되는 리스트를 표시할 때 사용하며, 아이템이 동적으로 로드되어야 하는 상황에서 유용
    */

    return (
        <FlatList
            data={data} // FlatList에 표시할 데이터 배열.
            keyExtractor={item =>item.id} // 각 아이템을 고유하게 식별하기 위한 키를 추출하는 함수.
            renderItem={({item}) => <PressableComponent isDark={isDark} item={item}/>  // 각 아이템을 렌더링하는 함수로 자식 요소를 컴포넌트로 변환한다.
            }
        />
    )   
};

export default FlatListComponent;
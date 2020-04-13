import React from "react";
import { View, FlatList } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => <AlbumList album={item} navigation={navigation} />}
      keyExtractor={item => item.title}
      />
    </View>
      
  );
};
export default HomeScreen;
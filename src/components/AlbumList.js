import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";




const AlbumList = ({album,navigation}) => {
  
  return (
    <ScrollView>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.image
            }}
            resizeMode="contain"
          />
          <View style={styles.headerContentStyle}>
            <Text style={{color:"#2e2e2e",fontSize:22}}>{album.title}</Text>
            <Text style={{color:"#717171",fontSize:18}}>{album.artist}</Text>
            <Text style={{color:"#b1b1b1",fontSize:16}}>{album.description}</Text>
            <Image
            style={{width:250,height:50,}}
            source={require("../img/50.png")}
            resizeMode="contain"
            //{uri:album.pace}
            //require("../img/50.png")
          />
            

          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    backgroundColor:"#f8f8f8",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 140,
    width: 93,
    margin: 15
  },
  headerContentStyle: {
    width:250,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    backgroundColor:"#f8f8f8",
    borderColor: "#ddd",
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor:"#f8f8f8",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  }
});

export default AlbumList;

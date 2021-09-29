import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

function InstagitCard({name}){
  const [Liked, setLiked] = useState(false)
  return (
        <View>
            <View style={{ flexDirection:'row', padding: 15, alignItems:'center'}}>
            <Image 
            style={{
            marginRight: 15,
            width:40,
            height:40,
            borderRadius:35
            }}
            source={{
            uri: `https://github.com/${name}.png`
            }}
            />
            <Text>{name}</Text>
            </View>
            <Image 
            style={{
            width:'100%',
            height:400,
            }}
            source={{
            uri: `https://github.com/${name}.png`
            }}
            />
            <StatusBar style="auto" />
            <View style={{flexDirection:'row', padding: 15}}>
              <TouchableOpacity onPress={() => setLiked(!Liked)}>
                { Liked 
                ? <Ionicons name="heart" size={44} color="red"  />
                : <Ionicons name="heart-outline" size={44} color="black" />}
              </TouchableOpacity>
            </View>
        </View>
  )
}

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {['AnaLinsDev' , 
          'AnaJL' , 
          '8b1tz'  , 
          'AmandaGAB' ].map((nameInsta) => <InstagitCard key={nameInsta} name={nameInsta}/>)}
        </ScrollView>
      </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

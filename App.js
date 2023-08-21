import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/marsk.png')} 
        style={styles.imageStyle}
      />
      <Text>Business Card</Text>
      <StatusBar style="auto" />
      <Button 
        title="Show phone number" 
        onPress={() => alert('+45 112')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 250
  },
  imageStyle: {
    width: 200,  // Set the desired width
    height: 200,  // Set the desired height
    resizeMode: 'contain',  // Adjust the image according to its original aspect ratio
    marginBottom: 20,  // Some space below the image before other elements
    
  }
});

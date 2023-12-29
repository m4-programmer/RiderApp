import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from './constants/theme';

export default function App() {
  return (
    <View style={styles.container} className='bg-coral-400'>
      <Text style={[styles.text, typography.bodySmall('dark')]} className='text-red-400'>Open up App.js to start working on your app!</Text>
      <View style={{backgroundColor: 'blue',}}>
        <Text style={[styles.text, typography.header1()]}>Changes you make will automatically reload.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    // fontWeight: "normal",
    
  }
});

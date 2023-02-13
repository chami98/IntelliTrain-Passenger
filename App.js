import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {

  let logoFromFile = require('./assets/trainLogo.png');

  return (
    <View style={styles.container}>
      <QRCode
        value="981302052V"
        size={200}
        color='black'
        backgroundColor='white'

        logo={logoFromFile}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

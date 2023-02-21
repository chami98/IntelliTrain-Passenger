import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function Example() {

  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      {/* <ActivityIndicator size={'large'} /> */}
      <Image
        style={{
          height: 300,
          width: 300,
        }}
        source={require('../assets/paymentAnimation.gif')}
      />
      <Text style={styles.text}>Processing your payment</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold'
  },
});

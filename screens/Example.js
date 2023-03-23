import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function Example() {

  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      {/* <ActivityIndicator size={'large'} /> */}
      <Image
        style={{
          height: 400,
          width: 400,
        }}
        source={require('../assets/payment2.gif')}
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

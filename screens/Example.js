import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function Example({ }) {
  return (
    <View>
      <ActivityIndicator size={'large'} />
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
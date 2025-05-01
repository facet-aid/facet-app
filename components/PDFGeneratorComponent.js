import React from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export default function PDFGeneratorComponent({ htmlContent }) {
  const generatePDF = async () => {
    try {
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      await Sharing.shareAsync(uri);
    } catch (error) {
      Alert.alert('Error', 'Failed to generate or share PDF.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Generate PDF" onPress={generatePDF} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

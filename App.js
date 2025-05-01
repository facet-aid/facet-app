import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImagePickerComponent from './components/ImagePickerComponent';
import PDFGeneratorComponent from './components/PDFGeneratorComponent';
import { createHTMLContent } from './utils/pdfUtils';

export default function App() {
  const [imageUri, setImageUri] = useState(null);

  return (
    <View style={styles.container}>
      <ImagePickerComponent onImageSelected={setImageUri} />
      {imageUri && (
        <PDFGeneratorComponent htmlContent={createHTMLContent(imageUri)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

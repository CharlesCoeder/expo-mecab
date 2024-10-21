import { StyleSheet, Text, View } from 'react-native';

import * as ExpoMecab from 'expo-mecab';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoMecab.hello()}</Text>
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

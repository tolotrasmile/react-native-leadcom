import { AsyncStorage } from 'react-native';

const NAMESPACE = '@leadcom';

export async function set(key, value) {
  try {
    await AsyncStorage.setItem(`${NAMESPACE}-${key}`, JSON.stringify(value));
  } catch (error) {
    // Error saving data
  }
}

export async function get(key, defaultValue = null) {
  try {
    const value = await AsyncStorage.getItem(`${NAMESPACE}-${key}`);
    if (value) {
      return JSON.parse(value);
    }
  } catch (error) {
    return defaultValue;
  }
}

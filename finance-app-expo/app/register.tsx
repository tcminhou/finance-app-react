import { View, Text, TextInput, Button, StyleSheet, Alert, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker'; //chon danh sach trong timezone
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Ho_Chi_Minh');

  const timezones = [
    'Asia/Ho_Chi_Minh',
    'Asia/Bangkok',
    'Asia/Tokyo',
    'Asia/Seoul',
    'Europe/London',
    'Europe/Berlin',
    'America/New_York',
    'America/Los_Angeles',
    'Australia/Sydney',
  ]; //danh sach mui gio

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Name, Email and Password are required.');
      return;
    }

    // Fake API call (replace with your own backend API)
    try {
      console.log('Registering with:', { name, email, password, timezone });

      // Simulate success
      Alert.alert('Success', 'Registration completed!');
      router.replace('/login');
    } catch (error) {
      Alert.alert('Registration Failed', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Select your timezone:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={timezone}
          onValueChange={(itemValue) => setTimezone(itemValue)}
        >
          {timezones.map((tz) => (
            <Picker.Item key={tz} label={tz} value={tz} />
          ))}
        </Picker>
      </View>

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 48,
    backgroundColor: '#fff',
    borderColor: '#90CAF9',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  label: {
    marginTop: 8,
    marginBottom: 4,
    color: '#333',
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderColor: '#90CAF9',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 24,
    overflow: 'hidden',
  },
});

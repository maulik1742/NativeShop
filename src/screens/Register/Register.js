import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {register} from '../../redux/actions/AuthActions';
import {color} from '../../utility';

const Register = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: '',
      street: '',
      number: '',
      zipcode: '',
      geolocation: {
        lat: '',
        long: '',
      },
    },
    phone: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleNameChange = (nameKey, value) => {
    setFormData({
      ...formData,
      name: {
        ...formData.name,
        [nameKey]: value,
      },
    });
  };

  const handleAddressChange = (addressKey, value) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [addressKey]: value,
      },
    });
  };

  //   const handleGeolocationChange = (geoKey, value) => {
  //     setFormData({
  //       ...formData,
  //       address: {
  //         ...formData.address,
  //         geolocation: {
  //           ...formData.address.geolocation,
  //           [geoKey]: value,
  //         },
  //       },
  //     });
  //   };

  const handleSubmit = () => {
    dispatch(register(JSON.stringify(formData))).then(res => {
      console.log('res :>> ', res.status);
      if (res.status === 200) {
        navigation.navigate('login');
      }
    });
    // You can perform actions like sending data to an API, saving to a database, etc.
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>User Information</Text>
        <View style={styles.inputFields}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={text => handleChange('email', text)}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputFields}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={formData.username}
            onChangeText={text => handleChange('username', text)}
            placeholder="Username"
          />
        </View>

        <View style={styles.inputFields}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={formData.password}
            onChangeText={text => handleChange('password', text)}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputFields}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            value={formData.name.firstname}
            onChangeText={text => handleNameChange('firstname', text)}
            placeholder="First Name"
          />
        </View>

        <View style={styles.inputFields}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={formData.name.lastname}
            onChangeText={text => handleNameChange('lastname', text)}
            placeholder="Last Name"
          />
        </View>

        <View style={styles.inputFields}>
          <Text style={styles.label}>City:</Text>
          <TextInput
            style={styles.input}
            value={formData.address.city}
            onChangeText={text => handleAddressChange('city', text)}
            placeholder="City"
          />
        </View>

        <View style={styles.inputFields}>
          <Text style={styles.label}>Street:</Text>
          <TextInput
            style={styles.input}
            value={formData.address.street}
            onChangeText={text => handleAddressChange('street', text)}
            placeholder="Street"
          />
        </View>

        <View style={styles.inputFields}>
          <Text style={styles.label}>Number:</Text>
          <TextInput
            style={styles.input}
            value={formData.address.number}
            onChangeText={text => handleAddressChange('number', text)}
            placeholder="Number"
          />
        </View>

        <View style={styles.inputFields}>
          <Text style={styles.label}>Zipcode:</Text>
          <TextInput
            style={styles.input}
            value={formData.address.zipcode}
            onChangeText={text => handleAddressChange('zipcode', text)}
            placeholder="Zipcode"
          />
        </View>

        {/* <View style={styles.inputFields}>
          <Text style={styles.label}>Latitude:</Text>
          <TextInput
            style={styles.input}
            value={formData.address.geolocation.lat}
            onChangeText={text => handleGeolocationChange('lat', text)}
            placeholder="Latitude"
          />
        </View>

        <View style={styles.inputFields}>
          <Text style={styles.label}>Longitude:</Text>
          <TextInput
            style={styles.input}
            value={formData.address.geolocation.long}
            onChangeText={text => handleGeolocationChange('long', text)}
            placeholder="Longitude"
          />
        </View> */}

        <View style={styles.inputFields}>
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={text => handleChange('phone', text)}
            placeholder="Phone"
          />
        </View>

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: color.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    color: color.black,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    color: color.black,
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    color: color.black,
    alignItems: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputFields: {
    color: color.black,
    width: '100%',
  },
});

export default Register;

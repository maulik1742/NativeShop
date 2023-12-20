import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {color, font, style} from '../../utility';

const dimension = Dimensions?.get('window');
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 2500);
  }, []);
  return (
    <View style={styles.containerStyle}>
      <View style={styles.placerStyle}>
        <View style={styles.imageBoxStyle}>
          <Image
            style={styles.logo}
            source={require('../../public/Images/logo.png')}
          />
        </View>
        <Text style={styles.oweWiselyTextStyle}>E-Shop</Text>
        <Text style={styles.messageTextStyle}>Shpping Online</Text>
      </View>
      {/* <Image style={styles.buttonIcon} source={image.safeSecureIcon} />
      <View style={style.commonRowStyle}>
        <Text style={styles.safeAndSecureTextStyle}>Safe & Secure</Text>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 25,
  },
  placerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: dimension.width * 0.6,
    height: dimension.width * 0.6,
  },
  imageBoxStyle: {
    width: dimension.width * 0.6,
    height: dimension.width * 0.6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  oweWiselyTextStyle: {
    fontSize: 36,
    // fontFamily: font.soraBold,
    color: color.black,
    marginVertical: 15,
  },
  wiselyTextStyle: {
    color: color.black,
  },
  messageTextStyle: {
    fontSize: 16,
    // fontFamily: font.soraRegular,
    color: color.black,
    textAlign: 'center',
  },
  safeAndSecureTextStyle: {
    fontSize: 16,
    // fontFamily: font.soraBold,
    color: color.black,
    marginLeft: 15,
  },
  buttonIcon: {
    width: 40,
    height: 40,
  },
});
export default SplashScreen;

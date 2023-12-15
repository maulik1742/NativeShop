// components/ProductList.js

import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';

// Function to fetch product data from API
// Add more mock product data

const ProductList = ({data, onPress}) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <View style={styles.container}> */}
        {data?.map(e => (
          <TouchableOpacity key={e?.id} style={styles.card} onPress={onPress}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: e?.image}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.details}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 5,
                }}>
                <View style={{width: '50%'}}>
                  <Text style={styles.title}>{e?.title}</Text>
                  <Text style={styles.price}>{e?.price}</Text>
                </View>

                <View
                  style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity>
                    <View style={styles.newbutton}>
                      <Text style={styles.buttonText}>Buy</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Add other product details */}
            </View>
          </TouchableOpacity>
        ))}
        {/* </View> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center', // Adjust this based on your layout
    alignItems: 'center', // Adjust this based on your layout
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#686666',
    // overflow: 'hidden',
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  imageContainer: {
    height: 200,
    // overflow: 'hidden',
  },
  image: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
  details: {
    padding: 10,
  },
  newbutton: {
    padding: 10,
    width: '50%',
    alignSelf: 'flex-end',
    backgroundColor: '#C70039',
    borderRadius: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    // color: 'black',
  },
  // Add styles for other product details as needed
});

export default ProductList;

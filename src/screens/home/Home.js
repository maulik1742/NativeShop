// App.js

import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/header/Header';
import ProductList from '../../components/ProductList/ProductList';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../../redux/actions/HomeAction';

export default function App() {
  const [search, setsearch] = useState('');
  const data = [
    {
      id: 1,
      title: 'Iphone',
      price: '$2000',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9znOQAfuI6YNBDB8A_-oH5APUXtonyiNfLtNHdHqXjP4kxwIEM4dO-gd_GB2fg93KJg&usqp=CAUz',
    },
    {
      id: 2,
      title: 'Apple Macbook',
      price: '$3000',
      image:
        'https://images.indianexpress.com/2022/03/MacbookAirDelayed-1.jpg?w=389',
    },
    {
      id: 2,
      title: 'Apple Macbook',
      price: '$3000',
      image:
        'https://images.indianexpress.com/2022/03/MacbookAirDelayed-1.jpg?w=389',
    },
    {
      id: 2,
      title: 'Apple Macbook',
      price: '$3000',
      image:
        'https://images.indianexpress.com/2022/03/MacbookAirDelayed-1.jpg?w=389',
    },
    {
      id: 2,
      title: 'Apple Macbook',
      price: '$3000',
      image:
        'https://images.indianexpress.com/2022/03/MacbookAirDelayed-1.jpg?w=389',
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector(state => state?.Home?.products);

  console.log('products === :>> ', products);

  const handleChange = e => {
    console.log('e :>> ', e);
    setsearch(e);
  };

  const filteredData = products?.filter(e =>
    e?.title?.toLowerCase()?.includes(search),
  );

  return (
    <View style={styles.container}>
      <Header search={search} handleChange={handleChange} />
      <ProductList data={filteredData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

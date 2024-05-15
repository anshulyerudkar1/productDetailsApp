import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';
import { ScrollView } from 'react-native-gesture-handler';

const ProductListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [products, setProducts] = useState<any[]>([]);
  console.log(products);

  useEffect(() => {
    // Fetch products when the component mounts
    getProducts()
      .then(data => {
        // console.log('API Response:', data);  // Log the API response
        // console.log('Raw data:', data.products);
        setProducts(data.products);
      })
      .catch(error => console.error('Error fetching products:', error.message || 'Unknown error'));

  }, []);

  const navigateToDetails = (product: any) => {
    navigation.navigate('ProductDetails', { product });

  };

  // console.log("Products")
  // console.log(products)
  return (
    
    <View style={{ backgroundColor:'#f0fff0', marginTop:6 }}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => navigateToDetails(item)} />
          )}
          
        />
      ) : (
        <Text>No products available</Text>
      )}
    </View>
  );
};

export default ProductListScreen;
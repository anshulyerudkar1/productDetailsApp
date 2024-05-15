import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import StarRating, { StarRatingDisplay } from 'react-native-star-rating-widget';


interface ProductDetailsProps {
  route: {
    params: {
      product: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[]
      };
    };
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name}>{product.title}</Text>
        <Swiper showsButtons={true} dotColor='black' dotStyle={{ display:'flex' }} >
          {product.images.length > 0 ?
            product.images.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.image} />
            ))
            : <Text>No images available</Text>
          }
        </Swiper>
        {/* <StarRatingDisplay
          rating={product.rating}
          starSize={35}
          
        /> */}
        <Text style={{ marginTop:8, fontSize:20, color:'black' }}>{'\u2605'}<Text style={styles.rating}>{` ${product.rating}`}</Text></Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.category}>{`Category: ${product.category}`}</Text>
        <Text style={styles.brand}>{`Brand: ${product.brand}`}</Text>
        <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
        <Text style={styles.discount}>{`Discount: ${product.discountPercentage}%`}</Text>
        <Text style={styles.stock}>{`Stock: ${product.stock} available`}</Text>
        {/* <Text style={styles.rating}>{`Rating: ${product.rating}`}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 275,
    height: 600,
    borderRadius: 8,
    margin:8,
    padding:8
  },
  details: {
    marginTop: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
  },
  brand: {
    fontSize: 16,
    marginTop: 10,
    color: '#000000',
  },
  rating: {
    fontSize: 16,
    marginTop: 10,
    color: '#000000',
  },
  category: {
    fontSize: 16,
    marginTop: 10,
    color: '#000000',
  },
  discount: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  stock: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default ProductDetails;
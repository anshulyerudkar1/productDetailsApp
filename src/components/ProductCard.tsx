import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StarRating, { StarRatingDisplay } from 'react-native-star-rating-widget';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail: string;
    images:string[]
  };
  onPress: () => void;
}

// const [liked, setLiked] = useState(false);

//   const handleLikeToggle = () => {
//     setLiked(!liked);
//   };


const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <ScrollView>
    <View>  
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
        <StarRatingDisplay
          rating={product.rating}
          starSize={25}
          // color='black'
        />
        {/* <TouchableOpacity onPress={handleLikeToggle}>
                {liked ? (
                  <Text style={styles.likeButton}>❤️ Liked</Text>
                ) : (
                  <Text style={styles.likeButton}>🤍 Like</Text>
                )}
              </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 8,
    backgroundColor: '#0f0f0f',
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  details: {
    marginLeft: 10,
  },
  name: {
    marginStart:5,
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fffafa',
  },
  price: {
    marginStart:5,
    fontSize: 14,
    color: '#fffafa',
  },
  likeButton: {
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ProductCard;
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ProductDetails from '../components/ProductDetails';

type RootStackParamList = {
  ProductDetails: { product: { id: number; title: string; description: string; price: number; discountPercentage:number; rating:number; stock:number; brand:string; category:string; thumbnail: string; images:string[] } };
};

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

type ProductDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetails'>;

interface ProductDetailsScreenProps {
  route: ProductDetailsScreenRouteProp;
  navigation: ProductDetailsScreenNavigationProp;
}

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({ route }) => {
  return <ProductDetails route={route} />;
};

export default ProductDetailsScreen;
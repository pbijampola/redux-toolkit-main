import { ActivityIndicator, Button, FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React, { useEffect }  from 'react';
import Book from '../components/Book';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { increment } from '../features/counter/counterReducer';
import { getbooks } from '../store/bookAction';

const HomeScreen = () => {
  const isLoading = useSelector((state: RootState) => state.books);
  const {books} = useSelector((state: RootState) => state.books);
  const {value} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch();

  //dispatching getbooks using useEffect

  useEffect(() => {
    dispatch(getbooks())
  }, [dispatch])

console.log(books);
// if(isLoading){
//   return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <ActivityIndicator size="large" color={'#764abc'}/>
//   </View>
// }


  type BookItem = {
    name_of_book:string,
    author:string,
    cover: string,
    price: string
  }

  
const renderItem: ListRenderItem<BookItem> = ({item}) => (
  <Book
    author={item.author}
    coverURL={item.cover}
    nameOfBook={item.name_of_book}
    price={item.price}
    categoryColor='#764abc'
  />
);


  return (
    <View style={styles.cont}>
    
      <FlatList 
        data={books}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});

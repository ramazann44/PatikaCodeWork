import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoritedJobInfo from './Infos/FavoritedJobInfo'

const FavoritedJobsScreen = ({ navigation }) => {

  const favlist = useSelector(state => state.favList.list);

  function renderItem({ item, index }) {

    return (
      <FavoritedJobInfo
        item={item}
        navigation={navigation}
      />
    )

  }

  useEffect(() => {

    console.log(favlist)

  }, [])


  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
      backgroundColor:'white',
      padding:'2%'
    }}>

      <FlatList
        style={{ width: '100%' }}
        data={favlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

    </SafeAreaView>
  )
}

export default FavoritedJobsScreen
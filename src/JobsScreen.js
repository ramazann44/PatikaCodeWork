import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import JobsInfo from './Infos/JobsInfo'
import IconIO from 'react-native-vector-icons/Ionicons'

const JobsScreen = ({ navigation }) => {

  const [jobData, setJobData] = useState()
  const [nextJobData, setNextJobData] = useState()
  const [pageCount, setPageCount] = useState(1)

  function renderItem({ item, index }) {
    return (
      <JobsInfo
        item={item}
        navigation={navigation} />
    )
  }


  const getJobs = async () => {
    try {
      const response = await fetch('https://www.themuse.com/api/public/jobs?page=' + pageCount);
      const json = await response.json();
      setJobData(json.results);
    } catch (error) {
    }
  }

  const getNextJobs = async () => {
    let pagecount = pageCount + 1;
    try {
      const response = await fetch('https://www.themuse.com/api/public/jobs?page=' + pagecount);
      const json = await response.json();
      setNextJobData(json.results);
    } catch (error) {
    }
  }

  useEffect(() => {
    getJobs();
    getNextJobs();
  }, [pageCount]);


  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      padding: '2%'
    }}>
      <FlatList
        style={{ width: '100%' }}
        data={jobData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

      <View style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        {
          pageCount > 1 &&
          <TouchableOpacity onPress={() => {
            setPageCount(pageCount - 1)
          }} style={{
            marginRight: '5%'
          }}>
            <IconIO
              name='chevron-back'
              size={24}
              color='#d55'
            />
          </TouchableOpacity>

        }

        <Text style={{
          color: 'black',
          fontSize: 24
        }}>{pageCount}</Text>

        {
          nextJobData != undefined ?
            <TouchableOpacity onPress={() => {
              setPageCount(pageCount + 1)
            }} style={{
              marginLeft: '5%'
            }}>
              <IconIO
                name='chevron-forward'
                size={24}
                color='#d55'
              />
            </TouchableOpacity>
            :
            <></>
        }


      </View>

    </SafeAreaView>
  )
}

export default JobsScreen
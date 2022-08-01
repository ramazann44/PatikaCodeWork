import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const JobsInfo = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("JobDetails", {
                name: item.name,
                location: item.locations[0].name,
                level: item.levels[0].name,
                contents: item.contents,
                company: item.company.name,
                id: item.id,
                refsLandingPage: item.refs.landing_page
            })
        }} style={{
            width: '100%',
            borderWidth: 1,
            borderColor: 'gray',
            marginBottom: 10,
            borderRadius: 10,
            padding: '2%'
        }}>
            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20
            }}>{item.name}</Text>

            <Text style={{
                color: 'black',
                fontSize: 16
            }}>{item.company.name}</Text>

            <Text style={{
                width: item.locations[0].name.length * 3 < 100 ?
                    item.locations[0].name.length * 3 + '%'
                    : '100%',
                color: 'white',
                backgroundColor: '#d55',
                fontWeight: 'bold',
                padding: '2%',
                borderRadius: 50,
                textAlign: 'center'
            }}>{item.locations[0].name}</Text>

            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'right',
                color: '#d55'
            }}>{item.levels[0].name}</Text>
        </TouchableOpacity>
    )
}

export default JobsInfo
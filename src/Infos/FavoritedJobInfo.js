import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../favList';

const FavoritedJobsDetails = ({ item, navigation }) => {

    const dispatch = useDispatch();
    const favlist = useSelector(state => state.favList.list);

    const [dupState, setDupState] = useState(false);

    const removeFromFav = () => {
        const id = item.id;
        dispatch(remove(id));
    };

    useEffect(() => {
        const dupx = favlist.every(job => job.id !== item.id);
        setDupState(dupx);
        console.log(item)
    }, [favlist]);

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("JobDetails", {
                name: item.name,
                location: item.location,
                level: item.level,
                contents: item.contents,
                company: item.company,
                id: item.id,
                refsLandingPage: item.refsLandingPage
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
            }}>{item.company}</Text>

            <Text style={{
                width: item.location.length * 3 < 100 ?
                    item.location.length * 3 + '%'
                    : '100%',
                color: 'white',
                backgroundColor: '#d55',
                fontWeight: 'bold',
                padding: '2%',
                borderRadius: 50,
                textAlign: 'center'
            }}>{item.location}</Text>

            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'right',
                color: '#d55'
            }}>{item.level}</Text>

            <TouchableOpacity onPress={() => {
                removeFromFav();
            }} style={{
                width: '100%',
                padding: '2%',
                backgroundColor: '#d55',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: '2%'
            }}>

                <Text style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>Remove</Text>

            </TouchableOpacity>

        </TouchableOpacity>
    )
}

export default FavoritedJobsDetails
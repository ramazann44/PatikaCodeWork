import { View, Text, FlatList, SafeAreaView, TouchableOpacity, ScrollView, useWindowDimensions, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import RenderHTML from 'react-native-render-html';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../favList';

const JobDetails = ({ route }) => {

    const { name } = route.params;
    const { location } = route.params;
    const { level } = route.params;
    const { contents } = route.params;
    const { company } = route.params;
    const { id } = route.params;
    const { refsLandingPage } = route.params;
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();
    const favlist = useSelector(state => state.favList.list);

    const [dupState, setDupState] = useState(false);

    function submit() {
        Linking.openURL(refsLandingPage);
    }

    const tagsStyles = {
        body: {
            color: 'black'
        },
        a: {
            color: 'blue'
        },
        li: {
            color: 'black'
        },
        ul: {
            color: 'black'
        },
        p: {
            color: 'black'
        }
    };

    const addFavorites = () => {
        
        const job = { name, location, level, contents, company, id,refsLandingPage };
        dispatch(add(job));

    };

    const removeFromFav = () => {
        dispatch(remove(id));
    };

    useEffect(() => {
        const dupx = favlist.every(job => job.id !== id);
        setDupState(dupx);
    }, [favlist]);



    return (
        <SafeAreaView style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            padding: 1
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#34495e',
                margin: '1%'
            }}>
                {name}
            </Text>

            <View style={{
                flexDirection: 'row',
                width: '100%',
                marginLeft: '1%',
                marginRight: '1%'
            }}>

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#d55',
                }}>
                    Locations:
                </Text>

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                    {" " + location}
                </Text>

            </View>

            <View style={{
                flexDirection: 'row',
                width: '100%',
                marginLeft: '1%',
                marginRight: '1%'
            }}>

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#d55',
                }}>
                    Job Level:
                </Text>

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                    {" " + level}
                </Text>

            </View>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#34495e',
                margin: '1%',
                textAlign: 'center'
            }}>
                Job Detail
            </Text>

            <ScrollView style={{
                borderWidth: 1,
                borderColor: 'gray',
                padding: '1%',
                marginTop: '1%'
            }}>
                <RenderHTML
                    source={{
                        html: contents
                    }}
                    contentWidth={width}
                    tagsStyles={tagsStyles}
                />
            </ScrollView>
            <View style={{
                width: '100%',
                flexDirection: 'row'
            }}>
                <TouchableOpacity style={{
                    width: '48%',
                    marginRight: '2%',
                    padding: '2%',
                    backgroundColor: '#d55',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: '2%'
                }} onPress={() => {
                    submit();
                }}>
                    <Text style={{
                        color: 'white'
                    }}>Submit</Text>
                </TouchableOpacity>
                {dupState ?
                    <TouchableOpacity style={{
                        width: '48%',
                        marginLeft: '2%',
                        padding: '2%',
                        backgroundColor: '#d55',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginTop: '2%'
                    }} onPress={() => {
                        addFavorites();
                    }}>
                        <Text style={{
                            color: 'white'
                        }}>Add To Favorites</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{
                        width: '48%',
                        marginLeft: '2%',
                        padding: '2%',
                        backgroundColor: '#d55',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginTop: '2%'
                    }} onPress={() => {
                        removeFromFav();
                    }}>
                        <Text style={{
                            color: 'white'
                        }}>Delete From Favorites</Text>
                    </TouchableOpacity>

                }
            </View>
        </SafeAreaView>
    )
}

export default JobDetails
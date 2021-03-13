import React, {useState, useCallback, useEffect}from 'react'
import { TouchableOpacity, Text, FlatList, StyleSheet, View, RefreshControl } from 'react-native'
import PalletPreviw from '../components/palletPReviw';

export default function Home({navigation, route}) {

  const [palettes, setPalettes] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch("https://color-palette-api.kadikraman.now.sh/palettes");
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);
  
  const handleRefresh = useCallback(async () => {
    setRefresh(true);
    await handleFetchPalettes();
    setTimeout(()=> {
      setRefresh(false);
    }, 1000);
  });

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  const newCollorPallete = route.params
  ? route.params.newCollorPallete 
  : undefined;

  useEffect(() => {
    if (newCollorPallete) {
      setPalettes(palettes => [newCollorPallete, ...palettes])
    }
  }, [newCollorPallete])


    return (

        <FlatList
            ListHeaderComponent=
            {
            <TouchableOpacity
            style={{padding: 10, borderWidth: 1, elevation: 2, borderColor: '#Fd4553' }}
            onPress={()=> navigation.push('Moodal')}>
            <Text style={{textAlign: 'center', color: '#Fd4553', fontWeight: 'bold'}}> Add Pallete</Text>
            </TouchableOpacity>
            }

            data={palettes}
            keyExtractor={ item => item.paletteName}
            
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={handleRefresh} />}

            renderItem={({item}) =>  (
            <TouchableOpacity style={{padding: 10}}
                onPress={()=> { navigation.navigate('ColorPreview', item ); }}>
                    <Text style={styles.title}> {item.paletteName} </Text>
                    <PalletPreviw data={item.colors}/>
            </TouchableOpacity>
            )}
        />

    )
}

const styles = StyleSheet.create({

    title: {
        fontSize: 18,
        fontWeight : 'bold',
    },

})
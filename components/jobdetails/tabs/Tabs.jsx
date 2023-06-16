import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = ({ name, activeTabs, onHandleSearchType }) => {
  <TouchableOpacity style={styles.btn(name, activeTabs)} onPress={onHandleSearchType}>
    <Text style={styles.btnText(name, activeTabs)}>{name}</Text>
  </TouchableOpacity>
}

const Tabs = ({ tabs, activeTabs, setActiveTabs }) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTabs={activeTabs}
            onHandleSearchType={() => setActiveTabs(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs
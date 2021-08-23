import React from 'react'
import {View, Text, Image} from 'react-native'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios'
import styles from './HomeStyle'
import {Searchbar} from 'react-native-elements';


const HomeView = (props) => {
        return(
            <View style={styles.catalogContainer}>
                <View style={styles.menuBox}>
                    <Text style={styles.textLogo}>CHOICEASY</Text>
                        <SearchBar
                        placeholder="Buscar"
                        onChangeText={props.updateSearch}
                        value={props.search}
                        lightTheme={true}
                        inputStyle={styles.inputSearchBarStyle}
                        inputContainerStyle={styles.inputSearchBarStyle}
                        />
                </View>

                <View style={styles.imageBox}>
                    <Image source={{uri: 'https://www.falamart.com.br/wp-content/uploads/2020/03/p%C3%A3es-produtos-de-padariaCapa-1068x599.jpg'}} style={styles.imageBox} />
                </View>

                <View style={styles.infoBox}>
                    <Image source={{uri: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2f2019%2f11%2f05%2f18%2fLogo-263059_124077_181531403_1223225818.jpg'}} style={styles.partnerLogo} />
                    <View style={styles.columnGrid}>
                        <Text style={styles.partnerName}>Cantinho do Pão</Text>
                        <Text style={styles.openCalendar}>Seg–Sáb  6:00–22:00  |  Dom  7:00–22:00</Text>
                    </View>

                    <Text style={styles.description}>Padaria onde todos os sabores se encontram em uma delicatessen completa com adega, cafeteria, Restaurante, pizzaria e conveniência. 🥖</Text>
                </View>
                
                <View style={styles.catalogBox}>
                    <Text style={styles.itemContent}>ITEM[]</Text>
                    <Text style={styles.itemContent}>ITEM[]</Text>
                    <Text style={styles.itemContent}>ITEM[]</Text>
                    <Text style={styles.itemContent}>ITEM[]</Text>
                    <Text style={styles.itemContent}>ITEM[]</Text>
                </View>
          </View>
        );
}

export default HomeView;
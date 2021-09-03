import {StyleSheet} from "react-native";

export default StyleSheet.create({

      /* Logo style */
      textLogo: {
        fontSize: 18,
        fontWeight: 'bold',
      },

      /* Column grid */
      columnGrid: {
        flexDirection: 'column',
        margin: 10,
      },

      /* Catalog grid */
      catalogContainer: {
        flexDirection: 'column',
        flex: 1,
      },
      menuBox: {
        flex: 2,
        backgroundColor: '#FAD8A8',
        paddingTop: 30,
      },
      imageBox: {
        flex: 4,
        backgroundColor: 'red',
      },
      infoBox: {
        flex: 3,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      catalogBox: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        flexWrap: 'wrap',

      },

      /* Partner logo image */
      partnerLogo: {
        borderRadius: 100,
        width: 80,
        height: 80,
      },

      /* Partner company name */
      partnerName: {
        fontSize: 18,
        fontWeight: 'bold',
      },

      /* Partner calendar */
      openCalendar: {
        fontSize: 14,
      },

      /* Partner Description */
      description: {
        fontSize: 14,
        margin: 10,
      },

      /* Item grid */
      itemContent: {
        padding: 80,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
      },

      /* Search bar style */
      info: {
        alignItems: "center"
      },
      textInfo: {
        fontSize: 50,
        textAlign: 'center',
      },
      viewButton: {
        backgroundColor: '#ff000040',
        alignItems: "center",
        justifyContent: "center",
      },
      inputSearchBarStyle: {
        backgroundColor: 'white'
      }
})
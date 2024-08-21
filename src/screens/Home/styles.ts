import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  logo: {
    alignSelf: 'center',
    width: 130,
    height: 70,
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#262626',
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    padding: 10,
    color: '#F2F2F2',
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 170,
    zIndex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    marginTop: 55,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 60,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#333333',
    paddingBottom: 15,
  },
  tabChildren: {
    flexDirection: 'row',
    gap: 5,  
  },
  fistText: {
    color: '#4EA8DE', 
    fontSize: 14, 
    fontWeight: 'bold'
  },
  secondText: {
    color: '#8284FA', 
    fontSize: 14, 
    fontWeight: 'bold'
  },
  countOne: {
    backgroundColor: '#333333',
    width: 25,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyList: {
    flex: 1,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 56,
    height: 56,
  },
  emptyTitle: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  emptySubtitle: {
    color: '#808080',
    fontSize: 14,
    marginTop: 5,
  },

});
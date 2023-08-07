/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
// const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  startScreen_container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  startScreen_container_wrapImage: {
    flex: 1,
    position: 'relative',
  },
  startScreen_container_wrapImage_wrapLogo: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'blue',
    elevation: 10,
    paddingBottom: 10,
  },
  startScreen_container_wrapImage_logo: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  startScreen_container_wrapProgessBar: {
    // minHeight: 140,
    backgroundColor: '#fff',
  },
  startScreen_container_wrapProgessBar_title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  startScreen_container_wrapProgessBar_wrapProgess: {
    alignItems: 'center',
    marginTop: 10,
  },
  startScreen_container_wrapProgessBar_version: {
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 10,
  },
});

export default styles;

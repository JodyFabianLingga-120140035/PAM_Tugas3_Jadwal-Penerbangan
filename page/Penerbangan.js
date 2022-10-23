import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import logo from '../assets/pesawat.png'
import user from '../assets/user.png'
import backbtn from '../assets/Arrow.png'

const Jadwal = [
  {
    id: '1',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'France Air',
    waktu : '08 April 2022, 22:00',

  },
  {
    id: '2',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Garuda Indonesia',
    waktu : '08 April 2022, 23:00',
  },
  {
    id: '3',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Qatar Airlens',
    waktu : '08 April 2022, 21:00',
  },
  {
    id: '4',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Cathay Pacific',
    waktu : '08 April 2022, 22:00',
  },
  {
    id: '5',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Scoot',
    waktu : '08 April 2022, 18:00',
  },
  {
    id: '6',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Air Asia',
    waktu : '08 April 2022, 19:00',
  },
  {
    id: '7',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Eva Air',
    waktu : '08 April 2022, 00:00',
  },
  {
    id: '8',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Emirates',
    waktu : '08 April 2022, 22:00',
  },
  {
    id: '9',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Air France',
    waktu : '08 April 2022, 21:00',
  },
  {
    id: '10',
    asal: 'Soekarno-Hatta',
    tujuan: 'Belgrade',
    maskapai: 'Qatar Airways',
    waktu : '08 April 2022, 19:00',
  },
];


const Penerbangan = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <img src={logo} alt="logo" style={styles.logo}/>
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
              <img src={backbtn} alt="back" style={styles.logo}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Jody.id</Text>
            <img src={user} alt="user" style={styles.logo}/>
          </View>
          <Text style={styles.heading2}>Jadwal Penerbangan</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={Jadwal}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Jody Fabian Lingga - 120140035</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    width:'100%',
    backgroundColor: '#3CB371',
    padding:20,
    marginBottom:10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontFamily: "Sans-Serif",
  },
  heading2: {
    fontFamily: "Sans-Serif",
    color: 'white',
    textAlign:'center',
  },
  top: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  img: {
    width:10,
  },
  item: {
    backgroundColor: '#98FB98',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#FFFFE0',
    fontWeight: 'bold',
    marginBottom: '20px',
    padding:20,
    marginTop: '10px',
    textAlign: 'center',
  },
});

export default Penerbangan;
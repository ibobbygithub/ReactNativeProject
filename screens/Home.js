import React from 'react';
import {  Text, View,Image, TouchableOpacity,StyleSheet ,ScrollView,FlatList} from 'react-native';

import { SliderBox } from "react-native-image-slider-box";
import { Div, Card, A } from "reactnative-ui-bootstrap";
import { Table,TableWrapper, Row, Rows,Col } from 'react-native-table-component';
import { CATEGORIES } from "../data/two-dummy";
import AdvGridTile from "../components/AdvGridTile";


const Home = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <AdvGridTile
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate("รายละเอียด",{adverseId: itemData.item.id});
        }}
      />
    );
  };
  
  return (
    
    <View style={{ flex: 1}}>
      <ScrollView >
        <Div className={'row'}>
            <SliderBox images={ [
                'https://sciplanet.org/wp-content/uploads/2021/02/119237315_324317651983806_1580201587149354968_n.jpg',
                'https://sciplanet.org/wp-content/uploads/2021/01/youtube03.jpg',
                'https://sciplanet.org/wp-content/uploads/2021/01/youtube02.jpg',
                'https://sciplanet.org/wp-content/uploads/2021/01/ปิดซ่อมแซมอาคาร-2-และ-3.jpg',
                'https://sciplanet.org/wp-content/uploads/2021/01/fee25.jpg',
                'https://sciplanet.org/wp-content/uploads/2021/01/กำหนดการ.jpg'
                
            ]}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            />
        </Div>
        
        <Text style={{fontSize:16,padding:5}} >ประชาสัมพันธ์</Text>
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
       
        
        <Text style={{fontSize:16,padding:5}} >ตารางรอบการแสดงท้องฟ้าจำลอง</Text>
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 1}} style={{marginBottom:20}}>
            <Row data={['วัน/รอบแสดง', '10.00 น', '11.00 น', '13.00 น.','14.00 น.','15.00 น.']} flexArr={[1, 1,1, 1,1, 1]} style={styles.head} textStyle={styles.textH}/>
            <TableWrapper style={styles.wrapper}>
              <Col data={['อังคาร','พุธ-ศุกร์']} style={styles.title} heightArr={[28,28]} textStyle={styles.text} />
              <Rows data={[['🔷','⬛','🔶','🔶','⬛'],['🔶','⬛','🔶','🔶','⬛']]} flexArr={[ 1,1, 1,1,1]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
          </Table>
          
          <Table borderStyle={{borderWidth: 1}} style={{alignItems:'center'}}>
            <Row data={['วัน/รอบแสดง', '10.00 น', '11.00 น', '13.00 น.','14.00 น.','15.00 น.']} flexArr={[1, 1,1, 1,1, 1]} style={styles.head} textStyle={styles.textH}/>
            <TableWrapper style={styles.wrapper}>
              <Col data={['เสาร์-อาทิตย์']} style={styles.title} heightArr={[28,28]} textStyle={styles.text} />
              <Rows data={[['🔶','⬛','⬛','⬛','⬛']]} flexArr={[ 1,1, 1,1, 1]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
          </Table>
          <Text style={{fontSize:10,marginTop:10,marginLeft:20}}>
          🔷 : รอบภาษาอังกฤษสำหรับทั้งสถาบันการศึกษาและประชาชนทั่วไป{'\n'}
          🔶 : รอบสถาบันการศึกษา{'\n'}
          ⬛ : รอบประชาชนทั่วไป
          </Text>
          
      </View>
      </ScrollView>
     
     

    </View>

  );
};

const styles = StyleSheet.create({
    ImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
    
   },
   FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e2f4d',
    height: 40,
   
  },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    head: {  height: 40,  backgroundColor: '#1e2f4d'},
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28 },
    textH: { textAlign: 'center' ,fontSize:10,color:'#fff'},
    text: { textAlign: 'center' ,fontSize:10,color:'#000'}

});

export default Home;
import React from 'react';
import {View,Text,ScrollView, SafeAreaView,StyleSheet} from 'react-native';

import MapView,{Marker, PROVIDER_GOOGLE}  from 'react-native-maps';
const Contact = () => {
    return(
      
        <View style={{ flex: 1}}>
          <ScrollView>
          <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 13.720301401448422,
            longitude: 100.58392602972364,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          <Marker
            draggable
            coordinate={{
              latitude: 13.720301401448422,
              longitude: 100.58392602972364,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'ศูนย์วิทยาศาสตร์เพื่อการศึกษา'}
            description={'928 ถนนสุขุมวิท เขตคลองเตย กรุงเทพฯ 10110'}
          />
        </MapView>
      </View>
      <View style={{marginTop:350}}>
        <Text style={{fontSize:18,color:'#202d4d',padding:10}}>ติดต่อเรา</Text>
        <Text style={{fontSize:16,color:'#71b991',paddingLeft:20}}>สถานที่ตั้งหน่วยงาน{'\n'}</Text>
        <Text  style={{fontSize:14,color:'#202d4d',paddingLeft:20,paddingRight:20 }}>ศูนย์วิทยาศาสตร์เพื่อการศึกษา{'\n'}
              928 ถนนสุขุมวิท เขตคลองเตย กรุงเทพฯ 10110{'\n'}
              โทรศัพท์ : 0-2391-0544, 0-2392-0508, 0-2392-1773{'\n'}
              โทรสาร : 0-2392-0508, 0-2391-0522{'\n'}
              E-mail : nsce@sci-educ.nfe.go.th{'\n'}
              Website : https://sciplanet.org{'\n'}
              Facebook : https://goo.gl/w7bys7{'\n'}
              Twitter : https://twitter.com/sce_moe{'\n'}
              Youtube : https://goo.gl/Nr7e7X</Text>
  
              <Text style={{fontSize:16,color:'#71b991',paddingLeft:20,paddingTop:20}}>
              เวลาทำการงานสำนักงาน{'\n'}</Text>
              <Text  style={{fontSize:14,color:'#202d4d',paddingLeft:20,paddingRight:20,marginBottom:20}}>
              เปิดบริการ: วันจันทร์ – วันศุกร์ เวลา 8.30 – 16.30 น.{'\n'}
              ปิดบริการ: วันเสาร์ – วันอาทิตย์และวันหยุดนักขัตฤกษ์{'\n'}{'\n'}
              <Text style={{fontSize:16,color:'#71b991',paddingLeft:20,paddingTop:20}}>
              เวลาทำการท้องฟ้าจำลองและนิทรรศการ{'\n'}</Text>{'\n'}

              เปิดบริการ: วันอังคาร – วันอาทิตย์ เวลา 9.00 – 16.30 น.{'\n'}
              ปิดบริการ: วันจันทร์และวันหยุดนักขัตฤกษ์{'\n'}{'\n'}
              <Text style={{fontSize:16,color:'#71b991',paddingLeft:20,paddingTop:20}}>
              การเดินทาง{'\n'}</Text>{'\n'}
              รถโดยสารประจำทาง: สาย 2, 25, 38, 40, 72, 501, 511, 513, 508{'\n'}
              รถไฟฟ้าใต้ดิน: ลงสถานีสุขุมวิทแล้วขึ้นรถไฟฟ้าบีทีเอส (ลงที่สถานีเอกมัย){'\n'}
              รถไฟฟ้าบีทีเอส: (ลงที่สถานีเอกมัย)</Text>
        
        </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom:80
  },
  mapStyle: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    bottom: 530,
  },
})

export default Contact;
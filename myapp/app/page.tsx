/* eslint-disable @next/next/no-title-in-document-head */
"use client"; 
import Image from 'next/image'
import logos from '../public/png/logo.png';
// import titles from '../public/png/title.png';
import Par_box from './components/par_box';
import { status_list } from './http/api';
import { useEffect, useState } from 'react';
import {  Tooltip, message } from 'antd';

// 状态 status: 1; 运动中（1）、停止（2）、异常（3）
// 数据排列方式 arr_type: 'list'竖直排列，否则就是弹性布局
// 左侧数据
function Boxs1({item,width}: any){
  return (
  <Par_box width={width} height={32} name={item.name}>
        <div className='par1' >
          {/* <p>连接状态</p> */}
          <div className='status_par' 
          style={{display: (item.arr_type == "list" ? 'block': 'flex')}}
          >
            {item.arr1.map((item1: any) => {
              if(item1.status){
                  return (  
                  <div key={item1.id} style={{display: 'flex'}}>
                    <span style={{color: '#DDDEE0'}}>{item1.name}：</span> 
                    <div
                    style={{
                      color: (item1.status == 1 ? "#16EAC5" :
                        (item1.status == 2 ? "#848E96" : "red")
                      )
                    }}
                    className='runs' >
                      <p 
                      style={{
                        background: (item1.status == 1 ? "#16EAC5" :
                          (item1.status == 2 ? "#848E96" : "red")
                        )
                      }}
                      ></p>
                      <span >{item1.text}</span>
                    </div>
                  </div>)
              }else{
                  // 区分块状和文字排列
                  if(item1.type == 'btn'){
                      return (
                        <div className='w-full'  key={item1.id}  
                        >
                        {item1.arr2.map((item2: any) => (
                          <span style={{background: item2.select == true ? '#00AEFF' : 'rgba(0,174,255,0.26)'}} className='btns' key={item2.id}>{item2.name}</span>
                        ))}
                        </div>
                      ) 
                  }else{
                    return (
                      <div key={item1.id} style={{marginTop: '1.4px'}} className='par_texts'>
                        <span style={{color: '#DDDEE0',whiteSpace: 'nowrap'}}>{item1.name}：</span> 
                        <Tooltip placement="bottomLeft" title={item1.text}  >
                          <span style={{whiteSpace: 'nowrap'}}>{item1.text}</span>
                        </Tooltip>
                      </div>
                    )
                  }
              }
            })}
          </div>
        </div>
  </Par_box>
  )
}
export default function Home() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  useEffect(() => {
    getRobotInfo();
    setInterval(()=>{
      getRobotInfo();
    },1000)
  }, [])
  function getRobotInfo(){
    status_list().then(res => {
      // 关闭错误提示弹窗
      message.destroy();
      // 小车的数据自己通过grpc获取
      // 从左到右按顺序排列
      let arr1: any = [];
      let arr2: any = [];
      let arr3: any = [];
      let arr4: any = [];
      let arr5: any = [];
      const list = res.data;
      list.map((item: any,index: any) => {
        if(item.id > 0 && item.id < 4){
          arr1.push(item);
        }else if(item.id == 8 || item.id == 9 ){
          arr2.push(item);
        }else if(item.id == 4 || item.id == 5 || item.id == 22){
          arr3.push(item);
        }else if(item.id == 21){
          arr4.push(item);
        }else{
          arr5.push(item);
        }
    
      })
      setData(arr1);
      setData1(arr2);
      setData2(arr3);
      setData3(arr4);
      setData4(arr5);
    }).catch(error => {
      console.log(error)
      message.error({
        content: '数据获取失败，请联系管理员',
        key: 'tip1',
        duration: 0
      })
     })
  }
  return (
             <div className="content" >
              <div>
                <div className='con1 h-full mr-[30px]  w-[326px]' style={{ display: data.length > 0 ? 'flex' : 'block'}}>
                    {data.length > 0 && data.map((item: any) => {
                      return (
                          <div style={{width: '326px'}} key={item.id}>
                            <Boxs1 width={326} item={item}></Boxs1>
                          </div>
                      )
                    })}
                </div>
                <div className='con1 h-full mr-[30px] w-[326px]' style={{ display: data.length > 0 ? 'flex' : 'block'}}>
                  {data2.length > 0 && data2.map((item: any) => {
                    return (
                        <div style={{width: '326px'}} key={item.id}>
                          <Boxs1 width={326} item={item}></Boxs1>
                        </div>
                    )
                  })}
                </div>
                <div className='con1 h-full mr-[30px] w-[326px] pb-10' style={{display: data.length > 0 ? 'flex' : 'block'}}>
                  {data1.length > 0 && data1.map((item: any) => {
                    return (
                        <div style={{width: '326px'}} key={item.id}>
                          <Boxs1 width={326} item={item}></Boxs1>
                        </div>
                    )
                  })}
                </div>
                <div className='con3 h-full mr-[20px] w-[520px]' >
                  {data4.length > 0 &&data4.map((item: any) => {
                      return (
                          <div style={{width: '245px',marginBottom: 20}} key={item.id}>
                            <Boxs1 width={258} item={item}></Boxs1>
                          </div>
                      )
                    })}
                </div>
                <div className='con2 h-full w-[220px]'>
                  {data3.length > 0 && data3.map((item: any) => {
                    return (
                        <div style={{width: '220px'}} key={item.id} >
                          <Boxs1 width={220} item={item}></Boxs1>
                        </div>
                    )
                  })}
                </div>
              </div>
                <Image className='w-full h-[48px]' src={logos} alt={''}></Image>

             </div>
         
        )
}


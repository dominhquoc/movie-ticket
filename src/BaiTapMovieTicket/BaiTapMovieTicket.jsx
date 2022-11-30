import React, { Component } from 'react'
import './MovieTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe';

export default class BaiTapMovieTicket extends Component {

  renderHangGhe = ()=>{
    return danhSachGheData.map((hangGhe,index)=>{
      return <div key={index}>
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
    })
  }


  render() {
    return (
      <div style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: 'url("./image/baitapmovieticket/bgmovie.jpg")', backgroundSize: "100%" }}>
        <div style={{ position: "fixed", backgroundColor: 'rgba(0,0,0,0.7)', width: "100%", height: "100%" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-8 text center'>
                <div className='text-warning display-4'>ĐẶT VÉ XEM PHIM CYBERSOFT.VN</div>
                <div className='mt-3 text-light text-center' style={{fontSize:"25px"}}>Màn hình</div>
                <div className='mt-2' style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                  <div className='screen'></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className='col-4 text-center'>
                <div className='text-light mt-2' style={{fontSize:"35px"}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                <ThongTinDatGhe/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

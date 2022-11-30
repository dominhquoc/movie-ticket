import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let gheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        gheDaDat = "DuocChon"
        disable = true;
      }

      let gheDangDat = ""; 
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
      if(indexGheDangDat !== -1){
        gheDangDat = 'gheDangChon';
      }

      return <button onClick={()=>{
        this.props.datGhe(ghe)
      }} disabled={disable} className={`ghe${gheDaDat} ${gheDangDat}`} key={index}>
        {ghe.soGhe}
      </button>
    })
  }

  renderSoHang = () =>{
      return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
          return <button className='rowNumber'>
            {hang.soGhe}
          </button>
        })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className='ms-4'>
        {this.props.hangGhe.hang} {this.renderSoHang()}
      </div>
    } else {
      return <div>
        {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    }
  }

  render() {
    return (
      <div className='text-light text-left ml-5 mt-3 ' style={{ fontSize: "30px" }}>
        {this.renderHangGhe()}
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.BaiTapMovieTicketReducer.danhSachGheDangDat
})

const mapDispatchToProps = (dispatch) =>{
  return {
    datGhe: (ghe) =>{
      dispatch({
        type:"DAT_GHE",
        ghe
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon' style={{ marginLeft: "-35px" }}></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế đã đặt</span><br />
          <button className='gheDangChon'></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế đang đặt</span><br />
          <button className='ghe' style={{ marginLeft: "0" }}></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế chưa đặt</span>
        </div>

        <div className='mt-5'>
          <div class="table-responsive">
            <table className='table' border="2">
              <thead>
                <tr className='text-light' style={{fontSize:"25px"}}>
                  <th>Số ghế</th>
                  <th>Giá</th>
                  <th>Hủy</th>
                </tr>
              </thead>
              <tbody className="text-light">
                {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                  return <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td><button className="bg-danger text-light" onClick={()=>{
                      this.props.dispatch({
                        type:"HUY_GHE",
                        soGhe:gheDangDat.soGhe
                      })
                    }}>Hủy</button></td>
                  </tr>
                })}
              </tbody>
              <tfoot>
                <tr className="text-warning">
                  <td></td>
                  <td>Tổng tiền</td>
                  <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                    return tongTien += gheDangDat.gia;
                  },0).toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapMovieTicketReducer.danhSachGheDangDat
  }
}

export default connect (mapStateToProps)(ThongTinDatGhe);
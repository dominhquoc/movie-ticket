

const stateDefault = {
    danhSachGheDangDat:[
        
    ]
}

export const BaiTapMovieTicketReducer = (state = stateDefault,action)=>{
    switch(action.type){
        case "DAT_GHE":{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let indexGheDangDat = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.ghe.soGhe);
            if(indexGheDangDat !== -1){
                danhSachGheDangDatUpdate.splice(indexGheDangDat,1);
            }else{
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};
        }
        case "HUY_GHE":{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let indexGheDangDat = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.soGhe);
            if(indexGheDangDat !== -1){
                danhSachGheDangDatUpdate.splice(indexGheDangDat,1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};
        }
   
        default: return {...state}
        
    }
}

export default BaiTapMovieTicketReducer;
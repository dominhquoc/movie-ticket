
import {configureStore} from "@reduxjs/toolkit"
import {BaiTapMovieTicketReducer} from "../redux/BaiTapMovieTicketReducer"

const store = configureStore({
    reducer: {
        BaiTapMovieTicketReducer

    }
})
export default store 
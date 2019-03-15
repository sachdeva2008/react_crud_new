import {DATA_SET} from './Types';

export const dataList = () => {
    const data = JSON.parse(localStorage.getItem('product_1')) || [];
    return (dispatch) => {
        dispatch({type : DATA_SET, payload:data});
    }
}

export const addRecord = (data) => {
    var stored = JSON.parse(localStorage.getItem("product_1")) || [];
    const DataWithId = {
                id:guid(),
                email:data.email,
                name:data.name
            };
    stored.push(DataWithId);
    localStorage.setItem("product_1", JSON.stringify(stored));
    return (dispatch) => {
        dispatch(dataList());
    }
}


export const overwriteDataset = (data) => {
            
    localStorage.setItem("product_1", JSON.stringify(data));
    return (dispatch) => {
        dispatch(dataList());
    }
}

const guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + '-' + s4() + '-' + s4();
}



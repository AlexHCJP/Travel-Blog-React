import Axios from "axios"

const AxiosTrvel = (where, data, method, setData, funcErr) => {
    Axios({
        url: 'http://trvel/api/' + where,
        data,
        method: method,
        headers:{
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    }).then(res => setData(res.data)).catch(err => funcErr())
}

export default AxiosTrvel;
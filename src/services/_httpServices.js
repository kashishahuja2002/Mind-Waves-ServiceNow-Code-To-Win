import axios from "axios";

const BaseUrl = "http://localhost:3000/";

// For Post Api Calls And Put
const HttpCall = async (url, method, params, body) => {
    return new Promise(async function (resolve, reject) {
        const completeUrl = BaseUrl + url;
        const token = localStorage.getItem('token');
        axios({
            method: method,
            url: completeUrl,
            data: body,
            params: {
                ...params
            },
            headers: {
                "Accept": "application/json",
                "Token": token,
            },
        })
        .then((response) => {
            if (response && response.status === 200) {
                return resolve(response);
            }
            return resolve(response);
        })
        .catch((err) => {
            return reject(err);
        });
    });
};

// For Get Api Calls
const HttpGet = async (url, params) => {
    return new Promise(async function (resolve, reject) {
        const completeUrl = BaseUrl + url;
        const token = localStorage.getItem('token');
        axios({
            method: "get",
            url: completeUrl,
            params: {
                ...params
            },
            headers: {
                "Accept": "application/json",
                "Token": token,
            },
        })
        .then((response) => {
            if (response && response.status === 200) {
                return resolve(response);
            }
            return resolve(response);
        })
        .catch((err) => {
            return reject(err);
        });
    });
};

export default {
    HttpCall,
    HttpGet
}
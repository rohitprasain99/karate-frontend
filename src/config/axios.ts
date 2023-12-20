
import axios from 'axios';
import { getIdToken } from '../utils/helpers/authorization';
// import store from '../store/store';
// import {logout} from '../store/modules/auth/authActions';
// import { getIdToken,getClinicCode } from '../utils/helpers/authorization';
const axiosInstance = axios.create({
    baseURL: 'https://api-travel.ktmbees.com/api/v1',
    // baseURL: 'https://prod-api.travelnepal.guide/api/v1',
    // baseURL: 'http://localhost:8000/api/v1',
    //     baseURL: 'https://prod-api.travelnepal.guide/api/v1',
    //     baseURL: 'http://localhost:9000/api/v1',
    // timeout: 1000,
    // baseURL: 'http://192.168.1.74:8080/api/v1',

    //
    headers: {
        'Content-Type': 'application/json',
        // "X-Custom-Header": "foobar",e
    },

    // params: {
    //   ID: 12345,
    // },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        // const id_token = 'token token';
        const id_token = getIdToken();

        try {
            if (!!id_token) {
                // @ts-ignore
                config.headers['Authorization'] = `Bearer ${id_token}`;
            }
            return config;
        } catch (err) {
            console.log('error in axios', err);
        }

        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        // response.status === 200 &&
        //     !!response.data.message &&
        //     showNotify('success', response.data.message);
        return response?.data;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            //when 401 i.e unauthorized comes
            //write function to clear session
            // console.log('its 401')
            // const navigate = useNavigate()
            // store.dispatch(logout());
            // navigate('/')
            // window.history.pushState({},'','/')
            // store.dispatch(errorNotify('authentication error'));
        }

        if (error.response && error.response.status === 403) {
        }

        return Promise.reject(error?.response?.data?.message);
    },
);

export default axiosInstance;

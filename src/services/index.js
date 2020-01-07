import axios from 'axios'
import apis from './apis'

const ajax = axios.create({
    baseURL: apis.baseURl,
    timeout: 1000,
   /*  headers: {'X-Custom-Header': 'foobar'} */
})  


//这里还会有拦截器的操作


export const getTodos = () =>{
    return ajax.get(apis.getTodos)
}
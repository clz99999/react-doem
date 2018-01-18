/**
 * Created by Administrator on 2018/1/5.
 */
/*
* view 会触发我们的行为，所以这里需要定义行为
* */
import dispatcher from '../dispatcher'
 export function loginSuccess(){
    //Action选择调度中心  dispatcher 更具action进行任务的分发
     //dispatcher的两个方法         dispatch分发和register注册
     //store里面注册
     dispatcher.dispatch({
         //调度中心里面任务的名称
         type:"LOGIN"
     })
}
/**
 * Created by Administrator on 2018/1/5.
 */
import dispatcher from '../dispatcher'
import {EventEmitter} from 'events'
//如果store改变，view也要更新，通过触发view上的事件
class LoginStore extends EventEmitter {
    constructor() {
        super();
        this.isLogin = false;
    }

    //数据处理的逻辑
    changeLoginState() {
        this.isLogin = true;
    }
    //任务处理器
    handleAction(action) {
        switch (action.type) {
            case "LOGIN":
            {
                this.changeLoginState();
                break;
            }

        }
    }
}

const loginStore=new LoginStore();
//注册
dispatcher.register(loginStore.handleAction.bind(loginStore));
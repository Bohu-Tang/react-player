import {createStore} from 'redux'

// 这是一个reducer，形式为(state,action)=>state 的纯函数
function counter(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'DEL':
            return state - 1;
        default:
            return state
    }
}

// 创建store API是{subscribe,dispatch, getState}
const store = createStore(counter)
// 可以手动更新，也可以事件绑定到视图层
store.subscribe(() => {
    console.log(store.getState())
})

// 改变state的唯一方法是dispatch一个action
store.dispatch({type: 'ADD'})
store.dispatch({type: 'DEL'})
store.dispatch({type: 'ADD  '})


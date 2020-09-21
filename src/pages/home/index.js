import React, {Component} from "react";
import './index.scss'
import Axios from 'axios'
import Cube from "./components/cube";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cubes: Array(144).fill('0')
        }
    }

    // 更改小方格的值
    getChange(value) {
        let currentArray = this.state.cubes
        currentArray[value] = currentArray[value] === '0' ? '1' : '0'
        this.setState({
            cubes: currentArray
        })
    }

    // 渲染小方格
    renderCube() {
        let renderList = []
        this.state.cubes.forEach((item, index) => {
            renderList.push(
                <Cube
                    indexValue={item}
                    key={index}
                    getChange={() => {
                        this.getChange(index)
                    }}
                >
                </Cube>
            )
        })
        return renderList
    }

    // 重置所有小方格
    reset() {
        this.setState({
            cubes: Array(144).fill('0')
        })
    }

    // 请求小方格的数据
    getCubes() {
        Axios.get('https://wx-play.fire-doge.cn/api/getCubes').then(res => {
            if (res.data.code === 100000) {
                const data = res.data.data.list[0].data.split(',')
                this.setState({
                    cubes:data
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    // 保存数据
    saveCubes() {
        const data = this.state.cubes.join(',')
        if(data.indexOf('1')>0){
            Axios.post(`https://wx-play.fire-doge.cn/api/saveCubes`, {data}).then(res => {
                if(res.data.code===100000){
                    alert('保存成功')
                }
            }).catch(error => {
                console.log(error)
            })
        }else{
            alert('你还什么都没画呢！')
        }

    }

    // 生命周期
    componentDidMount() {
        this.getCubes()
    }

    render() {
        return (
            <div className="P-home">
                <div className="P-board">
                    {this.renderCube()}
                </div>
                <div className="P-btn">
                    <div className="P-btn-save" onClick={() => {
                        this.saveCubes()
                    }}>保 存
                    </div>
                    <div className="P-btn-reset" onClick={() => {
                        this.reset()
                    }}>重 置
                    </div>
                </div>
            </div>
        )
    }

}

export default Home
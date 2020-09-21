import React, {Component} from "react";
import styles from './index.module.scss'
import Cube from './components/cube'
import Axios from "axios";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cubes: Array(144).fill('0')
        }
    }

    // 生命周期
    componentDidMount() {
        this.getCubes()
    }

    // 获取像素配置
    getCubes() {
        Axios.get('https://wx-play.fire-doge.cn/api/getCubes').then(res => {
            if (res.data.code === 100000) {
                const data = res.data.data.list[0].data.split(',')
                this.setState({
                    cubes: data
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    // 渲染像素点
    renderCubes() {
        const {cubes} = this.state
        let cubeList = []
        cubes.forEach((item, index) => {
            cubeList.push(<Cube key={index} status={item}></Cube>)
        })
        return cubeList
    }

    render() {
        return (
            <div className={styles.index}>
                <div className={styles.board}>
                    {this.renderCubes()}
                </div>
            </div>
        )
    }

}

export default Index
import React, {Component} from 'react'
import MainLayout from './Layout/MainLayout'
import './App.css'

class App extends Component {
    render() {
        return (
            <div style={style.container}>
                <MainLayout/>
            </div>
        )
    }
}

const style = {
    container: {
        backgroundColor: '#9E9E9E'
    }
}

export default App

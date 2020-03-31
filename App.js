import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            source1 : "https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg",
            source2 : "https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg",
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            if (prevState.source1 === "https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg") {
                return {
                    source1 : "https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg",
                    source2 : "https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg"
                }
            }
            else if (prevState.source1 === "https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg") {
                return {
                    source1 : "https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg",
                    source2 : "https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg"
                }
            }
        })
    }
    
    render() {
        return (
            <div>
                <div><img src={this.state.source1} onClick={this.handleClick} width="200px"/></div>
                <div><img src={this.state.source2} onClick={this.handleClick} width="200px"/></div>
            </div>
        )
    }
}

export default App
import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange( event ) {
        const {name, value} = event.target
        console.log("name: ", name)
        console.log("value: ", value)
        this.setState({[name]: value})
    }

    handleSubmit( event ) {
        event.preventDefault() // Otherwise it will try to refresh the page
        this.setState({
            randomImg: this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <label> Top text: 
                        <input 
                            type="text" 
                            value={this.state.topText}
                            name="topText"
                            onChange={this.handleChange}
                            />
                    </label>
                    <label> Bottom text:
                        <input 
                            type="text"
                            value={this.state.bottomText}
                            name="bottomText"
                            onChange={this.handleChange}
                            />
                    </label>
                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
import "./App.css"
import {connect} from "react-redux"
import {Increment} from "./Action"
import {Decrement} from "./Action"

const App = ({local_variable,Increment,Decrement}) => {
    
    return(
        <div>
            <center>
            <h1>{local_variable}</h1>
            <button onClick = {() => Increment(5)} >Increment</button>
            <button onClick = {Decrement}  >Decrement</button>
            </center>
        </div>
    )
}

const mapStateToProps  = state => ({
        local_variable:state
})

export default connect(mapStateToProps,{Increment,Decrement})(App)
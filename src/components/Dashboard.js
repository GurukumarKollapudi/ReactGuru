import React from "react";
class Dashboard extends React.Component{
    render(){
        state = {
            name : "siva"
        }
        return(
            <div className="hello">
                <h2>{this .state .name}</h2>hi
            </div>
        )
    }
}
export default Dashboard
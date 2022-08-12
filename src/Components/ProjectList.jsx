import { Component } from "react";

export class ProjectList extends Component{
    render(){
        return(
          <div className = "portfolio__list">
            {this.props.data.map((element,id) => 
            <div className = "potfolio__card" key = {id} category = {element.category}>
              <img src = {element.img}/>
            </div>)}
          </div>
          
        )
    }
}
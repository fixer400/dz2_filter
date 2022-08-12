import { Component } from "react";
import { Toolbar } from "./Toolbar";
import { data } from "../data";
import { ProjectList } from "./ProjectList";

export class Portfolio extends Component{

    state = {
        selectedFilter:"All",
        filteredData:data
    }

    onSelectFilter =  (filterName) => {
        if (filterName === 'All'){
            this.setState({filteredData:data})
        } else {
            let newData = data.filter((element) => element.category === filterName)
            this.setState({filteredData:newData})
        }
        this.setState({selectedFilter:filterName})
    }

    render(){
        return(
            <div>
                <Toolbar 
                filters = {["All", "Websites", "Flayers", "Business Cards"]} 
                selected = {this.state.selectedFilter}
                onSelectFilter = {(filterName) => {this.onSelectFilter(filterName)}}/>
                <ProjectList data = {this.state.filteredData}/>
            </div>
            
        )
    }
}
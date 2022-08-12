import { Component } from "react";

export class Toolbar extends Component{

  onSelectFilter = (filterName) => {
    this.props.onSelectFilter(filterName)
  }

  render(){
    return(
      <div className="portfolio__toolbar">
        {this.props.filters.map(filterName => {
          return(
            <button className={this.props.selected == filterName?"portfolio__button-active":"portfolio__button"} key = {filterName} onClick={() => this.onSelectFilter(filterName)}>{filterName}</button>
          )
        })}
      </div>
    )
  }
}
import './app-filter.css';
import {Component } from "react";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFilter: 'allSalary'
        }
    }

    onActiveFilter = (e) => {
        const activeFilter = e.currentTarget.getAttribute('data-toggle');
        this.setState({activeFilter})
        this.props.onActiveFilter(activeFilter)
    }

    render() {
        const allSalary = "allSalary"
        const riseSalary = "riseSalary"
        const bigSalary = "bigSalary"
        const activeFilter = this.state.activeFilter

        return (
            <div className={"btn-group"}>
                <button className={"btn" + (allSalary === activeFilter ? " btn-light" : " btn-outline-light")} type={"button"} data-toggle={allSalary} onClick={this.onActiveFilter}>
                    Все сотрудники
                </button>
                <button className={"btn " + (riseSalary === activeFilter ? " btn-light" : " btn-outline-light")} type={"button"} data-toggle={riseSalary} onClick={this.onActiveFilter}>
                    На повышение
                </button>
                <button className={"btn " + (bigSalary === activeFilter ? " btn-light" : " btn-outline-light")} type={"button"} data-toggle={bigSalary} onClick={this.onActiveFilter}>
                    Зп больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;
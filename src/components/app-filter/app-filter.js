import './app-filter.css';
import {Component} from "react";

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
        const buttonsData = [
            {name: 'allSalary', label: 'Все сотрудники'},
            {name: 'riseSalary', label: 'На повышение'},
            {name: 'bigSalary', label: 'Зп больше 1000$'},
        ];
        const buttons = buttonsData.map(({name, label}) => {
            const active = this.state.activeFilter === name
            const clazz = active ? " btn-light" : " btn-outline-light"
            return (<button
                type={"button"}
                className={`btn ${clazz}`}
                data-toggle={name}
                onClick={this.onActiveFilter}
            >{label}</button>)
        })
        return (
            <div className={"btn-group"}>
                {buttons}
            </div>

        )
    }
}

export default AppFilter;
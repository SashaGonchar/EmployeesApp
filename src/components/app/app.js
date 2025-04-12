import {Component} from 'react'

import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John Wick", salary:8000, increase: false, rise: true, id: 1 },
                {name: "Joe Biden", salary:10000, increase: true, rise: false, id: 2 },
                {name: "Nick Pick", salary:7000, increase: false, rise: false, id: 3 },
                {name: "Dark Rick", salary:3000, increase: false, rise: false, id: 4 },
            ],
            term:''
        }
        this.maxId = 5;
    }

    ///реализовать учет сотрудников и передать как пропс в епп инфо

    deleteItem = (id) => {
        this.setState(({data}) => {

            return {
            data: data.filter(item => item.id !== id)
            }

        })

    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter (item => {
            return item.name.indexOf(term) > -1
            }

        )
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    render() {
        const {data, term} = this.state
        const visibleData = this.searchEmp(data, term);
        return (
            <div className={"app"}>
                <AppInfo data={this.state.data}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;
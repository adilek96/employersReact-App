import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employers-add-form";

import "./app.css";


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name: "John S.", salary: 800, increase: true, id: 1},
                {name: "Nikola T.", salary: 2000, increase: false, id: 2},
                {name: "Nikon S.", salary: 1000, increase: false, id: 3},
                {name: "Ilon M.", salary: 100, increase: false, id: 4},
                {name: "Arnold Sw.", salary: 1500, increase: false, id: 5 }
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data:  data.filter(item =>  item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {name: name, salary: salary, id: nextId(), }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            }) 
    }
    render(){
    
        return(
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList data={this.state.data} onDelete={this.deleteItem}/> 
                <EmployeesAddForm onAdd={this.addItem}/> 
            </div>
        )
    }
    
}


export default App;

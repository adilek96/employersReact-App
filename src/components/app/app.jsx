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
                {name: "John S.", salary: 800, increase: true, like: false, id: 1},
                {name: "Nikola T.", salary: 2000, increase: false, like: false, id: 2},
                {name: "Nikon S.", salary: 1000, increase: false, like: false, id: 3},
                {name: "Ilon M.", salary: 100, increase: false, like: false, id: 4},
                {name: "Arnold Sw.", salary: 1500, increase: false, like: false, id: 5 }
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
        const newItem = {name: name, salary: salary, increase: false, id: nextId(), }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            }) 
    }


    onToggle = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    render(){
        const employees = this.state.data.length;
        const encreased = this.state.data.filter(item => item.increase).length;
        return(
            <div className="app">
                <AppInfo employees={employees} encreased={encreased}/>
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList data={this.state.data} onDelete={this.deleteItem} onToggle={this.onToggle}/> 
                <EmployeesAddForm onAdd={this.addItem}/> 
            </div>
        )
    }
    
}


export default App;

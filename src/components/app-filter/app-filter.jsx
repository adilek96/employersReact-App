
import "./app-filter.css"


const AppFilter = ({onFilter, onActive}) => {

    let btnOne = "btn btn-outline-light",
        btnTwo = "btn btn-outline-light",
        btnThree ="btn btn-outline-light";
    

    switch(onActive){
        case "all" :
            btnOne = "btn btn-outline-light active";
            break;
        case "like" :
            btnTwo = "btn btn-outline-light active";
            break;
        case "salary" :
            btnThree = "btn btn-outline-light active";
            break;
    }
    return(
        <div className="btn-group">
            <button className={btnOne}
                    type="button"
                    onClick={() => onFilter("all")}
                    >
                        Все сотрудники
            </button>
            <button className={btnTwo}
                    type="button"
                    onClick={() => onFilter("like")}>
                        На повышение
            </button>
            <button className={btnThree}
                    type="button"
                    onClick={() => onFilter("salary")}>
                        З\П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;


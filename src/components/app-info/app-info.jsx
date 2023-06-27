
import "./app-info.css";


const AppInfo = ({employees, encreased}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общие число сотрудников: {employees}</h2>
            <h2>Премию получат: {encreased}</h2>
        </div>
    )
}

export default AppInfo;
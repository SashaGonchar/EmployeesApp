import './app-info.css'

const AppInfo = ({data}) => {

    const employees = data.length
    const increased = data.filter(item => item.increase === true).length;
   // let increased = 0
    //data.forEach(item => {
    //    if (item.increase === true){
    //        console.log("+")
    //        increased++
    //    }
    //}) ;

return(

    <div className={"app-info"}>
        <h1>Учет сотрудников в компании S&T Industries </h1>
        <h2>Общее число сотрудников:{employees}</h2>
        <h2>Премию получат:{increased}</h2>
    </div>
)
}

export default AppInfo;
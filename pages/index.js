import config from "../config.json";

function HomePage() {
    const estilosDaHomePage= {backgroundColor:"red"};
    return (
    <div style={estilosDaHomePage}>
        <Menu></Menu>
        <Header></Header>
        <TimeLine></TimeLine>
    </div>
    );
}
function Menu(){
    return(
        <div>
            Menu
        </div>
    )
}
function Header(){
    return(
        <div>
            <img src="banner"/>
            <img src={`https://github.com/${config.github}.png`}/>
            {config.name}
            {config.job}
        </div>
    )
}
function TimeLine(){
    return(
        <div>
            TimeLine
        </div>
    )
}

export default HomePage
import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const estilosDaHomePage= {backgroundColor:"red"};
    console.log(config.playlists);

    return (
    <div style={estilosDaHomePage}>
        <Menu/>
        <Header/>
        <TimeLine playlists={config.playlists} />
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

const StyledHeader= styled.div`
    #img-profile-banner{
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }
    #img-profile{
        width:5rem;
        height:5rem;
        border-radius:50%;
    }
    .profile-info{
        display:flex;
        align-items: center;
        width: 100%;
        padding:1rem 2rem;
        gap:1rem;
    }
`;
function Header(){
    return(
        <StyledHeader>
            <section className="banner">
                <img id="img-profile-banner"src="https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"/>
            </section>
            <section className="profile-info">
                <img id="img-profile" src={`https://github.com/${config.github}.png`}/>
                <div id="txt-profile-info">
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>            
        </StyledHeader>
    )
}
function TimeLine(props){
    console.log("dentro do componente",props)
    return(
        <div>
            TimeLine
        </div>
    )
}

export default HomePage
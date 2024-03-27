interface nameCardProp {
    id: string,
    playlistLink: string,
    name: string,
    coverImage: string,
    totalTracks: number
}

const NameCard:React.FC<{data: nameCardProp[]}> = ({data}) => {
    return(
        <div className="row" style = {{
            width:"100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>
        <form action="\details" method="post" style={{width:"100%"}}>
                {
                    data.slice(0,6).map((singleData:nameCardProp) => (
                        <div className="four columns playcard" style={{
                            margin: "0 0.5vw 0.5vw 0",
                            padding:"2% 1%",
                            backgroundColor: "#2b2b2b",
                            height:"12rem",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                                <a href="/details" type="submit"> <img style ={{    
                                    width:"7rem",
                                    padding:"1.5% 3% 1.5% 1.5%",
                                    borderRadius: "1.5rem"
                                }} src={singleData.coverImage}/> </a>
                                
                                
                                <button name="details" style = {{
                                        border:"none",
                                        textDecoration: "none",
                                        color:"white",
                                        padding:"3%",
                                        fontFamily: "'Montserrat', sans-serif",
                                        overflow: "hidden",
                                        textAlign: "center",
                                }}> {singleData.name} </button>
                        </div>
                    ))
                }
        </form>

    </div> 
    )
}


export default NameCard;
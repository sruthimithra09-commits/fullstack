function Data(prop){
  console.log(prop)
  return(
  <>
    <h2>Data Component</h2>
    <h2>College Name:{prop.obj}</h2>
  </>
  )
}

function Players(prop){
  return (
    <>
      <h2>List of Players</h2>
      <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
        {prop.data.map((player) => (
          <div key={player.name} style={{
            border:"2px solid black",
            padding:"15px",
            margin:"10px",
            width:"150px",
            borderRadius:"10px",
            backgroundColor:"lightblue",
            textAlign:"center"
          }}>
            <h3>{player.name}</h3>
            <p>{player.team}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function App(){
  let players_data=[{
    name:"John",
    team:"TN"
  },
  {
    name:"Roshan",
    team:"Hyd"
  },
  {
    name:"Rohit",
    team:"Mumbai"
  },
  {
    name:"Ramesh",
    team:"Delhi"
  }
]

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>JS File</h2>
      <p>This is a simple React application.</p>
      <Data obj="SECE College"/>
      <Players data={players_data}/>
    </>
  );
}

export default App
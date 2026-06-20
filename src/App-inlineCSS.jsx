

const Card = ({title}) => {
  return (
    <div className="card" style={{
      border: '2px solid #375bb7',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#9c9c9c'
      }}>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars"/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
    </div>
  )
}

export default App
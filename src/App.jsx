import './App.css'
import Header from './component/Header'
import TravelCard from './component/TravelCard'
import Data from './data'

function App() {
  

  const travelData = Data.map(item  => 
    <TravelCard 
        key={item.id}
        img={item.img}
        location={item.locations.location}
        locationLink={item.locations.locationLink}
        title={item.title}
        date={item.date}
        description={item.description}
      />
  )
  
  return (
    <div className="App">
      <Header />
      <div className="card-list">
        {travelData}
      </div>
    </div>
  )
}

export default App

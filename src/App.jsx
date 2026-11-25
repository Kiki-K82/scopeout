import './App.css'
import { properties } from './data/sampleData'

function PropertyCard({ property }) {
  return (
    <button className="card">
      <div className="card-top">
        <span className="card-name">{property.name}</span>
        <span className="card-kind">{property.kind}</span>
      </div>
      <div className="stats">
        <div>
          <div className="stat-num">{property.units}</div>
          <div className="stat-label">units</div>
        </div>
        <div>
          <div className="stat-num">{property.openItems}</div>
          <div className="stat-label">open items</div>
        </div>
        <div>
          <div className="stat-num warn">{property.piecesOwed}</div>
          <div className="stat-label">pieces owed</div>
        </div>
      </div>
    </button>
  )
}

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-sub">Go-back phase</div>
        <div className="header-title">My properties</div>
      </header>

      <main className="screen">
        <p className="muted">{properties.length} properties · same GC</p>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </main>
    </div>
  )
}

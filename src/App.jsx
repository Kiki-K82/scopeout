import { useState } from 'react'
import './App.css'
import { properties } from './data/sampleData'

function PropertyCard({ property, onOpen }) {
  return (
    <button className="card" onClick={onOpen}>
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

function PropertyPage({ property, onBack }) {
  return (
    <div className="app">
      <header className="header">
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>
        <div>
          <div className="header-sub">{property.kind}</div>
          <div className="header-title">{property.name}</div>
        </div>
      </header>

      <main className="screen">
        <p className="muted">{property.units} units · sequences coming next</p>
      </main>
    </div>
  )
}

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const selected = properties.find((p) => p.id === selectedId)
  if (selected) {
    return <PropertyPage property={selected} onBack={() => setSelectedId(null)} />
  }
  return (
    <div className="app">
      <header className="header">
        <div className="header-title">My properties</div>
      </header>

      <main className="screen">
        <p className="muted">{properties.length} properties · same GC</p>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} onOpen={() => setSelectedId(property.id)} />
        ))}
      </main>
    </div>
  )
}

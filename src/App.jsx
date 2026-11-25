import { useState } from 'react'
import './App.css'
import { properties, sequences } from './data/sampleData'

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

const statusLabels = { complete: 'Complete', active: 'In progress', upcoming: 'Upcoming' }

function SequenceCard({ sequence }) {
  return (
    <button className={'card seq-' + sequence.status}>
      <div className="card-top">
        <span className="card-name">{sequence.name} · {sequence.units} units</span>
        <span className={'pill pill-' + sequence.status}>{statusLabels[sequence.status]}</span>
      </div>
      <div className="seq-sub">Units {sequence.range} · delivery {sequence.delivery}</div>
      <div className="bar">
        <div className="bar-fill" style={{ width: sequence.pct + '%' }}></div>
      </div>
      <div className="seq-stats">
        <span><strong>{sequence.openItems}</strong> open items</span>
        <span><strong>{sequence.received}/{sequence.expected}</strong> received</span>
        <span className="owed"><strong>{sequence.owed}</strong> owed</span>
      </div>
    </button>
  )
}

function PropertyPage({ property, onBack }) {
  const propertySequences = sequences.filter((s) => s.propertyId === property.id)
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
        <p className="muted">{property.units} units · {propertySequences.length} sequences</p>
        {propertySequences.map((sequence) => (
          <SequenceCard key={sequence.id} sequence={sequence} />
        ))}
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

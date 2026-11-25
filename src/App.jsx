import { useState } from 'react'
import './App.css'
import { properties, sequences, units } from './data/sampleData'

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

function SequenceCard({ sequence, onOpen }) {
  return (
    <button className={'card seq-' + sequence.status} onClick={onOpen}>
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

function UnitTile({ unit }) {
  let tileClass = 'tile'
  if (unit.pct === 100) tileClass = 'tile tile-done'
  else if (unit.pct > 0) tileClass = 'tile tile-progress'

  return (
    <button className={tileClass}>
      <span className="tile-num">{unit.number}</span>
      <span className="tile-label">{unit.openItems > 0 ? unit.openItems + ' open' : 'Done'}</span>
    </button>
  )
}

function SequencePage({ property, sequence, onBack }) {
  const sequenceUnits = units.filter((u) => u.sequenceId === sequence.id)
  return (
    <div className="app">
      <header className="header">
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>
        <div>
          <div className="header-sub">{property.name}</div>
          <div className="header-title">{sequence.name} · units</div>
        </div>
      </header>

      <main className="screen">
        <p className="muted">{sequence.units} units · delivery {sequence.delivery}</p>
        {sequenceUnits.length === 0 && <p className="muted">No units added yet.</p>}
        <div className="tile-grid">
          {sequenceUnits.map((unit) => (
            <UnitTile key={unit.id} unit={unit} />
          ))}
        </div>
      </main>
    </div>
  )
}

function PropertyPage({ property, onBack }) {
  const [selectedSeqId, setSelectedSeqId] = useState(null)
  const propertySequences = sequences.filter((s) => s.propertyId === property.id)
  const selectedSeq = propertySequences.find((s) => s.id === selectedSeqId)
  if (selectedSeq) {
    return <SequencePage property={property} sequence={selectedSeq} onBack={() => setSelectedSeqId(null)} />
  }
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
          <SequenceCard key={sequence.id} sequence={sequence} onOpen={() => setSelectedSeqId(sequence.id)} />
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

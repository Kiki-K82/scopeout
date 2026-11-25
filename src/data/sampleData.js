// Sample data for building the screens.
// Later this will come from your real projects.
export const properties = [
  { id: 'a', name: 'Property A', kind: 'Doors + punch + FF&E', units: 30, openItems: 112, piecesOwed: 7 },
  { id: 'b', name: 'Property B', kind: 'FF&E only', units: 24, openItems: 9, piecesOwed: 14 },
  { id: 'c', name: 'Property C', kind: 'Windows + punch', units: 18, openItems: 41, piecesOwed: 0 },
]

export const sequences = [
  { id: 'a1', propertyId: 'a', name: 'Seq 1', units: 9, range: '101–109', delivery: 'Nov 3',  status: 'complete', openItems: 0,  received: 135, expected: 135, owed: 0, pct: 100 },
  { id: 'a2', propertyId: 'a', name: 'Seq 2', units: 8, range: '110–117', delivery: 'Nov 17', status: 'active',   openItems: 23, received: 113, expected: 120, owed: 7, pct: 64 },
  { id: 'a3', propertyId: 'a', name: 'Seq 3', units: 6, range: '118–123', delivery: 'Dec 8',  status: 'upcoming', openItems: 48, received: 0,   expected: 90,  owed: 0, pct: 0 },
  { id: 'a4', propertyId: 'a', name: 'Seq 4', units: 7, range: '124–130', delivery: 'Dec 15', status: 'upcoming', openItems: 56, received: 0,   expected: 105, owed: 0, pct: 0 },
  { id: 'b1', propertyId: 'b', name: 'Seq 1', units: 12, range: '201–212', delivery: 'Nov 10', status: 'active',   openItems: 9, received: 166, expected: 180, owed: 14, pct: 80 },
  { id: 'b2', propertyId: 'b', name: 'Seq 2', units: 12, range: '213–224', delivery: 'Dec 1',  status: 'upcoming', openItems: 0, received: 0,   expected: 180, owed: 0,  pct: 0 },
  { id: 'c1', propertyId: 'c', name: 'Seq 1', units: 9, range: '301–309', delivery: '—', status: 'active',   openItems: 18, received: 0, expected: 0, owed: 0, pct: 45 },
  { id: 'c2', propertyId: 'c', name: 'Seq 2', units: 9, range: '310–318', delivery: '—', status: 'upcoming', openItems: 23, received: 0, expected: 0, owed: 0, pct: 0 },
]
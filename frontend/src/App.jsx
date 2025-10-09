import { useState } from 'react';
import Falusi from './components/Falusi';
import Napraforgo from './components/Napraforgo';
import Kihasznaltsag from './components/kihasznaltsag';
import Hettorpe from './components/Hettorpe';
import Foglalas from './components/foglalatsag';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Napraforgo />
      <Falusi />
      <Hettorpe />
      <Foglalas />
      <Kihasznaltsag />
    </>
  )
}

export default App
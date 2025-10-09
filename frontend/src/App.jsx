import Falusi from './components/Falusi';
import Napraforgo from './components/Napraforgo';
import Kihasznaltsag from './components/kihasznaltsag';
import Hettorpe from './components/hettorpe';
import Foglalas from './components/foglalatsag';
import './Styles/main.css';

function App() {
  return (
    <main>
      <div className="top-sections">
        <div className="section-box"><Napraforgo /></div>
        <div className="section-box"><Falusi /></div>
        <div className="section-box"><Hettorpe /></div>
      </div>

      <div className="bottom-section"><Foglalas /></div>
      <div className="bottom-section"><Kihasznaltsag /></div>
    </main>
  );
}

export default App;

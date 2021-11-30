import Resources from './components/Resources'
import Schedule from './components/Schedule'
import Collapsible from './components/Collapsible'
import Search from './components/Search'
import './App.css';

function App() {
    return (
        <div className="app">
        <header>
            <h1> Kursinfo </h1>
        </header>
        <main>
            <Collapsible title={'Kursens namn'}>
                <h3> Klass, termin, skola, stad </h3>
                <p> Allmän info, kontaktuppgifter till läraren osv. </p>
            </Collapsible>
            <hr/>
            <Collapsible title={'Sök'} initialShow={false}>
                <Search />
            </Collapsible>
            <hr/>
            <Resources />
            <hr/>
            <Schedule />
        </main>
        </div>
    );
}

export default App;

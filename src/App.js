import Resources from './components/Resources'
import Schedule from './components/Schedule'
import Collapsible from './components/Collapsible'
import Search from './components/Search'
import './App.css';
import { meta } from './utils/data'

function App() {
    return (
        <div className="app">
        <header>
            <h1> {meta.courseName} </h1>
        </header>
        <main>
            <Collapsible title={'Allmänt'}>
                <h3> {meta.className}, {meta.term}, {meta.school}, {meta.city} </h3>
                <p> {meta.general} </p>
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

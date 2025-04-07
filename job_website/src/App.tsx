import { v4 as uuidv4 } from 'uuid';
import Nav from './components/navbar.tsx';
import Hero from './components/hero.tsx';
import Cards from './components/cards.tsx';
import Jobs from './components/joblists.tsx';

// Generate a random UUID
// const uniqueId: string = uuidv4();
// console.log('Generated UUID:', uniqueId);  // Example: 123e4567-e89b-12d3-a456-426614174000
//


function AppOld() {
    const name = "John"
    const names=["hhh","sdfsdf","efs"]
    const login: boolean = true

  return (
    <>
    <h2>App</h2>
    <p>The name is { name }.</p>
    <ul>
        { names.map((name)=>{
            const n=name+name
            const id: string=uuidv4()
            // console.log(id)
            return (
            <li key= { id } > {n} </li>
        )
        }) }
    </ul>
    <p>{ login? "hellow member" : "hello guest"}</p>
    </>
  )
}

function App() {
    return (
        <>
    <Nav />
    {/* <Hero title="Errrr" subtitle="sdffffffffffffffffsdkfja;" /> */}
    <Hero />

    {/*<!-- Developers and Employers -->*/}
    <Cards />

    <Jobs />


        </>
    )
}



export default App

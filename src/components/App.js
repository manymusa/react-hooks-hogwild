import React,{useState} from "react";
import Nav from "./Nav";
import CardList from "./CardList";
import FilterPigs from "./FilterPigs";

import hogs from "../porkers_data";

function App() {
	const [greased, setGreased] = useState(false);
	const [alphabet, setAlphabet] = useState(false);
	const [weight, setWeight] = useState(false);
	return (
		<div className="App">
			<Nav />
			<FilterPigs 
			greased = {greased}
			setGreased = {setGreased}
			alphabet={alphabet}
			setAlphabet ={setAlphabet}
			weight={weight}
			setWeight={setWeight}/>
			<CardList 
			greased ={greased}
			hogs = {hogs} 
			alphabet={alphabet}
			weight={weight}/>

		</div>
	);
}

export default App;

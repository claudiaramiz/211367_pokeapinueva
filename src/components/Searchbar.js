import React from "react";
const [useState] = React;

const Searchbar = () => {
    const [search, setSearch] = useState('');

    const onChange = (evt) => {
        console.log(evt.target.value);
        setSearch(evt.target.value);
    }
    return (
        <div>
            <div>
                <input placeholder="Buscar pokemon..."
                    onChange={onChange}

                ></input>
            </div>
            <div>{search}</div>
        </div>
    )
}

export default Searchbar;
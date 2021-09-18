import React from "react";

const SearchBar = (props) => {


    return (
        <div>
            <input
                type="text"
                placeholder="search by name or office"
                //value={}
                onChange={(e)=>console.log(`you are typing ${e.target.value} `)}
            >

            </input>
        </div>
    )
}

export default SearchBar
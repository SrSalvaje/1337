import React, { useState, useEffect } from 'react';

const useEmployeeFilter = (searchQuery, allEmployees) => {

    const [profilesToDisplay, setProfilesToDisplay ] = useState(searchQuery)

    useEffect(()=> {
        if(searchQuery) {
            let filteredEmployees = allEmployees.filter((employee) => employee.office.toUpperCase().includes(searchQuery.toUpperCase().trim()) || employee.name.toUpperCase().includes(searchQuery.toUpperCase().trim()) )
            if (filteredEmployees.length > 0) {
                setProfilesToDisplay(filteredEmployees)
            } else {
                setProfilesToDisplay(allEmployees)
            }
        } else {
            setProfilesToDisplay(allEmployees)
        }

    }, [searchQuery])

    return profilesToDisplay
}
export default useEmployeeFilter
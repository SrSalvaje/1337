import { useState, useEffect } from "react";

const useEmployeeFilter = (searchQuery, allEmployees) => {
  const [profilesToDisplay, setProfilesToDisplay] = useState(searchQuery);

  useEffect(() => {
    if (searchQuery) {
      console.log(
        "inside the useEmployeeFilter hook, searchQuery is",
        searchQuery
      );
      let filteredEmployees = allEmployees.filter(
        (employee) =>
          employee.office
            .toUpperCase()
            .includes(searchQuery.toUpperCase().trim()) ||
          employee.name.toUpperCase().includes(searchQuery.toUpperCase().trim())
      );
      console.log(
        "inside the useEmployeeFilter hook, filtered employees are ",
        filteredEmployees
      );
      if (filteredEmployees.length > 0) {
        setProfilesToDisplay(filteredEmployees);
      } else {
        setProfilesToDisplay(allEmployees);
      }
    } else {
      setProfilesToDisplay(allEmployees);
    }
  }, [searchQuery, allEmployees]);

  return profilesToDisplay;
};
export default useEmployeeFilter;

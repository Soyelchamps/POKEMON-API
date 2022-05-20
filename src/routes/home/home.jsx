import { useState, useEffect } from "react";
import SearchBox from "../../components/search-box/search-box";
import CardList from "../../components/card-list/card-list";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users.results);
        console.log(users.results);
      });
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChangeHandler = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="App" >
      <SearchBox onSearchChange={onSearchChangeHandler} />
      <CardList users={filteredUsers} />
    </div>
  );
};

export default Home;

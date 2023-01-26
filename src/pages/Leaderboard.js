import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  const getTop25Users = async () => {
    // setLoading(true);
    try {
      const res = await axios.get("http://localhost:8080/user/");
      // setLoading(false);
      console.log(res);
      // setUsers(res.data.User);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTop25Users();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Points</th>
          <th>Books read</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>175</td>
          <td>12</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>153</td>
          <td>15</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Leaderboard;

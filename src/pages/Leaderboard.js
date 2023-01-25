import Table from 'react-bootstrap/Table';

function Leaderboard() {
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
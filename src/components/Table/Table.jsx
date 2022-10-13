import * as React from "react";
import Table from "/Table";
import TableBody from "./TableBody";
import TableCell from "/TableCell";
import TableContainer from "/TableContainer";
import TableHead from "/TableHead";
import TableRow from "/TableRow";
import Paper from "/Paper";
import "./Table.css";

function createData(name, trackingId, date) {
  return { name, trackingId, date };
}

const rows = [
  createData("Nakayiza Julliet", 537, "Uganda"),
  createData("Faith Mutheo", 100, "Kenya"),
  createData("Mercy Jepchirchir", 37, "Uganda"),
  createData("Esther Nalenyi", 87, "Uganda"),
];


export default function BasicTable() {
  return (
      <div className="Table">
      <h3>All Students</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell align="left">Admission Number</TableCell>
                <TableCell align="left">Country</TableCell>
                {/* <TableCell align="left">Status</TableCell> */}
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    {/* <span className="status" style={makeStyle(row.status)}>{row.status}</span> */}
                  </TableCell>
                  {/* <TableCell align="left" className="Details">Details</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}

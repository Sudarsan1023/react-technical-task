import React from "react";
import "./dialouge.scss";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Header from "../header/header";

// Table Data Code Starts
function createData(
  name: string,
  kind: string,
  brand: string,
  ei: string,
  action: string
) {
  return { name, kind, brand, ei, action };
}

const rows = [
  createData("Amazon", "MESSENGER", "HRA", "", ""),
  createData("Health", "MESSENGER", "HRA", "", ""),
  createData("Flipkart", "MESSENGER", "HRA", "", ""),
  createData("Snapdeal", "MESSENGER", "HRA", "", ""),
  createData("Test", "MESSENGER", "HRA", "", ""),
  createData("Random", "MESSENGER", "HRA", "", ""),
  createData("Cricket", "MESSENGER", "HRA", "", ""),
  createData("Movie", "MESSENGER", "HRA", "", ""),
  createData("Done", "MESSENGER", "HRA", "", ""),
  createData("Menu", "MESSENGER", "HRA", "", ""),
];
// Table Data Code Ends
class Dialogue extends React.Component {
  render() {
    return (
      <div className="dialog-container">
        {/* Header Starts */}
        <Header />
        {/* Header Ends */}

        {/* Table Card Starts */}
        <div className="table-card">
          {/* Table Header Coder Starts */}
          <div className="table-card-header">
            <div className="add-dialog-btn">
              <i className="lni lni-circle-plus add-btn"></i>ADD DIALOGUES
            </div>
          </div>
          {/* Table Header Coder Ends */}
          <div className="table-class">
            {/* Material Table Starts */}
            <TableContainer
              component={Paper}
              style={{ height: "2rem !important" }}
            >
              <Table aria-label="simple table">
                {/* Table Heade Code Starts */}
                <TableHead>
                  <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell align="left">KIND</TableCell>
                    <TableCell align="left">BRAND</TableCell>
                    <TableCell align="left">EXPORT/IMPORT</TableCell>
                    <TableCell align="right">ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                {/* Table Heade Code Starts */}
                {/* Table Body Code Starts */}
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">
                        <span className="chip-class">{row.kind}</span>
                      </TableCell>
                      <TableCell align="left">{row.brand}</TableCell>
                      <TableCell align="left">
                        <span>
                          <i className="lni lni-upload table-icon"></i>
                        </span>
                        <span>
                          <i className="lni lni-download"></i>
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        <span>
                          <i className="lni lni-pencil table-icon"></i>
                        </span>
                        <span>
                          <i className="lni lni-clipboard table-icon"></i>
                        </span>
                        <span>
                          <i className="lni lni-circle-plus table-icon"></i>
                        </span>
                        <span>
                          <i className="lni lni-clipboard table-icon"></i>
                        </span>
                        <span>
                          <i className="lni lni-cross-circle"></i>
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                {/* Table Body Code Ends */}
              </Table>
            </TableContainer>
            {/* Material Table Ends */}
          </div>
          {/* Table pagination styles code starts */}
          <div className="table-card-footer">
            <div className="pagination-section">
              <i className="lni lni-arrow-left pagination-icon"></i>{" "}
              <span className="count-class">1</span>
              <span className="count">2</span>
              <i className="lni lni-arrow-right pagination-icon"></i>
              <span className="page-count">
                20 per page <i className="lni lni-chevron-up"></i>
              </span>
            </div>
          </div>
          {/* Table pagination styles code Ends */}
        </div>
        {/* Table Card Ends */}
      </div>
    );
  }
}
export default Dialogue;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";

function Result() {
  const [data, setData] = React.useState([
    {
      vendor: "Abusix",
      status: "Clean",
      associated: "Acronis",
      community: "Clean",
    },
    // Thêm các dòng dữ liệu khác
  ]);

  // Thêm hàm để cập nhật dữ liệu mới
  const handleReanalyze = () => {
    // Ví dụ: thêm một dòng dữ liệu mới
    setData((prevData) => [
      ...prevData,
      {
        vendor: "NewVendor",
        status: "Pending",
        associated: "Unknown",
        community: "Pending",
      },
    ]);
  };

  return (
    <div>
      <Typography variant="h5">
        No security vendors flagged this URL as malicious
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <TextField
          label="URL"
          defaultValue="https://www.youtube.com/"
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleReanalyze}
          style={{ marginTop: "10px" }}
        >
          Reanalyze
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Security Vendor Analysis</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">Associations</TableCell>
              <TableCell align="right">Community</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.vendor}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.associated}</TableCell>
                <TableCell align="right">{row.community}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Result;

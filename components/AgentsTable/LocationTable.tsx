import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination, IconButton } from "@mui/material";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const LocationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const List = [
    {
      id: "1",
      location: "Jane Cooper",
      addedDate: "5/7/21",
      status: "active",
      action: "",
    },
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{
            "&.MuiTableRow-root:hover": {
              backgroundColor: "#FFFF !important",
            },
            "& .Mui-selected": {
              backgroundColor: "rgba(76, 175, 80, 0.5) !important",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                  LOCATION
                </span>
              </TableCell>
              <TableCell align="center">
                <span className="text-xs font-semibold text-[#64748B]">
                  ADDED ON
                </span>
              </TableCell>
              <TableCell align="center">
                <span className="text-xs font-semibold text-[#64748B]">
                  STATUS
                </span>
              </TableCell>
              <TableCell align="right">
                <span className="text-xs font-semibold text-[#64748B]">
                  ACTION
                </span>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {List.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage,
            ).map((item) => (
              <TableRow key={item.id}>
                <TableCell width="25%">
                  <Link href={`/agents/${item.id}`} passHref>
                    <span className="text-xs font-semibold text-[#64748B]">
                      {item?.location}
                    </span>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <span className="text-xs font-semibold text-[#64748B]">
                    {item.addedDate}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span
                    className={`rounded-md px-[.5rem] py-[.4rem] text-xs font-semibold capitalize ${
                      item.status === "active"
                        ? "bg-[#ECFDF5] text-[#064E3B]"
                        : "bg-[#FEF2F2] text-[#991B1B]"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <MoreVertIcon
                      style={{
                        transform: "rotate(90deg)",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={List.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default LocationTable;

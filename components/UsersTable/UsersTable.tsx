import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

const UsersTable = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const usersList = [
    {
      id: "12432456",
      name: "Jane Cooper",
      regDate: "5/7/21",
      status: "active",
      location: "Molete",
    },
    {
      id: "34347843",
      name: "Adebayo Sunday",
      regDate: "23/7/23",
      status: "suspended",
      location: "Bodija",
    },
  ];

  const handleCheckboxChange = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

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
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{
            "&.MuiTableRow-root:hover": {
              backgroundColor: "#ffff !important",
            },
            "& .Mui-selected": {
              backgroundColor: "rgba(76, 175, 80, 0.5) !important",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                {selected.length > 0 && (
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                  USER REFERENCE
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                  NAME
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                  REG DATE
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                  STATUS
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                  PRIMARY LOCATION
                </span>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow
                  key={item.id}
                  selected={isSelected(item.id)}
                  onClick={() => handleCheckboxChange(item.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected(item.id)}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                      sx={{
                        color: "#DDDDDD",
                        "&.Mui-checked": {
                          color: "green",
                          backgroundColor: "#fff", // Set checked background color to #fff
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                  <span className="text-xs font-semibold text-[#64748B]">
                  {item.id}
                </span></TableCell>
                  <TableCell>
                    <Link href={`/users/${item.id}`}>
                    <span className="text-xs font-semibold text-[#64748B]">
                    {item.name}
                </span>
                    </Link>
                  </TableCell>
                  <TableCell>{item.regDate}</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-md px-[.5rem] py-[.2rem] text-xs font-semibold capitalize ${
                        item.status === "active"
                          ? "bg-[#ECFDF5] text-[#064E3B]"
                          : "bg-[#FEF2F2] text-[#991B1B]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                  <span className="text-xs font-semibold text-[#64748B]">
                  {item.location}
                </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`h-[1.9rem] w-[6.6rem] text-xs font-semibold rounded-sm px-[1.7rem] py-[.5rem] ${
                        item.status === "suspended"
                          ? "bg-[#52ADA2] text-white"
                          : "bg-slate-50 text-slate-400"
                      }`}
                    >
                      {item.status === "suspended" ? "Activate" : "Suspend"}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={usersList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default UsersTable;

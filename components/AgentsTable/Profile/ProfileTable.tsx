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
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProfileTable = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const usersList = [
    {
      id: "12432456",
      name: "Jane Cooper",
      whatsap:'08071798413',
      email:'tope@gmail.com',
      regDate: "5/7/21",
      status: "active"
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
                REQUEST ID
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                NAME
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                WHATSAPP
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
             EMAIL
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                REQUEST DATE
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-semibold text-[#64748B]">
                STATUS
                </span>
              </TableCell>
             
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
                  <TableCell>
                  <span className="text-xs font-semibold text-[#64748B]">
                  {item.whatsap}
                </span>
                  </TableCell>
                  <TableCell>
                  <span className="text-xs font-semibold text-[#64748B]">
                  {item.email}
                </span>
                  </TableCell>
                  <TableCell>
                  <span className="text-xs font-semibold text-[#64748B]">
                  {item.regDate}
                </span>
                  </TableCell>
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

export default ProfileTable;

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import { Button, IconButton, TablePagination } from "@mui/material";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

const OverviewTable = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const agentsList = [
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

  const router = useRouter();

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
    <>
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
                  AGENT ID
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
            {agentsList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow
                  key={item.id}
                  selected={isSelected(item.id)}
                  onClick={() => handleCheckboxChange(item.id)}
                  sx={{
                    backgroundColor: isSelected(item.id) ? "#FFFF" : "#ffff",
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
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
                    <span className="text-xs font-semibold text-[#191D23]">
                      {item.id}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Link href={`/agents/${item.id}`} passHref>
                      <span className="text-xs font-semibold text-[#64748B]">
                        {item.name}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-semibold text-[#64748B]">
                      {item.regDate}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`rounded-md px-[.5rem] py-[.4rem]  text-xs font-semibold  capitalize ${
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
                    <button
                      className={`h-[2.2rem] w-[7rem] rounded-sm px-[1.7rem] py-[.5rem] ${item.status === "suspended" ? "bg-[#52ADA2] text-white" : "bg-slate-50 text-slate-400"}`}
                      onClick={() => {
                        // Your logic to handle the button click
                        console.log(`Button clicked for ${item.name}`);
                      }}
                    >
                      {item.status === "suspended" ? "Activate" : "Suspend"}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={agentsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default OverviewTable;

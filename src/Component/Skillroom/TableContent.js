import * as React from "react";
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
} from "@fluentui/react-icons";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  Avatar,
  makeStyles,
} from "@fluentui/react-components";

// Styles
const useStyles = makeStyles({
  table: {
    minWidth: "510px",
    borderCollapse: "collapse",
  },
  headerCell: {
    backgroundColor: "#f3f2f2",
    fontWeight: "bold",
  },
  row: {
    "&:hover": {
      backgroundColor: "#eaeaea",
    },
  },
  cell: {
    padding: "10px",
    border: "1px solid #ddd",
  },
});

const items = [
    {
      file: { label: "Meeting notes", icon: <DocumentRegular /> },
      author: { label: "Max Mustermann", status: "available" },
      lastUpdated: { label: "7h ago", timestamp: 1 },
      lastUpdate: {
        label: "You edited this",
        icon: <EditRegular />,
      },
    },
    {
      file: { label: "Thursday presentation", icon: <FolderRegular /> },
      author: { label: "Erika Mustermann", status: "busy" },
      lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
      lastUpdate: {
        label: "You recently opened this",
        icon: <OpenRegular />,
      },
    },
    {
      file: { label: "Training recording", icon: <VideoRegular /> },
      author: { label: "John Doe", status: "away" },
      lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
      lastUpdate: {
        label: "You recently opened this",
        icon: <OpenRegular />,
      },
    },
    {
      file: { label: "Purchase order", icon: <DocumentPdfRegular /> },
      author: { label: "Jane Doe", status: "offline" },
      lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
      lastUpdate: {
        label: "You shared this in a Teams chat",
        icon: <PeopleRegular />,
      },
    },
  ];
  
  const columns = [
    { columnKey: "file", label: "File" },
    { columnKey: "author", label: "Author" },
    { columnKey: "lastUpdated", label: "Last updated" },
    { columnKey: "lastUpdate", label: "Last update" },
  ];

export const TableContent = () => {
  const classes = useStyles();

  return (
    <Table aria-label="Default table" className={classes.table}>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.columnKey} className={classes.headerCell}>
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.file.label} className={classes.row}>
            <TableCell className={classes.cell}>
              <TableCellLayout media={item.file.icon}>
                {item.file.label}
              </TableCellLayout>
            </TableCell>
            <TableCell className={classes.cell}>
              <TableCellLayout
                media={
                  <Avatar
                    aria-label={item.author.label}
                    name={item.author.label}
                  />
                }
              >
                {item.author.label}
              </TableCellLayout>
            </TableCell>
            <TableCell className={classes.cell}>{item.lastUpdated.label}</TableCell>
            <TableCell className={classes.cell}>
              <TableCellLayout media={item.lastUpdate.icon}>
                {item.lastUpdate.label}
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

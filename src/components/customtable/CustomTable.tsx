import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    Collapse,
    Paper,
    Typography,
    Checkbox,
    Box,
} from "@mui/material";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { ICustomTableProps } from "./CustomTableTypes";
import { visuallyHidden } from '@mui/utils';
import { useCustomTableViewModel } from "./CustomTableViewModel";

export function CustomTable({ headers, rows }: ICustomTableProps) {
    const { itemsSelected, handleSelectedItem } = useCustomTableViewModel();

    return (
        <TableContainer component={Paper}>
            <Table aria-label={`table-${headers.label}`}>
                <TableRow>
                    <TableHead>
                        {headers.checkbox && (
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                />
                            </TableCell>
                        )}
                        {headers.headersCell.map((headerCell) => (
                            <TableCell
                                key={headerCell.id}
                                align={headerCell.numeric ? "center" : "left"}
                                padding={headerCell.disablePadding ? "none" : "normal"}
                                sortDirection={headers.orderBy === headerCell.id ? headers.order : false}
                            >
                                <Typography>
                                    {headerCell.label}
                                </Typography>
                                {headers.orderBy === headerCell.id && (
                                    <Box component="span" sx={visuallyHidden}>
                                        {headers.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                )}
                            </TableCell>
                        ))}
                    </TableHead>
                </TableRow>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={row.id ?? rowIndex}>
                            {headers.checkbox && (
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        checked={itemsSelected.includes(row.id)}
                                        onChange={() => handleSelectedItem(row.id)}
                                    />
                                </TableCell>
                            )}

                            {headers.headersCell.map((headerCell) => (
                                <TableCell
                                    key={headerCell.id}
                                    align={headerCell.numeric ? "center" : "left"}
                                    padding={headerCell.disablePadding ? "none" : "normal"}
                                >
                                    {String(row[headerCell.id as keyof typeof row] ?? "")}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
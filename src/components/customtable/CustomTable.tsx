import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    // Collapse,
    Paper,
    Typography,
    Checkbox,
    Box,
} from "@mui/material";
import { ICustomTableProps, Order } from "./CustomTableTypes";
import { visuallyHidden } from '@mui/utils';
import { useCustomTableViewModel } from "./CustomTableViewModel";
import { useState } from "react";

export function CustomTable(props: ICustomTableProps) {
    const { itemsSelected, handleSelectedItem, localRows, setLocalRows } = useCustomTableViewModel(props);
    const { headers, checkbox, ariaLabel } = props;
    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<string>("");

    return (
        <TableContainer component={Paper}>
            <Table aria-label={`table-${ariaLabel}`}>
                <TableRow>
                    <TableHead>
                        {checkbox && (
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                />
                            </TableCell>
                        )}
                        {headers.map((headerCell) => (
                            <TableCell
                                key={headerCell.rowId}
                                sortDirection={
                                    orderBy === headerCell.rowId ?
                                        order : false
                                }
                                onClick={() => {
                                    setOrderBy(headerCell.rowId);
                                    setOrder((prev) => prev === "asc" ? "desc" : "asc");
                                }}
                            >
                                <Typography>
                                    {headerCell.label}
                                </Typography>
                                {orderBy === headerCell.rowId && (
                                    <Box component="span" sx={visuallyHidden}>
                                        {
                                            order === 'desc' ?
                                                'sorted descending' : 'sorted ascending'
                                        }
                                    </Box>
                                )}
                            </TableCell>
                        ))}
                    </TableHead>
                </TableRow>
                <TableBody>
                    {localRows.map((row) => (
                        <TableRow
                            key={row.id}
                            hover
                        // onClick={row.onClick}
                        // sx={{ cursor: row.onClick ? "pointer" : "default" }}
                        >
                            {checkbox && (
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        checked={itemsSelected.includes(row.id)}
                                        onChange={() => handleSelectedItem(row.id)}
                                    />
                                </TableCell>
                            )}

                            {headers.map((headerCell, headerIndex) => {

                                return (
                                    <TableCell
                                        key={headerIndex}
                                    >
                                        {headerCell.type === "boolean" ?
                                            (
                                                <Checkbox
                                                    color="primary"
                                                    checked={Boolean(row[headerCell.rowId])}
                                                />
                                            )
                                            :
                                            (
                                                <Typography component="p">
                                                    {String(row[headerCell.rowId] ?? "")}
                                                </Typography>
                                            )}

                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}
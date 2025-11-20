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

    const handleSort = (field: string) => {
        const isAsc = orderBy === field && order === "asc";

        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(field);

        const sorted = [...localRows].sort((a, b) => {
            const valueA = a[field];
            const valueB = b[field];

            if (valueA < valueB) return isAsc ? -1 : 1;
            if (valueA > valueB) return isAsc ? 1 : -1;
            return 0;
        });

        setLocalRows(sorted);
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label={`table-${ariaLabel}`}>
                <TableHead>
                    <TableRow>
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
                                onClick={() => handleSort(headerCell.rowId)}
                                sx={{
                                    cursor: "pointer",
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
                    </TableRow>
                </TableHead>
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
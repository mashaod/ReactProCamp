import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const headRows = [
    { id: 'home-team',      align:'right',  label: 'Home team' },
    { id: 'home-team-logo', align:'right',  label: '' },
    { id: 'score',          align:'center', label: 'Score' },
    { id: 'away-team-logo', align:'left',   label: '' },
    { id: 'away-team',      align:'left',   label: 'AwayTeam' },
    { id: 'date',           align:'right',  label: 'Date' },
    { id: 'status',         align:'left',   label: 'Status' },
    { id: 'details',        align:'center',  label: 'Details' }
];

export function FixturesTableHeader() {
    return (
        <TableHead>
            <TableRow>
                {headRows.map(row => (
                    <TableCell key={row.id} align={row.align}>
                        {row.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
};
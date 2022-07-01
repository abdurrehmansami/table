import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from './BasicTable';
import StickyHeadTable from './BigTable';

export default function BoxSx() {
    return (
        <>
            {/* <Box
                sx={{
                    width: 700,
                    height: 700,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    }}
                }
            >
                
                <BasicTable />
            </Box> */}
            <StickyHeadTable />

        </>
    );
}


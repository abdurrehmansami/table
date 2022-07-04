import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from './BasicTable';
import CustomPaginationActionsTable from './BigTable';
import zIndex from '@mui/material/styles/zIndex';
import StickyHeadTable from './StickyTable';
import StickyHeadTable2 from './StickyTable(2)';

export default function BoxSx() {
    return (
        <>
            <div className='flexbox-container'>
                <div><StickyHeadTable /> </div>
                {/* <div><StickyHeadTable2 /></div> */}
            </div>
        </>
    );
}


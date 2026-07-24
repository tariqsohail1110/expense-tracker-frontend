import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationComponent() {
    const totalPages = 25;
    return (
        <div className='flex flex-row justify-center items-center'>
            <Stack spacing={2}>
                <Pagination count={totalPages} color='' />
            </Stack>
        </div>
    )
}

export default PaginationComponent
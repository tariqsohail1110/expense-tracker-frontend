import React, { useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ArrowUpDown, ChevronLeft, Search, ChevronRight, ChevronsLeft, ChevronsRight, Edit, Trash, Download } from 'lucide-react';
import { Button } from '../index.js';
import data from '../../common/data.json';
import { convert } from '../../common/functions.js';

const mockData = data;

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor('id', {
        cell: (info) => info.getValue(),
        header: () => (
            <h1>ID</h1>
        )
    }),

    columnHelper.accessor('title', {
        cell: (info) => info.getValue(),
        header: () => (
            <h1>Title</h1>
        )
    }),

    columnHelper.accessor('amount', {
        cell: (info) => convert(info.getValue()),
        header: () => (
            <h1>Amount</h1>
        )
    }),

    columnHelper.accessor('category', {
        cell: (info) => info.getValue(),
        header: () => (
            <h1>Category</h1>
        )
    }),

    columnHelper.accessor('date', {
        cell: (info) => info.getValue(),
        header: () => (
            <h1>Date</h1>
        )
    }),

    // columnHelper.accessor('note', {
    //     cell: (info) => info.getValue(),
    //     heder: () => (
    //         <h1>Note</h1>
    //     )
    // }),
    {
        id: 'actions',
        header: 'Actions',
        enableSorting: false,
        cell: () => (
            <>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <Button 
                            textColor='text-emerald-500' 
                            bgColor='' 
                            rounded='' 
                            className='hover:text-emerald-800 duration-200 text-xs !p-0
                            dark:text-lime-500 dark:hover:text-lime-300'
                        >
                            <Edit/>
                        </Button>
                    </div>
                    <div>
                        <Button 
                            textColor='text-red-500' 
                            bgColor='' 
                            rounded='' 
                            className='hover:text-red-800 duration-200 text-xs !p-0
                            dark:hover:text-red-300'
                        >
                            <Trash />
                        </Button>
                    </div>
                </div>
            </>
        )
    }
];

function Expenses() {
    const [data] = useState(() => [...mockData]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter
        },
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    return (
        <div className='bg-white rounded-lg shadow-lg p-6 my-6 font-sans duration-500
        dark:bg-zinc-700'>
            <div className='flex items-center gap-4 mb-4'>
                <div className='relative w-5/6'>
                    <input
                        value={globalFilter ?? ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder='Search...'
                        className='w-full pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm text-md h-10 duration-500 dark:bg-zinc-700 dark:text-white dark:border-zinc-600'
                    />
                    <Search
                        className='absolute left-3 top-2 text-gray-400'
                    />
                </div>
                <div className='flex-1'>
                    <Button
                        bgColor='bg-slate-800'
                        textColor='text-white'
                        className='hover:bg-slate-700 font-bold duration-200 w-full dark:bg-lime-500
                        dark:text-zinc-900 dark:hover:bg-lime-300 flex gap-2 items-center'
                    >
                        <Download size={20}/>Download .xlsx
                    </Button>
                </div>
            </div>
            <div className='overflow-x-auto rounded-md'>
                <table className='min-w-full divide-y divide-green-200 duration-500 dark:divide-lime-500'>
                    <thead className='bg-emerald-300 duration-500 dark:bg-lime-500'>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className='px-6 py-3 text-left text-xs font-black text-emerald-800 uppercase tracking-wider duration-500
                                        dark:text-zinc-900'
                                    >
                                        <div
                                            {...{
                                                className: `flex items-center ${header.column.getCanSort()
                                                ? 'cursor-pointer select-none flex items-center'
                                                : ''}`,
                                                onClick: header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined,
                                            }}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {header.column.getCanSort() && (
                                                <ArrowUpDown className='ml-2' size={14} />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className='divide-y divide-gray-200 duration-500 dark:divide-zinc-600'>
                        {table.getRowModel().rows.map((row) => (
                            <tr 
                                key={row.id}
                                className='hover:bg-gray-50 duration-500 dark:hover:bg-gray-600'
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 duration-500 dark:text-white'
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-700'>
                <div className='flex items-center mb-4 sm:mb-0'>
                    <span className='mr-2 dark:text-white'>
                        Items per page
                    </span>
                    <select
                        className='border border-gray-300 rounded-md shadow-sm dark:bg-zinc-700 dark:text-white dark:border-zinc-600'
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 15, 20, 30].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex items-center space-x-2'>
                    <Button 
                        bgColor='bg-gray-100'
                        textColor='text-gray-600'
                        className='p-2 hover:bg-gray-200 disabled:opacity-50 dark:bg-zinc-600
                        dark:text-white dark:hover:bg-zinc-400'
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronsLeft size={20} />
                    </Button>
                    <Button 
                        bgColor='bg-gray-100'
                        textColor='text-gray-600'
                        className='p-2 hover:bg-gray-200 disabled:opacity-50 dark:bg-zinc-600
                        dark:text-white dark:hover:bg-zinc-400'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft size={20} />
                    </Button>
                    <span className='flex items-center'>
                        <input
                            min={1}
                            max={table.getPageCount()}
                            type='number'
                            value={table.getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                table.setPageIndex(page);
                            }}
                            className='w-16 p-2 rounded-md border border-gray-300 text-center
                            dark:bg-zinc-700 dark:border-zinc-600 dark:text-white'
                        />
                        <span className='ml-1 dark:text-white'>of {table.getPageCount()}</span>
                    </span>
                    <Button 
                        bgColor='bg-gray-100'
                        textColor='text-gray-600'
                        className='p-2 hover:bg-gray-200 disabled:opacity-50 dark:bg-zinc-600
                        dark:text-white dark:hover:bg-zinc-400'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight size={20} />
                    </Button>
                    <Button 
                        bgColor='bg-gray-100'
                        textColor='text-gray-600'
                        className='p-2 hover:bg-gray-200 disabled:opacity-50 dark:bg-zinc-600
                        dark:text-white dark:hover:bg-zinc-400'
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronsRight size={20} />
                    </Button>
                </div>
                
            </div>
        </div>
    );
}

export default Expenses;
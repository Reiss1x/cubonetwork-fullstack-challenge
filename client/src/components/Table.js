import React from 'react'
import { useTable } from 'react-table'
import TableData from './TableData'

export default function Table({ data }) {
    
  return (
    <div>
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Participation</th>
                    </tr>
                </thead>
                <tbody>
                    <TableData users={data}></TableData>
                </tbody>
                
            </table>
        </div>
    </div>
  )
}

import React from 'react'
import { Table } from 'react-bootstrap'

export default function DetailsReservation() {
  return (
    <div>




<p>Detais reservation</p>
  
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}></td>
          <td></td>
        </tr>
      </tbody>
    </Table>








    </div>
  )
}

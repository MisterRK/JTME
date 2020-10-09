import React from 'react'
import './JobsTable.scss'
// Bootstrap Imports
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/Container"

function JobsTable(){
   return(
      <>
         <div id="jobs">Jobs table component</div>
         <Container>

            <Table id="jobs-table" striped bordered hover>
               <thead id="job-table-header">
                  <tr>
                     <th>Company Name</th>
                     <th>Job Title</th>
                     <th>Last Date of Contact</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Flatiron School</td>
                     <td>Front End Developer</td>
                     <td>09/27/20290</td>
                     <td> Warm</td>
                  </tr>
                  <tr>
                     <td>Flatiron School</td>
                     <td>Front End Developer</td>
                     <td>09/27/20290</td>
                     <td> Warm</td>
                  </tr>
                  <tr>
                     <td>Flatiron School</td>
                     <td>Front End Developer</td>
                     <td>09/27/20290</td>
                     <td> Warm</td>
                  </tr>
               </tbody>
            </Table>
         </Container>
      </>
   )
}

export default JobsTable
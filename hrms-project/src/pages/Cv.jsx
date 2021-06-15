import React, { useEffect, useState } from 'react'
import CvService from '../services/cvService'
import { Table } from 'semantic-ui-react'




export default function Cv() {

    const [cv, setCv] = useState([])

    useEffect(() => {
        let cvService = new CvService()
        cvService.getCv().then(result => setCv(result.data.data))
    })

    return (
        <div>
                <Table color="violet" inverted celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Github</Table.HeaderCell>
                            <Table.HeaderCell>LinkedIn</Table.HeaderCell>
                            <Table.HeaderCell>Knowledge</Table.HeaderCell>
                            <Table.HeaderCell>Cover Letter</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {cv.map(cv=>(
                        <Table.Row key={cv.id}>
                        <Table.Cell>{cv.employees.firstName}</Table.Cell>
                        <Table.Cell>{cv.linkedinAddress}</Table.Cell>
                        <Table.Cell>{cv.programmingLanguage}</Table.Cell>
                        <Table.Cell>{cv.coverLetter}</Table.Cell>
                    </Table.Row>
                    ))}
                           
                    </Table.Body>
                    <Table.Footer>
                </Table.Footer>
                </Table>

        </div>
    )
}

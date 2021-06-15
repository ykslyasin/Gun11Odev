import React, { useState , useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisement() {

    const [adverts, setAdverts] = useState([])

    useEffect(()=>{
      let jobAdvertisementService = new JobAdvertisementService()
      jobAdvertisementService.getJobAdverts().then(result=>setAdverts(result.data.data))
    })


    return (
        <div>
            <Table celled inverted>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Şirket adı</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma yeri</Table.HeaderCell>
                        <Table.HeaderCell>Maaş</Table.HeaderCell>
                        <Table.HeaderCell>İletişim numarası</Table.HeaderCell>
                        <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        adverts.map(adverts => (
                            <Table.Row key={adverts.id}>
                                <Table.Cell>{adverts.positions.positions}</Table.Cell>
                                <Table.Cell>{adverts.employers.companyName}</Table.Cell>
                                <Table.Cell>{adverts.city.cityName}</Table.Cell>
                                <Table.Cell>{adverts.minPayment}-{adverts.maxPayment}</Table.Cell>
                                <Table.Cell>{adverts.employers.phoneNumber}</Table.Cell>
                                <Table.Cell>{adverts.applicationDeadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                </Table.Footer>
            </Table>
        </div>
    )
}

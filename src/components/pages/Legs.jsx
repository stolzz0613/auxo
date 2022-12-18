import React, { useState, useEffect } from 'react'
import MainTemplate from '@templates/MainTemplate'
import { Card, Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLegs } from '@slices/legsSlice'
import { selectedLegs } from '../../redux/slices/legsSlice'
import AgentIcons from '../../assets/icons/AgentIcons'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'

const component_name = 'p-legs'

export default function Legs() {
  const dispatch = useDispatch();
  const {value, data} = useSelector(selectedLegs)

  useEffect(() => {
    dispatch(fetchLegs({ value }))
  }, [])

  return (
    <MainTemplate>
      <div className={component_name}>
        { data &&
          data.map(c =>
            <Card
              title={
                <Row align='middle'>
                  <Col >
                    <AgentIcons name={c['airline_id']}/>
                  </Col>
                  <Col>
                    {c['airline_name']}
                  </Col>
                </Row>
              }
              extra={<a href="#">{c.id}</a>}
              style={{ width: 500 }}
            >
              <p>AIRLINE ID: {c['airline_id']}</p>
              <Row justify='space-evenly'>
                <Col span={12} align='middle'>
                  <p>{c['departure_airport']}</p>
                  <div className={`${component_name}__departure`}>
                    <span className={`${component_name}__departure--icon`}>
                      <AirplanemodeActiveIcon/>
                    </span>
                    <p>
                      {c['departure_time']}
                    </p>
                  </div>
                  <p>Stops: {c.stops}</p>
                </Col>
                <Col span={12} align='middle'>
                  <p>{c['departure_airport']}</p>
                  <div className={`${component_name}__departure`}>
                    <span className={`${component_name}__departure--icon`}>
                      <AirplanemodeActiveIcon/>
                    </span>
                    <p>
                      {c['departure_time']}
                    </p>
                  </div>
                  <p>Stops: {c.stops}</p>
                </Col>
              </Row>
            </Card>
          )
        }
      </div>
    </MainTemplate>
  )
}

import React from 'react'
import { Col, Input, Row } from 'antd'
import FilterMenu from './FilterMenu'
import { SearchOutlined } from '@ant-design/icons'
import FligthTable from '@atoms/FligthTable'
import { useDispatch, useSelector } from 'react-redux'
import { filterById, selectItineraries } from '@slices/itinerariesSlice'

const component_name = 'm-fligthList';

export default function FligthList() {
  const dispatch = useDispatch();
  let {value, filtered, isFiltering} = useSelector(selectItineraries)

  return (
    <div className={component_name}>
      <Row >
        <Col span={8}>
          <Input
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
            onChange={e => dispatch(filterById(e.target.value))}
          />
        </Col>
        <Col>
          <FilterMenu />
        </Col>
      </Row>
      <Row className={`${component_name}__label`}>
        <p>Select the itinerary from the list below</p>
      </Row>
      <Row align='middle'>
        <Col span={24}>
          <FligthTable data={isFiltering ? filtered : value}/>
        </Col>
      </Row>
    </div>
  )
}

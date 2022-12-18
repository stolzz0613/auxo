import React from 'react'
import { Button, Dropdown } from 'antd'
import { useDispatch } from 'react-redux'
import { orderById, orderByPrice, orderByRate } from '@slices/itinerariesSlice'
import {
  FilterOutlined,
  SmileOutlined,
  PoundCircleOutlined,
  StarOutlined,
} from '@ant-design/icons'

const component_name = 'm-fligthList'

export default function FilterMenu() {
  const dispatch = useDispatch()
  const items = [
    {
      key: '1',
      label: (
        <a
          href="#"
          onClick={() => dispatch(orderById())}
          className={`${component_name}__icon--menu`}
        >
          <SmileOutlined />
          By Id, Low to High
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            dispatch(orderByPrice())
          }}
          className={`${component_name}__icon--menu`}
        >
          <PoundCircleOutlined />
          Price, Low to High
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            dispatch(orderByRate())
          }}
          className={`${component_name}__icon--menu`}
        >
          <StarOutlined />
          Rate, High to Low
        </a>
      ),
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="right">
      <Button className={`${component_name}__button`} size="large">
        <FilterOutlined className={`${component_name}__icon`} />
      </Button>
    </Dropdown>
  )
}

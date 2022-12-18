import React, { useState } from 'react';
import { Col, Row, Table } from 'antd';
import AgentIcons from '@assets/icons/AgentIcons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLegs } from '@slices/legsSlice';
import { changeFilter } from '@slices/itinerariesSlice';

const component_name = 'a-table';
const columns = [
  {
    title: 'Id Itinerarie',
    dataIndex: 'id',
  },
  {
    title: 'Price',
    dataIndex: 'price'
  },
  {
    title: 'Agent',
    dataIndex: 'agent',
    render: (agent) => (
      <Row justify='start'>
        <Col offset={6}>
          <AgentIcons name={agent}/>
        </Col>
        <Col offset={4}>
          {agent}
        </Col>
      </Row>
    )
  },
  {
    title: 'Agent Raking',
    dataIndex: 'agent_rating'
  }
];

const FligthTable = ({ data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={component_name}>
      <Table
        rowSelection={{selectedRowKeys}}
        columns={columns}
        dataSource={data}
        onRow={(content, rowIndex) => {
          return {
            onClick: () => {
              setSelectedRowKeys([rowIndex])
              dispatch(selectLegs(content.legs))
              dispatch(changeFilter())
              navigate('/legs')
            },
          };
        }}
        pagination={false}
      />
    </div>
  );
};
export default FligthTable;
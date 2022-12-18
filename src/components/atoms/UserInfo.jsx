import { Avatar, Col, Row } from 'antd'
import React from 'react'
import { UserOutlined, QuestionOutlined } from '@ant-design/icons'

const component_name = 'a-userInfo'

const UserInfo = () => {
  return (
    <Col span={12}>
      <Row type="flex" className={component_name}>
        <Col span={2}>
          <Avatar size={24} icon={<UserOutlined />} />
        </Col>
        <Col span={6}>
          <p>Pepe Ladino</p>
        </Col>
        <Col span={2}>
          <QuestionOutlined />
        </Col>
      </Row>
    </Col>
  )
}
export default UserInfo;
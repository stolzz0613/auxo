import React from 'react'
import { Button, Col, Row, Space } from 'antd';
import Logo from '@assets/logo.png'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='p-home'>
      <Space>
          <Row gutter={[16, 128]}>
            <Col align='center' span={24}>
              <img src={Logo} />
            </Col>
            <Col align='center' span={24}>
              <Link to={'/fligths'}>
                <Button type="primary">Start</Button>
              </Link>
            </Col>
          </Row>
      </Space>
    </div>
  )
}

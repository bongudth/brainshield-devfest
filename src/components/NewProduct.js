import React from 'react'
import { Form, Input, Button, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
}

const NewProduct = () => {
  return (
    <Form
      layout="vertical"
      style={{ margin: "2rem 20rem" }}
    >
      <Form.Item label="Name">
        <Input placeholder="Name of product" />
      </Form.Item>
      <Form.Item label="Link repository">
        <Input placeholder="Link repository" />
      </Form.Item>
      <Form.Item label="Description">
        <Input placeholder="Description" />
      </Form.Item>
      <Form.Item label="Images">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default NewProduct

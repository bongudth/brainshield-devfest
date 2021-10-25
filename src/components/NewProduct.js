import React from 'react'
import "../assets/scss/NewProduct.scss"
import { Form, Input, Select, Upload, Button } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const NewProduct = () => {
  const [form] = Form.useForm()
  const { Option } = Select

  const normFile = (e) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${label} is required!'
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      validateMessages={validateMessages}
      className="new-product-container"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Input your product's name..." />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
      >
        <Input.TextArea placeholder="Input product's description..." />
      </Form.Item>
      <Form.Item
        name="topic"
        label="Topic"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          value="Art"
        >
          <Option value="art">Art</Option>
          <Option value="music">Music</Option>
          <Option value="blog">Blog</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="File"
        name="files"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Upload.Dragger name="dragger" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default NewProduct

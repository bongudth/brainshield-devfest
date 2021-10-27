/* eslint-disable */
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "../assets/scss/NewProduct.scss";
import { Form, Input, Select, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const NewProduct = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const [nameState, setNameState] = useState("");
    const [descriptionState, setDescriptionState] = useState("");
    const [topicState, setTopicState] = useState("");
    const [bufferState, setBufferState] = useState("");

    const normFile = (e) => {
        // console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const validateMessages = {
        // eslint-disable-next-line no-template-curly-in-string
        required: "${label} is required!",
    };

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    const onChangeName = (event) => {
        setNameState(event.target.value);
    };

    const onChangeDescription = (event) => {
        console.log(event.target.value);
        setDescriptionState(event.target.value);
    };

    const onChangeTopic = (value) => {
        console.log(value);
        setTopicState(value);
    };

    const uploadHandler = (file) => {
        const reader = new window.FileReader();
        // console.log(file);
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setBufferState(Buffer(reader.result));
        };
        console.log(bufferState);

        // Prevent upload
        return false;
    };

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
                <Input
                    onChange={onChangeName}
                    placeholder="Input your product's name..."
                />
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.TextArea
                    onChange={onChangeDescription}
                    placeholder="Input product's description..."
                />
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
                <Select onChange={onChangeTopic} defaultValue="Art">
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
                <Upload.Dragger
                    name="dragger"
                    action="/upload.do"
                    accept=".png, .jpg, .jpeg"
                    beforeUpload={uploadHandler}
                    multiple={false}
                    maxCount={1}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                        Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                    </p>
                </Upload.Dragger>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default NewProduct;

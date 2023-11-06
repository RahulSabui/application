import React, { useState } from "react";
import {
  // Form,
  Input,
  DatePicker,
  Upload,
  Select,
  // Button,
  Row,
  Col,
  Typography,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Modal, Button, Form } from 'react-bootstrap';

import { format } from 'date-fns';
const { Option } = Select;
const { Dragger } = Upload;
const { Title } = Typography;
const initialState = {
  name: "",
  date: "",
  sex: "",
  qualification: "",
  logo: "",
};
const MyForm = () => {
  const [values, setValues] = useState(initialState);

  const handleInput = (e)=>{
    // console.log(e);
    setValues({ ...values, [e.target.name]: e.target.value })
  }

console.log(values);

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col
        span={12}
        style={{
          border: "1px solid #d9d9d9",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Title level={3}>Form</Title>
        <Form>
          <div className="row">
            <div className="col-8">
            <Form.Group controlId="name">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  // value={values.title}
                  onChange={handleInput}
                  required
                />
                {/* <Form.Text className="text-danger">{errors.title}</Form.Text> */}
              </Form.Group>
            </div>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default MyForm;

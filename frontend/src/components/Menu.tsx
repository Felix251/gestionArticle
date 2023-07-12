import React, { useState } from "react";
import { Button, Card, Col, Form, Modal, Row, Select, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import "../styles/style.css";
import { User } from "./Interface";

const { Option } = Select;

export const Menu = () => {
  const defaultUsers: User[] = [
    {
      id: 1,
      name: "Bob",
      address: "Dublin",
      age: "26",
      profession: "Software Engineer",
      interestRate: "4",
    },
    {
      id: 2,
      name: "John",
      address: "Galway",
      age: "24",
      profession: "Software Engineer",
      interestRate: "5",
    },
  ];

  const initCurrentUser: User = {
    id: 0,
    name: "",
    address: "",
    age: "",
    profession: "",
    interestRate: "",
  };

  const [users, setUsers] = useState<User[]>(defaultUsers);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState<User>(initCurrentUser);
  const [showCreateBtn, setShowCreateBtn] = useState(true);
  const [editing, setEdit] = useState(false);
  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
    if (!editing) {
      setNewUser(initCurrentUser);
    }
  };

  const onFormSubmit = (newUser: User) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };

  const onEdit = (user: User) => {
    setEdit(true);
    setNewUser(user);
    handleShow();
  };

  const onSubmit = (newUser: User) => {
    if (editing) {
      onUpdateUser(newUser);
    } else {
      onFormSubmit(newUser);
    }
  };

  const onUpdateUser = (updatedUser: User) => {
    setEdit(false);
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const onDeleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
  };

  return (
    <Row>
      <Col span={24}>
        <Card className="customCard">
          <div className="d-flex justify-content-between customCardBody">
            <div className="d-flex">
              <Button
                className="userToggleBtn"
                type="primary"
                onClick={() => setShowCreateBtn(!showCreateBtn)}
                danger={!showCreateBtn}
              >
                Toggle Add User
              </Button>
              {showCreateBtn && (
                <Button
                  type="primary"
                  onClick={handleShow}
                  title="Add User"
                  icon={<PlusOutlined />}
                >
                  Add User
                </Button>
              )}
            </div>
          </div>
          <Table dataSource={users} bordered>
            <Table.Column title="#" dataIndex="id" key="id" />
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Address" dataIndex="address" key="address" />
            <Table.Column title="Age" dataIndex="age" key="age" />
            <Table.Column
              title="Profession"
              dataIndex="profession"
              key="profession"
            />
            <Table.Column
              title="Sport Interest Rate"
              dataIndex="interestRate"
              key="interestRate"
            />
            <Table.Column
              title="Actions"
              key="actions"
              render={(text, user: User) => (
                <>
                  <Button
                    type="primary"
                    title="Edit user details"
                    onClick={() => onEdit(user)}
                    icon={<EditOutlined />}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    type="primary"
                    title="Delete user"
                    onClick={() => onDeleteUser(user)}
                    danger
                    icon={<DeleteOutlined />}
                  >
                    Delete
                  </Button>
                </>
              )}
            />
          </Table>
        </Card>

        <Modal visible={show} onCancel={handleClose} footer={null}>
          <Form
            onFinish={(values: User) => {
              onSubmit(values);
              handleClose();
            }}
            initialValues={newUser}
          >
            <h2>{editing ? "Edit User" : "Add User"}</h2>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter name" }]}
            >
              <input className="ant-input" />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <input className="ant-input" />
            </Form.Item>
            <Form.Item label="Age" name="age">
              <input type="number" className="ant-input" />
            </Form.Item>
            <Form.Item label="Profession" name="profession">
              <input className="ant-input" />
            </Form.Item>
            <Form.Item label="Sport Interest Rate" name="interestRate">
              <Select className="ant-select">
                {rates.map((rate) => (
                  <Option key={rate} value={rate}>
                    {rate}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {editing ? "Update" : "Submit"}
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </Form.Item>
          </Form>
        </Modal>
      </Col>
    </Row>
  );
};

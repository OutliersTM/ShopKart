import { FormGroup } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";
import "./AdminPageStyles.css";

function AdminPage() {
  return (
    <div className="adminPage">
      <div className="container adminPage__inner">
        <h4>
          <strong>Add New Products</strong>
        </h4>
        <Form>
          <Form.Group className="adminPage__input">
            <Form.Control placeholder="Enter Product Name" />
            <Form.Control placeholder="Enter Product Price" />
            <Form.Control placeholder="Enter Product Rating" />
            <Form.Control placeholder="Enter Product Specs" />
            <Form.Control placeholder="Enter Product Image Url" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AdminPage;

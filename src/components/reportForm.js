import React, {useState} from 'react';
import {Formik, Field, ErrorMessage} from 'formik';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {Alert} from "react-bootstrap";

const ReportForm = () => (
    <div>

        <Formik
            initialValues={{title: '', description: ''}}
            validate={values => {
                const errors = {};
                if (!values.title) {
                    errors.title = 'this field is Required';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <Form>
                    <form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>title</Form.Label>
                            <Form.Control type="title"
                                          name="title"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.title} placeholder="enter title..."/>
                        </Form.Group>
                        <Alert className="alert" variant="danger">
                            {errors.title && touched.title && errors.title}
                        </Alert>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>description</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text"
                                          name="text"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          placeholder="enter a description..."
                                          value={values.text}/>
                        </Form.Group>
                        {errors.text && touched.text && errors.text}
                        <br/>

                        <Button className="button-send" disabled={isSubmitting} variant="primary">send</Button>
                        <Button variant="danger">cancel</Button>
                    </form>
                </Form>


            )}
        </Formik>
    </div>
);
export default ReportForm;


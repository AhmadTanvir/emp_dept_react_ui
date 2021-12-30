import React, {useState,useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid} from 'uuid';
import cors from 'cors';
import axios from 'axios';
import {
    Form,
    FormGroup,
    InputGroup,
    Label,
    Input,
    Button,
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    ButtonGroup
} from 'reactstrap';

import { Radio, RadioGroup} from 'react-radio-group';

export const AddEmployee = () => {
    const [studentList, setStudentList] = useState([]);
    useEffect(()=>{
        async function fetchStudentList(){
            try
            {
                const reqUrl = 'https://61cc1c1a198df60017aebeb5.mockapi.io/api/student';
                const res = await fetch(reqUrl);
                const resJSON = await res.json();
                console.log(resJSON);
                setStudentList(resJSON);
            }catch{

            }
        }
        fetchStudentList();
    }, []);
    const url = 'https://61cc1c1a198df60017aebeb5.mockapi.io/api/student';
    const [data, setData] = useState({
        emp_name: '',
        emp_code: '',
        student_name: '',
        emp_gender: ''
    });
    const history = useHistory();
    function submit(e)
    {
        e.preventDefault();
        axios.post(url, {
            emp_name: data.emp_name
        })
        .then(res=>{
            console.log(res.data.emp_name);
        })
        history.push('/');
    }

    function handle(e)
    {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        // console.log(newData);
    }
    // const { addDepartment } = useContext(GlobalContext);
    // const history = useHistory();
    // const onSubmit = () => {
    //     const newDepartment = {
    //         id: uuid(),
    //         name
    //     };
    //     addDepartment(newDepartment);
    //     history.push('/');
    // }
    // const onChange = (e) => {
    //     setName(e.target.value);
    // }
    return (
        <Container>
            <Card>
                <CardBody>
                    <CardHeader tag="h3" className='text-center'><strong>Add Employee</strong></CardHeader>
                    <Form onSubmit={(e)=>submit(e)}>
                        <Label></Label>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label>Employee Name</Label>
                                <Input type='text' value={data.name} 
                                onChange={(e) => handle(e)} id='emp_name' placeholder='Enter Employee Name'></Input>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label>Employee Code</Label>
                                <Input type='text' value={data.name} 
                                onChange={(e) => handle(e)} id='emp_code' placeholder='Enter Employee Code'></Input>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label>Student Name</Label>
                                <Input
                                    id="student_name"
                                    name="student_name"
                                    type="select"
                                    onChange={(e) => handle(e)}
                                    >
                                    {studentList.map(post => (
                                        <option key={post.id} value={post.name}>{post.name}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                                <Label>Choose Gender</Label>
                                <InputGroup style={{ 
                                    padding: '5px 0 0 1rem', 
                                    border: '1px solid #ced4da', 
                                    borderRadius: '3px',
                                    height: '2.3rem'}} className=''>
                                    <FormGroup check>
                                        <Input
                                            name="emp_gender"
                                            id='emp_gender'
                                            type="radio"
                                            value={'Male'}
                                            onChange={(e) => handle(e)}
                                        />
                                        <Label for='emp_gender' check>Male</Label>
                                    </FormGroup>&nbsp;&nbsp;&nbsp;
                                    <FormGroup check>
                                        <Input
                                            name="emp_gender"
                                            id='emp_gender'
                                            type="radio"
                                            value={'Female'}
                                            onChange={(e) => handle(e)}
                                        />
                                        <Label for='emp_gender' check>Female</Label>
                                    </FormGroup>
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <InputGroup style={{ 
                                        margin: '2rem 0 0 0', 
                                        padding: '5px 0 0 1rem', 
                                        border: '1px solid #ced4da', 
                                        borderRadius: '3px',
                                        height: '2.3rem'}} className=''>
                                    <FormGroup check>
                                        <Input
                                        id="checkbox2"
                                        type="checkbox"
                                        onChange={(e) => handle(e)}
                                        />
                                        <Label check>
                                            Check me out
                                        </Label>
                                    </FormGroup>
                                </InputGroup>
                            </Col>
                        </Row>
                        {/* <RadioGroup name="fruits" style={{ margin: '0 0 2rem 0' }}>
                            <Label style={{ margin: '0 2rem 0 0' }}>Department Active</Label>
                            <div className='row' style={{ display: 'flex' }}>
                                <div className="radio-button-background" style={{ flex: '0', display: 'flex' }}>
                                    <Radio value="active" name="staetus" value={staetus} onChange={onChange} className="radio-button" style={{ margin: '8px 7px 0'}} />  Active
                                </div>
                                <div className="radio-button-background" style={{ flex: '1' }}>
                                    <Radio value="inactive" name="staetus" value={staetus} onChange={onChange} className="radio-button" />  Inactive
                                </div>
                            </div>
                        </RadioGroup> */}
                        <ButtonGroup style={{ float: 'right' }}>
                            <Button type='submit'>Submit</Button>
                            <input className='btn btn-info' type="reset" value="Reset"/>
                            <Link to="/" className='btn btn-danger'>Cancel</Link>
                        </ButtonGroup>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    )
}

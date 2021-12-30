import React, {useState,useContext,useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Radio, RadioGroup} from 'react-radio-group';

export const EditUser = (props) => {
    const [selectedDepartment, setSelectedDepartment] = useState({
        id: '',
        departmentname: ''
    });
    const { departments, editDepartment } = useContext(GlobalContext);
    const history = useHistory();
    const currentDepartmentId = props.match.params.id;

    useEffect(() =>{
        const departmentId = currentDepartmentId;
        const selectedDepartment = departments.find(department => department.id === Number(departmentId))
        setSelectedDepartment(selectedDepartment)
    }, [currentDepartmentId, departments])

    const onSubmit = () => {
        editDepartment(selectedDepartment)
        history.push('/');
    }
    const onChange = (e) => {
        setSelectedDepartment({...selectedDepartment, [e.target.name]: e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Department Name</Label>
                <Input type="text" name="name" 
                value={selectedDepartment.departmentname} 
                onChange={onChange} placeholder='Enter Department Name'></Input>
            </FormGroup>
            <Button type='submit'>Update</Button>
            <Link to="/" className='btn btn-danger' style={{ margin: '0 0 0 2rem' }}>Cancel</Link>
        </Form>
    )
}

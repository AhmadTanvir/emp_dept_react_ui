import React, {useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid} from 'uuid';
import cors from 'cors';
import axios from 'axios';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Radio, RadioGroup} from 'react-radio-group';

export const AddUser = () => {
    const url = 'https://61cc1c1a198df60017aebeb5.mockapi.io/api/student';
    const [name, setName] = useState({
        name: ''
    });
    const history = useHistory();
    function submit(e)
    {
        e.preventDefault();
        axios.post(url, {
            name: name.name
        })
        .then(res=>{
            console.log(res.data.name);
        })
        history.push('/');
    }

    function handle(e)
    {
        const newData = {...name}
        newData[e.target.id] = e.target.value
        setName(newData)
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
        <Form onSubmit={(e)=>submit(e)}>
            <FormGroup>
                <Label>Department Name</Label>
                <Input type='text' value={name.name} 
                onChange={(e) => handle(e)} id='name' placeholder='Enter Department Name'></Input>
            </FormGroup>
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
            <Button type='submit'>Submit</Button>
            <Link to="/" className='btn btn-danger'>Cancel</Link>
        </Form>
    )
}

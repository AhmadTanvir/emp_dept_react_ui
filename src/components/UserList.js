import React from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button, Table } from 'reactstrap';
import PropTypes from 'prop-types';

export const UserList = (props) => {
    const {studentList} = props;
    return (
        <ListGroup className='mt-4'>
            <Table striped bordered hover>
            <thead>
                    <tr>
                    <th>#</th>
                    <th>Department Name</th>
                    {/* <th>Status</th> */}
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {studentList.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        {/* <td>{department.status}</td> */}
                        <td>
                            <Link to={`/edit/${post.id}`} className='btn btn-warning' style={{ margin: '0 1rem 0 0' }}>Edit</Link>
                            <Button  color='danger'>Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ListGroup>
    )
}

UserList.propTypes = {
    studentList: PropTypes.array,
};
UserList.defaultProps = {
    studentList:[],
};

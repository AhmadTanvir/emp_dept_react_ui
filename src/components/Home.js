import React, {useEffect, useState} from 'react';
import { Headings, headings } from './Headings'
import { UserList } from './UserList'
import { AddEmployee } from './AddEmployee'
import cors from 'cors';

export const Home = () => {
    const [studentList, setStudentList] = useState([]);
    const reloadCount = sessionStorage.getItem('reloadCount');
    useEffect(()=>{
        async function fetchStudentList(){
            try
            {
                const reqUrl = 'https://61cc1c1a198df60017aebeb5.mockapi.io/api/student';
                const res = await fetch(reqUrl);
                const resJSON = await res.json();
                console.log(resJSON);
                setStudentList(resJSON);
                if(reloadCount < 1) {
                    sessionStorage.setItem('reloadCount', String(reloadCount + 1));
                    window.location.reload();
                } else {
                    sessionStorage.removeItem('reloadCount');
                }
            }catch{

            }
        }
        fetchStudentList();
    }, []);
    return (
        <div>
            <Headings />
            <UserList studentList={studentList}/>
        </div>
    )
}

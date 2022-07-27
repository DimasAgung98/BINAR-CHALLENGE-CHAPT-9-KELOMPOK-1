import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Table() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error || !isLoaded) {
        return (
            <>
                <div className='container bg-light'>
                    <div className='row mx-3'>
                        <div className='col-md'>
                            <table class="table">
                                <thead class="table-dark text-center">
                                    <tr>
                                        <th>RANK</th>
                                        <th>ID</th>
                                        <th>USERNAME</th>
                                        <th>EMAIL</th>
                                        <th>POINT</th>
                                        <th colspan="1" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='container bg-light'>
                    <div className='row mx-3'>
                        <div className='col-md'>
                            <table class="table">
                                <thead class="table-dark text-center">
                                    <tr>
                                        <th>RANK</th>
                                        <th>ID</th>
                                        <th>USERNAME</th>
                                        <th>EMAIL</th>
                                        <th>POINT</th>
                                        <th colspan="1" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        items.data.map(
                                            (item, i) => (
                                                <tr className='text'>
                                                    <th>{i + 1}</th>
                                                    <th>{item.id}</th>
                                                    <th>{item.username}</th>
                                                    <th>{item.email}</th>
                                                    <th></th>
                                                    <th><NavLink to='/home/profile'><Button color='danger' outline>Profile</Button></NavLink></th>
                                                </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Table
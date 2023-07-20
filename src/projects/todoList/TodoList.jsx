import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const TodoList = () => {
    return(
        <>
            <div className="bg-light mb-3 p-3">
                <h1><NavLink to='/' className="logo">Meyawo</NavLink></h1>
            </div>
            <section className="section" id="search">
                <div className="container text-center w-50 mx-auto">
                    <h1 className="display-3 animated"><i class="fa-solid fa-clipboard-list"></i></h1>
                    <h2>Add Your List Here 👌</h2>

                    <div className='addItems d-flex mb-4'>
                        <input type="text" className='form-control' name="" placeholder='👉 Add items...' />
                        <button className='btn btn-primary rounded-circle mx-2'>
                            <i className="fa-solid fa-plus" title='Add Item'></i>
                        </button>
                    </div>

                    <div className='showItems'>
                        <div className='eachItem d-flex my-3'>
                            <h3 className='text-start bg-light border border-dark rounded px-2 py-1 w-100'>Apple</h3>
                            <button className='btn btn-danger rounded-circle mx-2'>
                                <i className="fa-solid fa-trash-can" title='Delete Item'></i>
                            </button>
                        </div>
                    </div>

                    <button className='btn btn-primary rounded my-3'>Delete All</button>
                </div>
            </section>
        </>
    )
}

export default TodoList;
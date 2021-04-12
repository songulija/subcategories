
import React, { useEffect, useState } from 'react'
import firestore from '../firebase/firebase'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { FiLogIn, FiShoppingCart } from 'react-icons/fi';



function NavigationBar() {

    const [categories, setCategories] = useState([])

    const allCategories = []

    useEffect(async () => {
        //reference to Categories colelction. get all categories where ParentId is equal 0
        //it'll return all sub categories based on Category that choosed
        // setAllCategories(firestore.ref("Categories").orderByChild("ParentId").equalTo(0));

        //get all categories
        const cats = await firestore.collection('Categories').get()
        cats.forEach((category) => {
            allCategories.push(category.data())
        })
        console.log(allCategories)
        setCategories(allCategories)
    }, [])

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" className='ml-5'>AutoBazaar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-3 py-3">
                    <Nav.Link href="#home">Light Car</Nav.Link>
                    <Nav.Link href="#link">Motorcicle</Nav.Link>
                    <Nav.Link href="#link">Tools</Nav.Link>
                    <Nav.Link href="#link">Car accesories</Nav.Link>
                    <Nav.Link href="#link">Engine oil</Nav.Link>
                    <Nav.Link href="#link">Filters</Nav.Link>
                    <Nav.Link href="#link">Brake system</Nav.Link>
                    <Nav.Link href="#link"><FiLogIn size='1.5em' color='gray' /> Login</Nav.Link>
                    <Nav.Link href="#link"><FaShoppingCart size='1.5em' color='gray' /> Cart</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>

            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavigationBar

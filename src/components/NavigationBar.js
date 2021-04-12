
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
        
        <div className="container">
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <a className="link-secondary" href="#">Subscribe</a>
                    </div>
                    <div className="col-4 text-center">
                        <a className="blog-header-logo text-dark" href="#">Large</a>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Nav.Link href="#link"> <FaShoppingCart size='1.5em' color='gray'/></Nav.Link>
                        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                    </div>
            </div>
            </header>
            <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-3 py-3">
                    <Nav.Link href="#home">Car</Nav.Link>
                    <Nav.Link href="#link">Motorcicle</Nav.Link>
                    <Nav.Link href="#link">Tools</Nav.Link>
                    <Nav.Link href="#link">Accesories</Nav.Link>
                    <Nav.Link href="#link">Engine-Oil</Nav.Link>
                    <Nav.Link href="#link">Filters</Nav.Link>
                    <Nav.Link href="#link">Brakes</Nav.Link>
                    
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>

            </Navbar.Collapse>
        </Navbar>
        </div>

    )
}

export default NavigationBar

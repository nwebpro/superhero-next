import axios from "axios";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import Router from "next/router";
import { useState } from "react";
import MetaTag from "../components/Meta/MetaTag";

const AddNewHero = () => {
    const [form, setForm] = useState({
        superHero: '',
        realName: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await axios(`http://localhost:3000/api/hero`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(form)
            })
            Router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <MetaTag 
                title={`Add New - Super Heros`}
            />
            <div className="container">
                <h1 className="display-6 py-5 text-center">Add a New Hero Identity</h1>
                <form onSubmit={handleSubmit}>
                    <MDBInput 
                        onChange={ handleChange }
                        label='Super Hero'
                        type='text'
                        name='superHero'
                    />
                    <MDBInput
                        className="mt-2"
                        onChange={ handleChange }
                        label='Real Name'
                        type='text'
                        name='realName'
                    />
                    <MDBBtn className="mt-2" type="submit">Add New Hero</MDBBtn>
                </form>
            </div>
        </>
    );
}
 
export default AddNewHero;
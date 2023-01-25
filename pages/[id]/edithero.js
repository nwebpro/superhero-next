import axios from "axios";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import { useState } from "react";
import MetaTag from "../../components/Meta/MetaTag";

const EditHero = ({ heros }) => {
    const superHerosData = heros.data
    const router = useRouter()
    const heroId = router.query.id

    const [form, setForm] = useState({
        superHero: superHerosData.superHero,
        realName: superHerosData.realName
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
            const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(form)
            })
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <MetaTag 
                title='Edit - Super Heros'
            />
            <div className="container">
                <h1 className="display-6 py-5 text-center">Edit Hero Identity</h1>
                <form onSubmit={handleSubmit}>
                    <MDBInput 
                        onChange={ handleChange }
                        label='Super Hero'
                        type='text'
                        name='superHero'
                        value={form.superHero}
                    />
                    <MDBInput
                        className="mt-2"
                        onChange={ handleChange }
                        label='Real Name'
                        type='text'
                        name='realName'
                        value={form.realName}
                    />
                    <MDBBtn className="mt-2 btn-success" type="submit">Edit a Hero</MDBBtn>
                </form>
            </div>
        </>
    );
}

export async function getServerSideProps ({ params }) {
    const res = await axios(`http://localhost:3000/api/hero/${params.id}`)
    const heros = res.data
    return {
        props: {
            heros: heros
        }
    }
}
 
export default EditHero;
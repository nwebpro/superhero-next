import axios from "axios";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import MetaTag from "../../components/Meta/MetaTag";

const EachHero = ({ heros }) => {
    const superHerosData = heros.data
    const router = useRouter()
    const heroId = router.query.id

    const deleteHero = async() => {
        try {
            const deleteHero = await axios(`http://localhost:3000/api/hero/${heroId}`, {
                method: 'DELETE'
            })
            router.push('/')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <MetaTag 
                title='View - Super Heros'
            />
            <div className="container">
                <h1 className="display-6 py-5 text-center">Identity of Hero</h1>
                <div className="row">
                    <MDBCard className="border border-1" style={{ maxWidth: '22rem' }}>
                        <MDBCardBody>
                            <MDBCardTitle>{superHerosData.superHero}</MDBCardTitle>
                            <MDBCardText>
                                {superHerosData.realName}
                            </MDBCardText>
                            <MDBBtn onClick={ deleteHero } className="btn-danger">Delete Hero</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps ({ params }) {
    const res = await axios(`http://localhost:3000/api/hero/${params.id}`)
    const heros = res.data
    return {
        props: {
            heros: heros
        }
    }
}

export default EachHero;
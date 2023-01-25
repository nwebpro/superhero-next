import axios from "axios";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";
import Link from "next/link";
import MetaTag from "../components/Meta/MetaTag";

const Home = ({ heros }) => {
    const superHerosData = heros.data
    return (
        <>
            <MetaTag 
                title='Home - Super Heros'
            />
            <div className="container">
                <h1 className="display-6 py-5 text-center">Superhero Identity Manager</h1>
                <div className="row">
                    {
                        superHerosData?.map(hero => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={ hero._id }>
                                <MDBCard className="border border-1">
                                    <MDBCardBody>
                                        <MDBCardTitle>{ hero.superHero }</MDBCardTitle>
                                        <MDBCardText>
                                            { hero.realName }
                                        </MDBCardText>
                                        <Link href={`/${ hero._id }`}>
                                            <MDBBtn>View Hero</MDBBtn>
                                        </Link>
                                        <Link href={`/${ hero._id }/edithero`} className='ms-2 mt-2'>
                                            <MDBBtn>Edit Hero</MDBBtn>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps () {
    const res = await axios('http://localhost:3000/api/hero')
    const heros = res.data
    return {
        props: {
            heros: heros
        }
    }
}

export default Home;
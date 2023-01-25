import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link href='/'>Superhero Identity</Link>
                <Link href='/add'>
                    <MDBBtn>New Identity</MDBBtn>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
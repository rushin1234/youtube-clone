import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Navbar.css'

import { Link } from 'react-router-dom'
import { APIContext } from '../../context/APIContext'
import { useContext, useState } from 'react';

function Header() {

  const { fetchSearch } = useContext(APIContext)
  const [search, setSearch] = useState('')

  return (
    <div className="navbar">
      <Link to='/'><div className="logo">YouTube</div></Link>
      <div className="nav-right">
        <InputGroup className="mb-3">
          <Form.Control className='nav-input' value={search} onChange={e=>setSearch(e.target.value)}
          />
          <Button variant="outline-primary" className='nav-btn' id="button-addon2" onClick={() => fetchSearch(search)}>
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Header;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';

function Item({video}) {

  return (
    <Link to={`/video/${video.id.videoId || video.id}`}><Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={video.snippet.thumbnails.high.url} />
      <Card.Body>
        <Card.Title>{video.snippet.title}</Card.Title>
        <Card.Text>
          {/* {video.snippet.description} */}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card></Link>
  );
}

export default Item;
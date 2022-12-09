import Card from 'react-bootstrap/Card'
import tree from '../tree.jpg'

const Home = () => {
  return (
    <Card className="bg-dark text-white border-0 rounded-0">
      <Card.Img className="home-img rounded-0" src={tree} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='text-center'>Card title</Card.Title>
        <Card.Text className='img-text w-'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Home
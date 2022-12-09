import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Contactform = () => {
  return (
    <Form className='mx-sm-auto py-2 bg-dark text-light col-md-5 col-lg-4 col-sm-8 m-3 m-sm-0'>
      <Form.Group className='m-3'>
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className='m-3'>
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>
      <Form.Group className='m-3'>
        <Form.Label>PHONENUMBER</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="m-3">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <div className='d-grid'>
        <Button variant="secondary" className=' contact-btn mx-3 mb-3'>SEND</Button>
      </div>
    </Form>
  )
}

export default Contactform
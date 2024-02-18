import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Contacto =()=>{

    return(

<>

<h1>Cuentanos, ¿En que te podemos ayudar?</h1>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fs-4'>Correo:</Form.Label>
        <Form.Control type="email" placeholder="tucorreo@ejemplo.com" />
        
      </Form.Group>

      <Form.Label className='fs-4'>Descripción:</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px', width:'1000px' }}
        />
      </FloatingLabel>

     <br></br>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
</>

    )

} 


export default Contacto
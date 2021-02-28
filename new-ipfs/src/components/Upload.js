import React from 'react'
import { Form, Button } from 'react-bootstrap'
// import ipfs from '../ipfs'

const Upload = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Select file to be uploaded in IPFS"
          />
        </Form.Group>
      </Form>
      <Button variant="info" size="lg" block>
        Upload File
      </Button>
    </div>
  )
}

export default Upload

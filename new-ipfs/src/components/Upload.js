import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ipfs from '../ipfs'

const Upload = () => {
  let [buffer, setBuffer] = useState(undefined)
  let [hash, setHash] = useState(
    'QmRL8GHFuQWQd93WhG2PexFxkys6veQbdjvb5N8XmAjrzU',
  )
  let [loading, setLoading] = useState('')

  const captureFile = async (event) => {
    event.preventDefault()

    const file = event.target.files[0]
    console.log(file)

    const reader = new FileReader()
    console.log('reader ', reader)
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => createBuffer(reader)
  }
  const createBuffer = (reader) => {
    buffer = Buffer.from(reader.result)
    setBuffer(buffer)
  }

  //onSubmit
  const uploadFile = async (event) => {
    event.preventDefault()
    console.log('Uploading the file')
    setLoading('Uploading the file...')

    var hash
    for await (const result of ipfs.add(buffer)) {
      console.log(result)
      hash = result.path
    }

    setHash(hash)
    console.log(hash)
    setLoading('')
  }

  return (
    <div>
      {hash !== '' ? (
        <img src={`https://ipfs.io/ipfs/${hash}`} alt="No-images" />
      ) : (
        <i>There is no image</i>
      )}
      <p>{loading === '' ? '' : loading}</p>
      <Form>
        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Select file to be uploaded in IPFS"
            onChange={captureFile}
          />
        </Form.Group>
      </Form>
      <Button variant="info" size="lg" block onClick={uploadFile}>
        Upload File
      </Button>
    </div>
  )
}
export default Upload

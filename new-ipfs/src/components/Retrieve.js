import {useState} from 'react'
import { Button } from 'react-bootstrap'

const Retrieve = () => {
  let [file, setFile] = useState(null)

  const retrieveFile = async () =>
      // console.log('Downloading file with hash', {hash})
      result = await ipfs.get(hash)
      const content = []
      for await (const chunk of result[0].content) {
        content.push(chunk)
      }
      file=Buffer.from(content).toString('base64')
      setFile(file);
      console.log(result)
    }

  }
  return (
    <Button variant="warning" size="lg" block onClick={retrieveFile} hash={hash}>
      Retrieve File
    </Button>
  )
}

export default Retrieve

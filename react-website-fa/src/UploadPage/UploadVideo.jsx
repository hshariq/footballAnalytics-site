import { getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import { Profiler, useEffect, useState } from 'react'

function UploadVideo(props) {
  
  const [file, setFile] = useState(null)
  const storage = getStorage()

  const getFileUrl = (e) => {
    let value = e.target.files[0]
    console.log(value)
    setFile(value)
  }
  
  const uploadVideoToFirebase = async () => {
    if (file == null) {
      alert('No file seleced')
      return
    }
    const videoRef = ref(storage, `upload/${file.name}`)

    try {
      const uploadTask = uploadBytesResumable(videoRef, file);
      uploadTask.on('state_changed', (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        progress = Math.trunc(progress)
        console.log(progress)
      }, (error) => {
        console.log(error)
      }, () => {
        console.log('Video successfully uploaded')
      }
    
    )

      console.log('Video uploaded to cloud')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <label>Input video</label>
      <input type="file"
       id="input" name="input_video"
       accept="video/mp4, video/mov"
       onChange={getFileUrl}
       />
       <button onClick={uploadVideoToFirebase}>Upload</button>
    </div>
  );
}

export default UploadVideo;

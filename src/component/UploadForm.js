import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [ file, setFile ] = useState(null)
  const [ error, setError ] = useState('')
  
  function handleChange(e) {
    let selected = e.target.files[0];
    let types = ['image/png','image/jpeg', 'image/webp']
    if(selected && types.includes(selected.type)) {
     alert(selected.type)
      setFile(selected);
      setError('');
    } else {
      setError('please select image only')
    }
  }
  
  return (
     <div className='UploadForm'>
       <label>
         <input type="file" onChange = { handleChange } />
         <span>+</span>
       </label>
       <div>
        { error && <div className="error" > { error } </div> }
        { file && <div> { file.name } </div> }
        { file && <ProgressBar file = { file } setFile= { setFile } /> }
       </div>
     </div>
    )
}
export default UploadForm;
import useStore from '../hooks/useStore';
import { motion } from 'framer-motion';

const ImageGrid = () => {
  const { docs } = useStore('images');
  
  return (
    <div className='img-grid'>
     { docs.map(doc => (
       <motion.div className='img-wrap' key={ doc.id }
        layout
        whileHover = {{ opacity: 1 }}
       >
        <motion.img src={ doc.url } alt="uploaded pic" 
         initial = {{ opacity: 0 }}
         animate = {{ opacity: 1 }}
         transition = {{ delay: 1 }}
        />
       </motion.div>
       )) }
    </div>
    )
}
export default ImageGrid;
import './Card.css'
import dog from '../../assets/dogimage.jpg'

function Card(img) {
    return (
        <div className="img-hover-zoom">
        
            <img src={dog} alt="This zooms-in really well and smooth" />
            <p className='leashes'>leashes</p>  
            {/* agregar leashes a traves de props */}
        </div>
    )
}
// 

export default Card
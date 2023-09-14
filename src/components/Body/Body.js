import Card from '../Card/Card'
import Presentation from '../Presentation/Presentation'
import './Body.css'


function Body(img) {
    return (
        <div className='body-container'>
            <Presentation/>
            
            <div >
                <h3 className='trending-products'>TRENDING PRODUCTS</h3>
                <section className='card-container'>
                    <Card />
                    <Card />
                    <Card />
                </section>
            </div>
            
        </div>
    )
}


export default Body
import { Link } from "react-router-dom";

export const ProductComponent = () => {
    return (
        <>
        <div className="card shadow mt-5 me-3 p-0" style={{width: 250}}>
            <img src={process.env.PUBLIC_URL + '/blueberry3.jpg'} class="card-img-top" style={{width: '100%'}} alt="blueberry"/>
            <div className="card-body">
                <h5 className="card-title titan-one-regular">Blueberry Slush</h5>
                <h5 className="card-title lalezar-regular">$4.99</h5>
                <p className="card-text mt-2 mb-4">A blueberry slushie made with real blueberries!</p>
                <div className="d-grid">
                    <button type="button" className="btn btn-primary lalezar-regular p-2">Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    );
}
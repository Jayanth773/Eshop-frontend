import React from 'react'
import { Link } from 'react-router-dom'


const CheckkoutSuccess = () => {
    return (
        <section>
            <div className="container"> 
                <h2>Checkout Success</h2>
                <p>Thank you for your purchase</p>
                <br />
                <button className="--btn --btn-primary">
                    <Link to="/order-history">View Order Status</Link>
                </button>
            </div>
        </section>
      )
}

export default CheckkoutSuccess
// Native Imports
import React, { Component } from 'react'

// CSS
import styles from './pricing.module.css'

export default class pricing extends Component {
    render() {
        return (
            <div>
                <div className={`pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center ${styles.pricing_text_wrap}`}>
                    <h1 className="display-4">Pricing</h1>
                    <p className="lead">
                        Sint labore sint tempor ex in consectetur elit aliquip minim.
                        Eiusmod ea cillum non nisi velit minim esse esse mollit excepteur irure dolore irure.
                        Nulla non commodo deserunt officia esse do dolor ipsum tempor laborum.
                    </p>
                </div>

                <div className={`${styles.card_container}`}>
                    <div className={`card-deck mb-3 text-center ${styles.cards_holder}`}>
                        <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>1 truck tracker</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" className={`btn btn-lg btn-block btn-outline-light ${styles.free_btn}`}>Sign up for free</button>
                        </div>
                        </div>
                        <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Pro</h4>
                        </div>
                        <div className="card-body">
                            <h1 className={`card-title pricing-card-title ${styles.pricing_header}`}>$10 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>5 truck trackers</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" className={`btn btn-lg btn-block btn-light ${styles.price_btn}`}>Get started</button>
                        </div>
                        </div>
                        <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Enterprise</h4>
                        </div>
                        <div className="card-body">
                            <h1 className={`card-title pricing-card-title ${styles.pricing_header}`}>$19 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>10+ truck trackers</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" className={`btn btn-lg btn-block btn-light ${styles.price_btn}`}>Contact us</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React from 'react'
import './V2L function.css'
import v2lImage from '../../assets/images/byd-car13.webp'

export default function V2LFunction() {
  return (
    <section className="v2l-function">
      <div className="v2l-function__container">
        <div className="v2l-function__media">
          <img src={v2lImage} alt="V2L function" />
        </div>
        <div className="v2l-function__content">
          <span className="v2l-function__label">V2L Function</span>
          <h2>Vehicle-to-Load Power</h2>
          <p>
            "Vehicle-to-Load" (V2L) capability. Vehicle's battery can be used as a power source for external devices.
          </p>
          <ul>
            <li>Power outdoor gear during camping and road trips</li>
            <li>Run small appliances and devices from the truck battery</li>
            <li>Fast, reliable power for charging tools and electronics</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

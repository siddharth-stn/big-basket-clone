import React from 'react'

export default function Header() {
  return (
    <>
      <header className='h-20'>
        <div className='header-outer'>
          <div className='row-one'>
            <div className='logo'>
              <img src="https://www.bigbasket.com/bb2assets/flutter/bb-logo.svg#bb tata logo" alt="logo" />
            </div>
            <div className='search'></div>
            <div className='location-badge'></div>
            <div className='login-button'></div>
            <div className='cart'></div>
          </div>
          <div className='row-two'>
            <div className='category-btn'></div>
            <div className='exotic'></div>
            <div className='tea'></div>
            <div className='ghee'></div>
            <div className='Nandini'></div>
            <div className='fresh-veg'></div>
            <div className='smart-basket-badge'></div>
          </div>
        </div>
      </header>

    </>
  )
}

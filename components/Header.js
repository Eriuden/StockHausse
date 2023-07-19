import React from 'react'

export const Header = () => {
  return (
    <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <h1>StockHausse</h1>

            <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                <a className='mr-5 hover:text-gray-900'>Lien A</a>
                <a className='mr-5 hover:text-gray-900'>Lien B</a>
                <a className='mr-5 hover:text-gray-900'>Lien C</a>
            </nav>
        </div>
    </header>
  )
}

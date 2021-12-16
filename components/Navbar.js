import React from "react";
import Link from "next/link";

export default function Navbar() {

  return (
    <header className='p-3 bg-dark text-white'>
    <div className='container'>
      <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
      <Link href="/">
        <a className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'>
          LOGO
        </a>
        </Link>
        <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
          <li>
          <Link href="/">
            <a className='nav-link px-2 text-white'>
              Inicio
            </a>
            </Link>
          </li>
          <li>
            <Link href="/products">
            <a className='nav-link px-2 text-white'>
              Productos
            </a>
            </Link>
          </li>
          <li>
            <a className='nav-link px-2 text-white'>
              Sobre Nosotros
            </a>
          </li>
        </ul>

        <div className='text-end'>
          <button type='button' className='btn btn-outline-light me-2'>
            Login
          </button>
          <button type='button' className='btn btn-warning'>
            Sign-up
          </button>
        </div>
      </div>
    </div>
  </header>
  );
}

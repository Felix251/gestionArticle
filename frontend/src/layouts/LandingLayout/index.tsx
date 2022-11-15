// import * as React from 'react'
import { Outlet } from 'react-router-dom'

export default function LandingLayout () {
  return (
    <>
      <div>
        <>Header</>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}
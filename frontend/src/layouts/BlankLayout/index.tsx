// import * as React from 'react'
import { Outlet } from 'react-router-dom'

export default function BlankLayout () {
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
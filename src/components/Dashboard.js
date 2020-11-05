import React from 'react'

import Sidebar from './Sidebar';

export default function Dashboard(props) {
  return (
    <div className="d-flex" style={{ height: '100vh'}}>
      <Sidebar id={props.id}/>
    </div>
  )
}

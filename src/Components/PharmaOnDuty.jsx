import React from 'react'
import PharmacyOnDutyTable from './PharmacyOnDutyTable'

function PharmaOnDuty() {
  return (
    <>
    <div>
    <h1 className='text-center text-5xl m-4'> Nöbetçi Eczaneler</h1>
    </div>
    <div className="lg:col-span-3">
             
    <PharmacyOnDutyTable />
 
    </div>
    </>
  )
}

export default PharmaOnDuty
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import { InputForm } from './TransferFunds'

const Transfer = () => {

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Transferência de Fundos"
        subtext="Por favor, preencha os campos abaixo para realizar a transferência de fundos."
      />

      <section className="size-full pt-5 ">
        <div className='flex justify-center mr-60 mt-24'>
        <InputForm />
        </div>
      </section>
    </section>
  )
}

export default Transfer
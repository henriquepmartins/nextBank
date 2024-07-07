import React from 'react'
import TabelaHistorico from '@/components/Transaction'
import TransactionGraphs from '@/components/Graficos'
import HeaderBox from '@/components/HeaderBox'

const page = () => {
  return (
    <section className='transactions'>
      <div className='transactions-header'>
        <HeaderBox 
        title='Histórico de Transações'
        subtext='Veja o histórico de transações realizadas.'
        />
      </div>
      <TabelaHistorico />
      <TransactionGraphs />
    </section>
  )
}

export default page

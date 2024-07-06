import HeaderBox from '@/components/HeaderBox'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyBanks = () => {
  const cardDetails = [
    {
      cardType: 'Visa',
      gradient: 'bg-gradient-to-r from-blue-500 to-blue-700',
      balance: 'R$ 5.000,00',
      userName: 'John Doe',
      mask: '1234'
    },
    {
      cardType: 'MasterCard',
      gradient: 'bg-gradient-to-r from-red-500 to-red-700',
      balance: 'R$ 3.000,00',
      userName: 'Jane Smith',
      mask: '5678'
    },
    {
      cardType: 'American Express',
      gradient: 'bg-gradient-to-r from-green-500 to-green-700',
      balance: 'R$ 7.000,00',
      userName: 'Alice Johnson',
      mask: '9012'
    },
    {
      cardType: 'Discover',
      gradient: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
      balance: 'R$ 2.000,00',
      userName: 'Bob Brown',
      mask: '3456'
    }
  ];

  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox
          title='Minhas contas'
          subtext='Acesse e gerencie suas contas bancárias.'
        />

        <div className='space-y-4'>
          <h2 className='header-2'>
            Seus cartões
          </h2>
          <div className='flex flex-wrap gap-6'>
            {cardDetails.map((card, index) => (
              <div key={index} className="flex flex-col">
                <Link href={`/transaction-history/?id=${index}`} className={`bank-card ${card.gradient}`}>
                  <div className="bank-card_content">
                    <div>
                      <h1 className="text-16 font-semibold text-white">
                        {card.cardType}
                      </h1>
                      <p className="font-ibm-plex-serif font-black text-white">
                        {card.balance}
                      </p>
                    </div>

                    <article className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <h1 className="text-12 font-semibold text-white">
                          {card.userName}
                        </h1>
                        <h2 className="text-12 font-semibold text-white">
                          ●● / ●●
                        </h2>
                      </div>
                      <p className="text-14 font-semibold tracking-[1.1px] text-white">
                        ●●●● ●●●● ●●●● <span className="text-16">{card.mask}</span>
                      </p>
                    </article>
                  </div>

                  <div className="bank-card_icon">
                    <Image 
                      src="/icons/Paypass.svg"
                      width={20}
                      height={24}
                      alt="pay"
                    />
                    <Image 
                      src="/icons/mastercard.svg"
                      width={45}
                      height={32}
                      alt="mastercard"
                      className="ml-5"
                    />
                  </div>

                  <Image 
                    src="/icons/lines.png"
                    width={316}
                    height={190}
                    alt="lines"
                    className="absolute top-0 left-0"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks

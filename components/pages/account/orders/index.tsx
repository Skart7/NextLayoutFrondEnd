import React from 'react'

import OrderCard from './card'
import styles from '../../../../styles/account/orders.module.sass'

export default function OrderList () {

    const orders = new Array(5).fill('').map((_, index) => ({
        id: `orderid${index}`,
        user: { email: "example@example.com"},
        department: { method: "Currier", where: "Country, City, Region, street building" },
        payment: { method: "Cash", status: "Not Paided" },
        date: "Fri Jun 24 2022 17:45:47",
        cart: { amount: (index+1)*350, qty: 5, items: [] }
    })) 

    return (
    <div className={styles.layoutPage}>

        <div className={styles.wrapperCards}>
            {
                orders.map(data => (
                    <OrderCard key={data.id} {...data} />
                ))
            }
        </div>

    </div>
    )

} 
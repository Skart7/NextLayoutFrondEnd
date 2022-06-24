import React from 'react'

import styles from '../../../../styles/account/orders.module.sass'

import { Text, Paper } from '../../../../customUI'

export default function OrderCard (data) {

    return (
    <Paper shadow="large" className={styles.orderCard}>
        <Text variant="h6">{data.date}</Text>
        <div className={styles.orderCard__info}>
            <div>
                <Text variant="body2">{data.department.method}</Text>
                <Text variant="body2">{data.payment.method}</Text>
            </div>
            <div>
                <Text variant="body2" className={styles.status}>{data.payment.status}</Text>
                <Text variant="body1" className={styles.amount}>${data.cart.amount}</Text>
            </div>
        </div>
    </Paper> 
    )

}
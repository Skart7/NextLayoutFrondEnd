import React from 'react'

import styles from '../../../styles/market.module.sass'

import {products} from '../../../localdb'
import ProductCard from '../../products/default'

export default function Market () {
    return (
    <div className={styles.wrapperMarket}>
        {
            products.length > 0 && products.map(obj => (
                <ProductCard key={obj.id} {...obj} />
            ))
        }
    </div>
    )
}
import React from 'react'

import NextLink from 'next/link'

import { Text } from '../../customUI'

import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';

export default function HeaderLeft({styles}) {
  return (
    <div className={styles.leftContent}>
        <NextLink href="/" passHref>
          <a style={{ display: 'flex', textDecoration: 'none' }}>
            <ComputerRoundedIcon fontSize="large" />
            <Text variant="h6" component="h1" pointer>NextPrismaPostgres</Text>
          </a>
        </NextLink>
    </div>
  )
}

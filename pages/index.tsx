import React from "react"

import Layout from '../components/layout'
import Market from "../components/pages/home/market"
import MarketHeader from "../components/pages/home/marketheader"


export default function Home() {

  return (
  <Layout>

    <MarketHeader/>
    <Market/> 

  </Layout>
  )
}

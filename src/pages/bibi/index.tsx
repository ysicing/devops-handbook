import React from 'react'
import Layout from '@theme/Layout'

function BiBiBody() {
  return (
    <>
    <div id="bber"></div>
    </>
  )
}

function BiBi(): JSX.Element {
  return (
    <Layout title="小声BiBi" description="内容来自我的私人微博">
      <main className="margin-vert--lg">
        <BiBiBody />
      </main>
    </Layout>
  )
}

export default BiBi


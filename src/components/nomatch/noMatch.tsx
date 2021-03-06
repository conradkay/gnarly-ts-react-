import React from 'react'
import './styles.css'
import { ButtonLink, Header } from '..'

export const NoMatch = () => (
  <div className="all">
    <Header currentComponent="404" />
    <h1 style={{ marginTop: 100, textAlign: 'center' }}>Your fault 乁( ⁰͡ Ĺ̯ ⁰͡ ) ㄏ</h1>
    <p className="zoom-area">or am I?</p>
    <section className="error-container">
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
      <span className="zero">
        <span className="screen-reader-text">0</span>
      </span>
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
      <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <ButtonLink text="HOME" variant="contained" to="/" />
      </div>
    </section>
  </div>
)

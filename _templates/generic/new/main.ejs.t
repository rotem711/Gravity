---
to: components/generic/<%= h.inflection.camelize(name) %>/<%= h.inflection.camelize(name) %>.tsx
---
import React, { FunctionComponent } from 'react'
import styles from './<%= h.inflection.camelize(name) %>.module.scss'
import I<%= h.inflection.camelize(name) %> from './<%= h.inflection.camelize(name) %>.interface'

const <%= h.inflection.camelize(name) %>:FunctionComponent<I<%= h.inflection.camelize(name) %>> = (props) => {
  return (
    <div
      className={`${styles.root}`}
    >
     :)
    </div>
  )
}

export default <%= h.inflection.camelize(name) %>

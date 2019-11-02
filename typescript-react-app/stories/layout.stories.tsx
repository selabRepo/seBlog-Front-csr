import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../src/Layout/Header'
import Menu from '../src/Layout/Menu'
import Contents from '../src/Layout/Contents'


storiesOf('Layout', module).
add('Header', () => {
    return (<Header />)
})
.add('Menu', () => {
    return (<Menu />)
})
.add('Contents', () => {
    return (<Contents />)
})
.add('Layout', () => {
    return (
        <>
        <Header />
        <Menu />
        <Contents />
        </>
        )
})
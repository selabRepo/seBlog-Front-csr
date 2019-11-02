import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../src/Layout/Header'


storiesOf('Header', module).add('Header', () => {
    return (<Header />)
});
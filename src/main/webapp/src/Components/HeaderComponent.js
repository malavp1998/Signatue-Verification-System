import React from 'react'
import {Header, Image, Segment} from 'semantic-ui-react'

const HeaderComponent = () => (
    <Segment inverted>
        <Header
            as='h1'
            textAlign='center'
        >
            <Image circular size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg'/>
            Signature Recognition System
        </Header>
    </Segment>
);

export default HeaderComponent
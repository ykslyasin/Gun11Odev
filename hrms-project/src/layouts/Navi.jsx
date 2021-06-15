import React, { useState } from 'react'
import { Menu , Container } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated , setIsAuthenticated] = useState(false)
    function handleSignOut(){
        setIsAuthenticated(false)
    }

    function handleSignIn(){
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Item
                        name='Job Advertisements'
                    />

                    <Menu.Item
                        name='Cv'
                    />

                    <Menu.Menu position='right'>

                    {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>
                                    :<SignedOut signIn={handleSignIn} biseey="2"/>}

                        <Menu.Item>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}

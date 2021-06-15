import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
        <Button.Group>
        <Button onClick={signIn}>Giriş yap</Button>
        <Button.Or />
        <Button positive>Register</Button>
      </Button.Group>
        </div>
    )
}

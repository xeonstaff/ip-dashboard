import React, {useEffect} from 'react'
import { useUserAgent } from '@oieduardorabelo/use-user-agent';

function UserAgent() {
    let details = useUserAgent()
    console.log(details)

    return (
        <>
            <p>you're using:</p>
            <p><b>browser: </b>{details ? details.browser.name:'hello'}</p>
            <p><b>os: </b>{details ? details.os.name : 'hello'}</p>
        </>
    )
}

export default UserAgent

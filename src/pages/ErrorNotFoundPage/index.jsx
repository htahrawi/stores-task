import React from 'react'
import { PATHS } from '../../router/paths'

const ErrorNotFoundPage = () => {
    return (
        <>
            <h1>Error 404 NotFoundPage</h1>
            <a
                style={{ color: '#045', fontSize: '18px' }}
                href={PATHS.STORES.ROOTE}
            >Go to Stores from here </a>
        </>
    )
}

export default ErrorNotFoundPage
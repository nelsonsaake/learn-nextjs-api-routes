import React from 'react';

interface Props {
    isBusy: boolean;
}

export default function BusyIndicator({ isBusy }: Props) {
    if (!isBusy) {
        return (<> </>)
    }
    return (
        <div className="border-2 rounded-full w-4 h-4 border-transparent border-t-white border-l-white animate-spin"></div>
    )
}
import React from 'react';

interface Props {
    error: any;
}

export default function Error({ error }: Props) {
    return (
        <>
            <div className="max-w-2xl border rounded-lg bg-red-100 p-5 mx-auto w-screen">
                <div className="m-4 w-full">
                    <div className="text-xs text-red-500">
                        <div className="text-sm text-red-600">{error?.status}</div>
                        <div className="text-sm text-red-600">{error?.message}</div>
                        <div className="text-sm text-red-600">{error?.info}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

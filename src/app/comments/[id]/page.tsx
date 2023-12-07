import React from 'react';
import { Comment } from '@/types/comment';
import API from '@/utils/api';
import { findComment } from '@/data/comments';

export default async function CommentDetails({ params }: { params: { id: string } }) {

    const comment = findComment(parseInt(params.id));

    function Field({ label, value }: { label: string, value: any }) {
        return (
            <div>
                <div className="text-sm font-semibold">
                    {label}
                </div>
                <div className="text-sm">
                    {value}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="bg-stone-800 p-4 text-white mb-5 text-center">
                Comments[{params.id}] Details
            </div>

            <div className="flex flex-col space-y-5 py-4 px-5 bg-white max-w-lg w-screen mx-auto rounded-lg">
                <Field label='comment.id' value={comment?.id} />
                <Field label='comment.postId' value={comment?.postId} />
                <Field label='comment.email' value={comment?.email} />
                <Field label='comment.name' value={comment?.name} />
                <Field label='comment.body' value={comment?.body} />
            </div>
        </>
    )
}
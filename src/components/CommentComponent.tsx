import React from 'react';
import { Comment } from '@/types/comment';
import { TrashIcon } from '@heroicons/react/24/outline';
import API from '@/utils/api';

interface Props {
    comment: Comment;
}

export default function CommentComponent({ comment }: Props) {

    return (
        <>
            <div className="border rounded-lg flex flex-col space-y-3 p-3">
                <div className="text-xs text-stone-950 text-justify h-8">
                    {comment.name}
                </div>
                <hr />
                <div className="text-xs text-stone-700 text-justify overflow-hidden h-28 pb-5">
                    {comment.body}
                </div>
                <hr />
                <div className="p-2 flex justify-end">
                    <TrashIcon
                        onClick={() => API.deleteComment(comment.id)}
                        className="h-6 w-6 text-red-500 cursor-pointer hover:text-red-600 active:text-red-400 "
                    />
                </div>
            </div>
        </>
    )
}
'use client';
import BusyIndicator from "@/components/BusyIndicator";
import CommentComponent from "@/components/CommentComponent";
import Error from "@/components/Error";
import TextInput from "@/components/TextInput";
import API from "@/utils/api";
import { useRefs } from "@/utils/useRefGen";
import { useState } from "react";
import useSWR from "swr";

export default function CommentsPage() {
    const [commentName, setCommentName] = useState("");
    const [commentBody, setCommentBody] = useState("");
    const [comment, setComment] = useState<Comment>();
    const { data, error, isLoading, mutate } = useSWR('/api/user/123', API.getComments);
    const refs = useRefs();

    function refresh() {
        mutate()
    };

    async function storeComment() {
        await API.storeComment({ name: commentName, body: commentBody });
        refresh()
    }

    return (
        <>
            <div className="flex flex-col space-y-5">
                <div className="text-center bg-stone-800 text-white text-sm p-8 flex items-center justify-center space-x-5">
                    <span>Comments</span> {isLoading && <BusyIndicator isBusy={isLoading} />}
                </div>

                <div className="flex justify-end max-w-2xl w-screen mx-auto">
                    <button onClick={refresh} className="border rounded-md bg-stone-800 hover:bg-stone-700 active:bg-stone-800 text-white px-8 py-2 text-xs flex justify-center items-center">
                        <span>Refresh</span>
                    </button>
                </div>

                {error && <Error error={error} />}

                <div className="max-w-2xl border rounded-lg bg-white p-5 mx-auto w-screen flex flex-col space-y-5">
                    <div className="text-lg">
                        Add Comment
                    </div>
                    <TextInput ref={refs.ref("Name")} label="Name" value={commentName} onChange={setCommentName} />
                    <TextInput ref={refs.ref("Body")} label="Body" isTextArea={true} value={commentBody} onChange={setCommentBody} />
                    <button onClick={storeComment} className="border rounded-md bg-stone-800 hover:bg-stone-700 p-7 active:bg-stone-800 text-white px-8 py-3 text-sm flex justify-center items-center">
                        <span>Save</span>
                    </button>
                </div>

                {/* list */}
                <div className="max-w-2xl border rounded-lg bg-white p-5 mx-auto w-screen">
                    <div className="w-full">
                        <div className="text-lg mb-4 flex items-center justify-center space-x-4">
                            <span>Loaded Comments</span> <span className="rounded-full text-xs bg-stone-800 text-white h-6 w-6 flex items-center justify-center">{data?.length}</span>
                        </div>
                        <div className="flex flex-wrap">
                            {
                                data?.map((comment, index) => {
                                    return (
                                        <div key={index} className="flex-1 p-2 min-w-lg">
                                            <CommentComponent comment={comment} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="h-32">
                </div>
            </div>
        </>
    )
}
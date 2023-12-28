"use client"
import React, { useEffect } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useState } from 'react'
import { useCookies } from 'react-cookie';
import { extractComment } from '@utils/helper'



function Comment({  }) {
    const [reader, setReader] = useState()
    const [comment, setComment] = useState([])
    const [cookies] = useCookies(["uid"]);

    let fetchReader = async () => {
        let res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "reader/?id=" + cookies["uid"])
        let reader = await res.json()
        setReader(reader)
    }
    let fetchComment = async () => {
        let res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "comment/post?postId=" + postId)
        let comments = await res.json()
        extractComment({ comments })
        setComment(comments)
    }
    useEffect(() => {
        fetchReader()
        fetchComment()
    }, [])
    // const [data] = useState([
    //     {
    //         userId: '01a',
    //         comId: '012',
    //         fullName: 'Riya Negi',
    //         avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
    //         text: 'Hey, Loved your blog! ',
    //         replies: [
    //             {
    //                 userId: '02b',
    //                 comId: '017',
    //                 fullName: 'Lily',
    //                 text: 'I have a doubt about the 4th point🤔',
    //                 avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
    //                 replies: [
    //                 ]
    //             }]
    //     }

    // ])
    let handleSubmit = async (data) => {
        data["postId"] = postId
        let fetchOptions = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
        // console.log(data);
        await fetch(process.env.NEXT_PUBLIC_BACKEND + "comment/", fetchOptions)
    }
    let handleReply = (data) => {
        data["postId"] = postId
        data["parentCommentId"] = data.parentOfRepliedCommentId ? data.parentOfRepliedCommentId : data.repliedToCommentId
        let fetchOptions = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
        fetch(process.env.NEXT_PUBLIC_BACKEND + "comment/", fetchOptions)
    }
    let handleDelete = (data) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND + "comment/?commentId=" + data["comIdToDelete"], { method: "DELETE" })
    }
    let handleEdit = (data) => {
        data["id"] = data["comId"]
        data["postId"] = postId

        let fetchOptions = {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
        fetch(process.env.NEXT_PUBLIC_BACKEND + "comment/", fetchOptions)
    }
    if (!reader) {
        return <div></div>
    }

    return <CommentSection
        onDeleteAction={handleDelete}
        onEditAction={handleEdit}
        onReplyAction={handleReply}
        onSubmitAction={handleSubmit}
        currentUser={{
            currentUserId: reader.id,
            currentUserImg:
                'https://api.dicebear.com/7.x/adventurer/svg?seed=' + reader.id,
            currentUserFullName: reader.name
        }}
        hrStyle={{ border: '0.5px solid #ff0072' }}
        commentData={comment}
        customImg={'https://api.dicebear.com/7.x/adventurer/svg?seed=' + reader.id}
        inputStyle={{ border: '1px solid rgb(208 208 208)' }}
        formStyle={{ backgroundColor: 'white' }}
        // overlayStyle={{ backgroundColor: '#0f0d29', color: 'white' }}
        submitBtnStyle={{
            border: '1px solid black',
            backgroundColor: 'black',
            padding: '7px 15px'
        }}
        cancelBtnStyle={{
            border: '1px solid gray',
            backgroundColor: 'gray',
            color: 'white',
            padding: '7px 15px'
        }}
        replyInputStyle={{ borderBottom: '1px solid black', color: 'black' }}
    />

}

export default Comment
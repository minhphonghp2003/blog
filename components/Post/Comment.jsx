"use client"
import React, { useEffect } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useState } from 'react'
import { useCookies } from 'react-cookie';



function Comment() {
    const [reader, setReader] = useState()
    const [cookies] = useCookies([]);

    let fetchReader = async () => {
        let res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "reader/?id=" + cookies["uid"])
        let reader = await res.json()
        setReader(reader)
    }
    useEffect(() => {
        fetchReader()
    }, [])
    const [data] = useState([
        {
            userId: '01a',
            comId: '012',
            fullName: 'Riya Negi',
            avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
            text: 'Hey, Loved your blog! ',
            replies: [
                {
                    userId: '02b',
                    comId: '017',
                    fullName: 'Lily',
                    text: 'I have a doubt about the 4th point🤔',
                    avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
                    replies: [
                    ]
                }]
        }

    ])
    let handleSubmit = (data) => { console.log(data); }
    let handleReply = (data) => { console.log(data); }
    let handleDelete = (data) => { console.log(data); }
    let handleEdit = (data) => { console.log(data); }
    if (!reader) {
        return <div></div>
    }

    return <CommentSection
        onDeleteAction={handleDelete}
        onEditAction={handleEdit}
        onReplyAction={handleReply}
        onSubmitAction={handleSubmit}
        // removeEmoji={true} 
        currentUser={{
            currentUserId: reader.id,
            currentUserImg:
                'https://api.dicebear.com/7.x/adventurer/svg?seed=' + reader.id,
            currentUserFullName: reader.name
        }}
        // advancedInput={true}
        hrStyle={{ border: '0.5px solid #ff0072' }}
        commentData={data}
        customImg={'https://api.dicebear.com/7.x/adventurer/svg?seed=' + reader.id}
        inputStyle={{ border: '1px solid rgb(208 208 208)' }}
        formStyle={{ backgroundColor: 'white' }}
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
"use client"
import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useState } from 'react'



function Comment() {
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

    return <CommentSection
        currentUser={{
            currentUserId: '01a',
            currentUserImg:
                'https://ui-avatars.com/api/name=Riya&background=random',
            currentUserFullName: 'Riya Negi'
        }}
        advancedInput={true}
        hrStyle={{ border: '0.5px solid #ff0072' }}
        commentData={data}
        customImg='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60'
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
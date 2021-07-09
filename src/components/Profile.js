import React from 'react'

function Profile({ score , firstName }) {

const Message = () => {
    if(score < 5){
        return (<h2 className="profile-msg">Could be done better ...</h2>)
    }
    else if(score > 5 && score < 8){
        return (<h2 className="profile-msg">Well Done ...</h2>)
    }
    else if(score > 8 ){
        return (<h2 className="profile-msg">You are Pro ...</h2>)
    }
}

    return (
        <div className="profile-container">
            <img src="https://img.icons8.com/glyph-neue/192/000000/walter-white.png" alt="walter"/>
            <h1 className="profile-name">{ firstName }</h1>
            <h2 className="profile-score">{`Your Score - ${score}`}</h2>
            <Message />
            <h4 className="profile-answered">{`You answered ${score} out of 10 questions`}</h4>
        </div>
    )
}

export default Profile

import React from 'react'
import Comment from './Comment'

const commentsData = [{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[{
                name:"jagadeesh",
                comment:"you are super awesome brother",
                replies:[{
                    name:"jagadeesh",
                    comment:"you are super awesome brother",
                    replies:[{
                        name:"jagadeesh",
                        comment:"you are super awesome brother",
                        replies:[{
                            name:"jagadeesh",
                            comment:"you are super awesome brother",
                            replies:[]
                        },]
                    },]
                },]
            },]
        },{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },]
    },{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },]
    },{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[]
    },]
},{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[
        {
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },
    ]
},{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[
        {
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },
    ]
},{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[]
},{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[]
    },{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },{
            name:"jagadeesh",
            comment:"you are super awesome brother",
            replies:[]
        },]
    },{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[]
    },]
},{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[]
},{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[]
},{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[]
    },{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[]
    },{
        name:"jagadeesh",
        comment:"you are super awesome brother",
        replies:[]
    },]
},{
    name:"jagadeesh",
    comment:"you are super awesome brother",
    replies:[]
}]

const CommentsList = ({data}) => {

  return (
      <div>
        {data.map((item,index) => (
        <div key={index}>
         <Comment info={item} />
         <div className='ml-4 shadow-lg pl-5 bg-red-300'>
         <CommentsList data={item.replies} />
         </div>
        </div>
        ))}
      </div>

  )
  
}


const Commentscontainer = () => {
  return (
    <div>
      <CommentsList data={commentsData} />

    </div>
  )
}

export default Commentscontainer
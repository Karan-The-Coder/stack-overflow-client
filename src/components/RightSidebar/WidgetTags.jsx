import React from 'react'

const WidgetTags = () => { 

    const tags = ['c','c++','html','css','javascript','python','bootstrap','react.Js','node.Js','express.Js','mongoDB','mySQL','next.Js','java','dJango'] ;

  return (
    <div className='widget-tags'>
        <h4>Watched tags</h4>
        <div className="widget-tags-div">
            {
                tags.map((tag, i) => (
                    <p key={i} >{tag}</p>
                    // here key={tag} is replaced by key={i}
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags

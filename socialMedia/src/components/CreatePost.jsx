import { useContext, useRef } from "react";
import { SocialMedia } from "../store/SocialMedia";


const CreatePost = () => {
   let userId=useRef(); 
   let title=useRef(); 
   let content=useRef(); 
   let noOfReactions=useRef(); 
   let hashtags=useRef(); 
   
   let postCurVal=()=>{
   
    let curtitle=title.current.value;
    let curcontent=content.current.value;
    let curnoOfReactions=noOfReactions.current.value;
    let curhashtags=hashtags.current.value;
    userId.current.value="";
    title.current.value="";
    content.current.value="";
    noOfReactions.current.value="";
    hashtags.current.value="";
    addPost(curtitle,curcontent,curnoOfReactions,curhashtags);
   }

   const {addPost}=useContext(SocialMedia);
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="userID" className="form-label">Enter Your User Id here</label>
                    <input type="text" className="form-control" id="userID"  placeholder="Your User Id" ref={userId} />
                </div>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Post Title</label>
                    <input type="text" className="form-control" id="postTitle" placeholder="How are you feeling today" ref={title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postContent" className="form-label">Post Content</label>
                    <textarea className="form-control" id="postContent" rows="4" placeholder="Tell us more about it" ref={content}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">No Of Reactions</label>
                    <input type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post" ref={noOfReactions}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="hashtags" className="form-label">Enter Your Hashtags here</label>
                    <input type="text" className="form-control" id="hashtags" placeholder="Please enter tags using space" ref={hashtags}/>
                </div>
               
                <button type="button" className="btn btn-primary" onClick={postCurVal}>post</button>
            </form>
        </>
    )
}

export default CreatePost;
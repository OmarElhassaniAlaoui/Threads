function PostThread ({userId} : {userId: string})  { 
    return ( 
        <div> 
            <form> 
                <label> 
                    Title: 
                    <input type="text" name="title" /> 
                </label> 
                <label> 
                    Description: 
                    <input type="text" name="description" /> 
                </label> 
                <label> 
                    Image: 
                    <input type="file" name="image" /> 
                </label> 
                <button type="submit">Submit</button> 
            </form> 
        </div>
    )  


} 

export default PostThread;
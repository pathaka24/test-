import jsonPlaceholder from "../api/jsonPlaceholder"

export const fetchPosts = () => async dispatch => {
      
    const response = await jsonPlaceholder("/posts")

     dispatch({type:'FETCH_POST' , payload: response})
      
}

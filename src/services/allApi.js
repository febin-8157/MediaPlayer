import commonApi from "./commonApi";
import serverUrl from "./serverUrl";
//upload video
export const uploadVideoAPI=async (uploadVideo)=>{
    return await commonApi("POST",`${serverUrl}/allvideos`,uploadVideo)
}
    //get all videos Api must called by view component
    export const getAllVideosApi=async ()=>{
        return await commonApi("GET",`${serverUrl}/allvideos`,"")
}
//store watch history Api must called by videocard
export const storeHistoryApi=async (videoDetails)=>{
    return await commonApi("POST",`${serverUrl}/history`,videoDetails)
}

export const getHistoryApi=async ()=>{
    return await commonApi("GET",`${serverUrl}/history`,"")
}
//removehistoryapi called history component
export const removeHistoryApi=async (historyId)=>{
    return await commonApi("DELETE",`${serverUrl}/history/${historyId}`,{})
}

//remove video api called by videocard component
export const removeVideoApi=async (videoId)=>{
    return await commonApi("DELETE",`${serverUrl}/allvideos/${videoId}`,{})
}
//add categoryApi
export const addCategoryApi=async (categoryDetails)=>{
    return await commonApi("POST",`${serverUrl}/category`,categoryDetails)
}
// getallcategory Api
export const getCategoryApi=async ()=>{
    return await commonApi("GET",`${serverUrl}/category`,"")
}
//remove category Api
export const removeCategoryApi=async (CategoryId)=>{
    return await commonApi("DELETE",`${serverUrl}/category/${CategoryId}`,{})
}
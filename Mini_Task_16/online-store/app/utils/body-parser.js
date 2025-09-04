export const parseBody = async (req)=>{
    const contentType = req.headers.get('content-type')
    if(contentType == 'application/x-www-form-urlencoded'){
        const rawbody = await req.text()
        const params = new URLSearchParams(rawbody)
        const data = Object.fromEntries(params)
        return data
    } 
    if(contentType == 'application/json'){
        const data = await req.json()
        return data
    }
    return null
}
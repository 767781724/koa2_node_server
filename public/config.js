const { json_retrieval_repository, json_hit_alert,json_surveillance_task,json_repository,json_camera,json_retrieval_camera } = require("./json_template");

const config_retrieval_repository=(start,limt)=>{
    let res={
		"message": "OK",
		"results": [],
		"retrieval_query_id": "53",
		"rtn": 0,
		"total": 25
    }
    if(start>25){
        return res;
    }
    for(let i=0;i<limt;i++){
        res.results.push(
            json_retrieval_repository
        )
    }
    return res;
}
const config_hit_alert=(start,limt)=>{
    let res={
		"message": "OK",
		"pair_results": [],
		"rtn": 0,
		"total": 25
    }
    if(start>25){
        return res;
    }
    for(let i=0;i<limt;i++){
        res.pair_results.push(
            json_hit_alert
        )
    }
    return res;
}
const config_retrieval_camera=(start,limit)=>{
    let res={
		"message": "OK",
		"results": [],
        "rtn": 0,
        "retrieval_query_id": "53",
		"total": 25
    }
    if(start>25){
        return res;
    }
    for(let i=0;i<limit;i++){
        res.results.push(
            json_retrieval_camera(i)
        )
    }
    return res;
}
const config_surveillance_task=()=>{
    let res= {
        "message": "OK",
		"surveillances": [],
        "rtn": 0,
        "retrieval_query_id": "53",
    }
    for(let i=0;i<9;i++){
        res.surveillances.push(json_surveillance_task(i))
    }
    return res;
}
const config_repository=()=>{
    let res= {
        "message": "OK",
		"results": [],
		"rtn": 0,
    }
    for(let i=0;i<9;i++){
        res.results.push(json_repository(i))
    }
    return res;
}
const config_face_detection=()=>{
    let res= {
        "message": "OK",
		"results": [],
		"rtn": 0,
    }
    for(let i=0;i<9;i++){
        res.results.push(json_repository(i))
    }
    return res;
}
const config_face_verify=()=>{
    let res= {
        "message": "OK",
		"similarity": 80.0,
		"rtn": 0,
    }
    return res;
}
const config_camera=()=>{
    let res= {
        "message": "OK",
        "sets":[],
        "cameras":[],
		"rtn": 0,
    }
    for(let i=0;i<9;i++){
        res.cameras.push(json_camera(i))
    }
    return res;
}
module.exports={
    config_retrieval_repository,
    config_hit_alert,
    config_surveillance_task,
    config_repository,
    config_face_detection,
    config_face_verify,
    config_camera,
    config_retrieval_camera
}
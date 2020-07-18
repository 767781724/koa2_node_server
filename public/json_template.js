const json_retrieval_repository={
    "repository_id": "3",
    "face_image_id": "844424930132127",
    "face_image_uri": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2091711702,2468700162&fm=11&gp=0.jpg",
    "face_rect": {
        "h": 1110,
        "w": 1110,
        "x": 344,
        "y": 837
    },
    "picture_uri": "",
    "similarity": 94.95722095930476,
    "timestamp": 1497584008,
    "person_id": "",
    "gender": "",
    "name": "",
    "nation": 0,
    "born_year": 1990,
    "extra_meta": {
        "custom_field_1": "custom_content"
    }
}
const json_hit_alert = {
    "hit_detail": {
        "hit_record_id": "37",
        "hit_timestamp": 1498229401,
        "camera_id": "0",
        "camera_face_image_id": "281474976713610",
        "hit_repository_cluster_id": "Kenya",
        "hit_repository_id": "3",
        "hit_face_image_id": "844424930132127",
        "hit_similarity": 81.218029322596,
    },
    "result1": {
        "camera_id": "0",
        "face_image_id": "281474976713610",
        "face_image_uri": "normal://face-video/20170623/YPjP0QgUCm9fB0MZu-rF5g==@1",
        "face_rect": {
            "h": 61,
            "w": 61,
            "x": 752,
            "y": 352
        },
        "picture_uri": "normal://face-video/20170623/aKGjkfnHNhtpBi5rDcbX6Q==@1",
        "timestamp": 1498229401
    },
    "result2": {
        "cluster_id": "Kenya",
        "repository_id": "3",
        "face_image_id": "844424930132127",
        "face_image_uri": "normal://repository-builder/20170616/Sbs5oZpq3Fpn-qWE88881g==@1",
        "face_rect": {
            "h": 1110,
            "w": 1110,
            "x": 344,
            "y": 837
        },
        "picture_uri": "normal://repository-builder/20170616/rTS+kCb3rD34tqd8T1G2Dg==@1",
        "timestamp": 1497584008,
        "person_id": "",
        "name": "XXX",
        "gender": 0,
        "nation": 0,
        "born_year": 0,
        "extra_meta": {
            "custom_field_1": "custom_content"
        }
    }
}
const json_surveillance_task=(index)=>({
    name:`布控${index}`,
    id:`${index}`,
    ready:0, //0表示已经ready, 1表示正在准备中
    enable:0, // int 0表示开启, 1表示未开启
    units:[     // Array 布控单元列表
        {
            camera_id:`camera_id_${index}`,
            repository_cluster_id:`集群id-${index}`,
            repository_id:`${index}`,
            threshold:80.0
        }
    ],       
    extra_meta:{}
})
const json_repository=(index)=>({
    name:`人像库${index}`,
    id:`${index}`,
    face_image_num:100,
    creator_id:11111,
    create_time:1595050097,
    permission_map:{},
    extra_meta:{}
})
const json_camera=(index)=>({
    name:`相机${index}`,
    id:index,
    url:'url',
    enabled:1,
    rec_params:{},
    permission_map:{},
    predecessor_ids:[],
    extra_meta:{},
    status:4
})
module.exports={
    json_retrieval_repository,
    json_hit_alert,
    json_surveillance_task,
    json_repository,
    json_camera
}
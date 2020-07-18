const {
	config_retrieval_repository,
	config_hit_alert,
	config_surveillance_task,
	config_repository,
	config_face_verify,
	config_camera
} = require('../public/config')

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
	await ctx.render('index', {
		title: 'Hello Koa 2!'
	})
})

router.get('/demo', async (ctx, next) => {
	ctx.body = {
		code: 200,
		message: 'ok',
		data: {
			content: 'hello world'
		}
	}
})
router.post('/business/api/login', async (ctx, next) => {
	ctx.body = {
		rtn: 0,
		message: 'ok',
		session_id: 'demosessionid@567891'
	}
})
//人像检索
router.post('/business/api/retrieval_repository', async (ctx, next) => {
	const params = ctx.request.body;
	ctx.body = config_retrieval_repository(params.start, params.limt)
})
//告警接口
router.post('/business/api/hit/alert', async (ctx, next) => {
	const params = ctx.request.body;
	ctx.body = config_hit_alert(params.start, params.limt)
})
//查看布控库
router.get('/business/api/surveillance/task', async (ctx, next) => {
	ctx.body = config_surveillance_task()
})
//查看人像库
router.get('/business/api/repository', async (ctx, next) => {
	ctx.body = config_repository()
})
//摄像头列表
router.get('/business/api/camera', async (ctx, next) => {
	ctx.body = config_camera()
})
//认证核验-人脸识别
router.post('/business/api/face_detection', async (ctx, next) => {
	ctx.body = config_repository()
})
//认证核验
router.post('/business/api/face/verify', async (ctx, next) => {
	ctx.body = config_face_verify()
})
//token保活
router.get('/business/api/user/self', async (ctx) => {
	ctx.body = {
		rtn: 0,
		message: 'ok',
		id: 'userid',
		name: 'test',
		extra_meta: {}
	}
})
//一键布控
router.post('/business/api/repository/picture/batch_single_person', async (ctx) => {
	ctx.body = {
		rtn: 0,
		message: 'ok',
		retsults: [{
			picture_uri: 'uri',
			face_image_id: 'id',
			face_image_uri: 'url',
			face_rect:{}
		}]
	}
})
module.exports = router

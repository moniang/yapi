const koaRouter = require('koa-router');
const interfaceController = require('./controllers/interface.js');
const groupController = require('./controllers/group.js');
const userController = require('./controllers/user.js');
const interfaceColController = require('./controllers/interfaceCol.js');

const yapi = require('./yapi.js');
const projectController = require('./controllers/project.js');
const logController = require('./controllers/log.js');
const followController = require('./controllers/follow.js');

const router = koaRouter();

const authLevel = {
    admin: 0,
    owner: 10,
    dev: 20,
    member:30,
    guest:100
}

let INTERFACE_CONFIG = {
    interface: {
        prefix: '/interface/',
        controller: interfaceController
    },
    user: {
        prefix: '/user/',
        controller: userController
    },
    group: {
        prefix: '/group/',
        controller: groupController
    },
    project: {
        prefix: '/project/',
        controller: projectController
    },
    log: {
        prefix: '/log/',
        controller: logController
	},
	follow: {
        prefix: '/follow/',
        controller: followController
	},
	col: {
		prefix: '/col/',
		controller: interfaceColController
	}
};

let routerConfig = {
	"group": [
		{
			"action": "list",
			"path": "list",
			"method": "get"
		},
		{
			"action": "add",
			"path": "add",
			"method": "post"
		},
		{
			"action": "up",
			"path": "up",
			"method": "post"
		},
		{
			"action": "del",
			"path": "del",
			"method": "post"
		},
		{
			"action": "addMember",
			"path": "add_member",
			"method": "post"
		},
		{
			"action": "changeMemberRole",
			"path": "change_member_role",
			"method": "post"
		},
		{
			"action": "delMember",
			"path": "del_member",
			"method": "post"
		},
		{
			"action": "getMemberList",
			"path": "get_member_list",
			"method": "get"
		},{
			action: 'get',
			path: 'get',
			method: 'get'
		}
	],
	"user": [
		{
			"action": "login",
			"path": "login",
			"method": "post"
		},
		{
			"action": "reg",
			"path": "reg",
			"method": "post"
		},
		{
			"action": "list",
			"path": "list",
			"method": "get"
		},
		{
			"action": "findById",
			"path": "find",
			"method": "get"
		},
		{
			"action": "update",
			"path": "update",
			"method": "post"
		},
		{
			"action": "del",
			"path": "del",
			"method": "post"
		},
		{
			"action": "getLoginStatus",
			"path": "status",
			"method": "get"
		},
		{
			"action": "logout",
			"path": "logout",
			"method": "get"
		},
		{
			"action": "loginByToken",
			"path": "login_by_token",
			"method": "post"
		},
		{
			"action": "changePassword",
			"path": "change_password",
			"method": "post"
		},
		{
			"action": "search",
			"path": "search",
			"method": "get"
		},
		{
			"action": "project",
			"path": "project",
			"method": "get"
		},{
			"action": "avatar",
			"path": "avatar",
			"method": "get"
		},{
			action: "uploadAvatar",
			path: "upload_avatar",
			method: "post"
		}
	],
	"project": [
		{
			"action": "upSet",
			"path": "upset",
			"method": "post"
		},{
			"action": "add",
			"path": "add",
			"method": "post"
		},
		{
			"action": "list",
			"path": "list",
			"method": "get"
		},
		{
			"action": "get",
			"path": "get",
			"method": "get"
		},
		{
			"action": "up",
			"path": "up",
			"method": "post"
		},
		{
			"action": "del",
			"path": "del",
			"method": "post"
		},
		{
			"action": "addMember",
			"path": "add_member",
			"method": "post"
		},
		{
			"action": "delMember",
			"path": "del_member",
			"method": "post"
		},
		{
			"action": "changeMemberRole",
			"path": "change_member_role",
			"method": "post"
		},
		{
			"action": "getMemberList",
			"path": "get_member_list",
			"method": "get"
		},
		{
			"action": "search",
			"path": "search",
			"method": "get"
		},
		{
			"action": "download",
			"path": "download",
			"method": "get"
		}
	],
	"interface": [
		{
			"action": "add",
			"path": "add",
			"method": "post"
		},
		{
			"action": "getCatMenu",
			"path": "getCatMenu",
			"method": "get"
		},
		{
			"action": "list",
			"path": "list",
			"method": "get"
		},
		{
			"action": "get",
			"path": "get",
			"method": "get"
		},
		{
			"action": "up",
			"path": "up",
			"method": "post"
		},
		{
			"action": "del",
			"path": "del",
			"method": "post"
		},
		{
			"action": "interUpload",
			"path": "interUpload",
			"method": "post"
		},
		{
			action: 'listByCat',
			path: 'list_cat',
			method: 'get'
		},{
			action: 'listByMenu',
			path: 'list_menu',
			method: 'get'
		},{
			action: 'addCat',
			path: 'add_cat',
			method: 'post'
		},{
			action: 'upCat',
			path: 'up_cat',
			method: 'post'
		},{
			action: 'delCat',
			path: 'del_cat',
			method: 'post'
		}
	],
	"log": [
		{
			"action": "list",
			"path": "list",
			"method": "get"
		}
	],
	"follow": [{
		"action": "list",
		"path": "list",
		"method": "get"
	},{
		"action": "add",
		"path": "add",
		"method": "post"
	},{
		"action": "del",
		"path": "del",
		"method": "post"
	}],
	"col": [{
		action: "addCol",
		path: "add_col",
		method: "post"
	}, {
		action: "list",
		path: "list",
		method: "get"
	},{
		action: "getCaseList",
		path: "case_list",
		method: "get"
	},{
		action: "addCase",
		path: "add_case",
		method: "post"
	},{
		action: "upCase",
		path: "up_case",
		method: "post"
	},{
		action: "getCase",
		path: "case",
		method: "get"
	},{
		action: "upCol",
		path: "up_col",
		method: "post"
	},{
		action: "upCaseIndex",
		path: "up_col_index",
		method: "post"
	},{
		action: "delCol",
		path: "del_col",
		method: "get"
	},{
		action: "delCase",
		path: "del_case",
		method: "get"
	}
	]
}

let pluginsRouterPath = [];

function addPluginRouter(config){
	if(!config.path || !config.controller || !config.action){
		throw new Error('Plugin Route config Error');
	}
	let method = config.method || 'GET';
	let routerPath = '/plugin/' + config.path;
	if(pluginsRouterPath.indexOf(routerPath) > -1){
		throw new Error('Plugin Route path conflict, please try rename the path')
	}
	pluginsRouterPath.push(routerPath);
	createAction(config.controller, config.action, routerPath, method);
}

yapi.emitHookSync('add_router', addPluginRouter);

for(let ctrl in routerConfig){
    let actions = routerConfig[ctrl];
    actions.forEach( (item) => {
				let routerController = INTERFACE_CONFIG[ctrl].controller;
				let routerPath = INTERFACE_CONFIG[ctrl].prefix + item.path;
        createAction(routerController, item.action, routerPath, item.method);
    } )
}

/**
 *
 * @param {*} routerController controller
 * @param {*} path  routerPath
 * @param {*} method request_method , post get put delete ...
 * @param {*} action controller action_name
 */
function createAction(routerController, action, path, method) {
    router[method]("/api" +  path, async (ctx) => {
        let inst = new routerController(ctx);

        await inst.init(ctx);

        if (inst.$auth === true) {
            await inst[action].call(inst, ctx);
        } else {
            ctx.body = yapi.commons.resReturn(null, 40011, '请登录...');
        }
    });
}


module.exports = router;

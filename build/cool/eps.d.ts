declare namespace Eps {
	interface BaseSysUserEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysDepartmentEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MallAddressEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CategoryEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface LogisticsEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface EvaluateEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface OrderEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	interface BaseSysRole {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysRoleEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			list: string;
			update: string;
			delete: string;
			info: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			list: boolean;
			update: boolean;
			delete: boolean;
			info: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysMenu {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysMenuEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * import
		 */
		import(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * create
		 */
		create(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * export
		 */
		export(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			list: string;
			add: string;
			import: string;
			info: string;
			create: string;
			update: string;
			export: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			list: boolean;
			add: boolean;
			import: boolean;
			info: boolean;
			create: boolean;
			update: boolean;
			export: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysLog {
		/**
		 * getKeep
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * setKeep
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysLogEntity[];
			[key: string]: any;
		}>;

		/**
		 * clear
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getKeep: string; setKeep: string; page: string; clear: string };

		/**
		 * 权限状态
		 */
		_permission: { getKeep: boolean; setKeep: boolean; page: boolean; clear: boolean };

		request: Service["request"];
	}

	interface BaseSysDepartment {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * order
		 */
		order(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { add: string; update: string; delete: string; list: string; order: string };

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			delete: boolean;
			list: boolean;
			order: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysUser {
		/**
		 * move
		 */
		move(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysUserEntity[];
			[key: string]: any;
		}>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			move: string;
			add: string;
			update: string;
			page: string;
			delete: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			move: boolean;
			add: boolean;
			update: boolean;
			page: boolean;
			delete: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysParam {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysParamEntity[];
			[key: string]: any;
		}>;

		/**
		 * html
		 */
		html(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			info: string;
			update: string;
			delete: string;
			page: string;
			html: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			info: boolean;
			update: boolean;
			delete: boolean;
			page: boolean;
			html: boolean;
		};

		request: Service["request"];
	}

	interface BaseOpen {
		/**
		 * refreshToken
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * html
		 */
		html(data?: any): Promise<any>;

		/**
		 * login
		 */
		login(data?: any): Promise<any>;

		/**
		 * captcha
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * eps
		 */
		eps(data?: any): Promise<any>;

		/**
		 * gen
		 */
		gen(data?: any): Promise<any>;

		/**
		 * check
		 */
		check(data?: any): Promise<any>;

		/**
		 * captchaMode
		 */
		captchaMode(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			html: string;
			login: string;
			captcha: string;
			eps: string;
			gen: string;
			check: string;
			captchaMode: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			html: boolean;
			login: boolean;
			captcha: boolean;
			eps: boolean;
			gen: boolean;
			check: boolean;
			captchaMode: boolean;
		};

		request: Service["request"];
	}

	interface BaseComm {
		/**
		 * personUpdate
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * eps
		 */
		eps(data?: any): Promise<any>;

		/**
		 * uploadMode
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * upload
		 */
		upload(data?: any): Promise<any>;

		/**
		 * permmenu
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * person
		 */
		person(data?: any): Promise<any>;

		/**
		 * logout
		 */
		logout(data?: any): Promise<any>;

		/**
		 * program
		 */
		program(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			personUpdate: string;
			eps: string;
			uploadMode: string;
			upload: string;
			permmenu: string;
			person: string;
			logout: string;
			program: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			personUpdate: boolean;
			eps: boolean;
			uploadMode: boolean;
			upload: boolean;
			permmenu: boolean;
			person: boolean;
			logout: boolean;
			program: boolean;
		};

		request: Service["request"];
	}

	interface BaseCoding {
		/**
		 * getModuleTree
		 */
		getModuleTree(data?: any): Promise<any>;

		/**
		 * createCode
		 */
		createCode(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getModuleTree: string; createCode: string };

		/**
		 * 权限状态
		 */
		_permission: { getModuleTree: boolean; createCode: boolean };

		request: Service["request"];
	}

	interface MallAddress {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<MallAddressEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MallAddressEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<MallAddressEntity[]>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			info: string;
			add: string;
			page: string;
			list: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			info: boolean;
			add: boolean;
			page: boolean;
			list: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface MallOrder {
		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<OrderEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * pageList
		 */
		pageList(data?: any): Promise<any>;

		/**
		 * statistics
		 */
		statistics(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: OrderEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			delete: string;
			info: string;
			add: string;
			pageList: string;
			statistics: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			delete: boolean;
			info: boolean;
			add: boolean;
			pageList: boolean;
			statistics: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface MallEvaluate {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: EvaluateEntity[];
			[key: string]: any;
		}>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<EvaluateEntity>;

		/**
		 * 权限标识
		 */
		permission: { page: string; delete: string; info: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean; delete: boolean; info: boolean };

		request: Service["request"];
	}

	interface MallCategory {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<CategoryEntity>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<CategoryEntity[]>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * categoryWithCount
		 */
		categoryWithCount(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			add: string;
			info: string;
			update: string;
			list: string;
			delete: string;
			categoryWithCount: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			add: boolean;
			info: boolean;
			update: boolean;
			list: boolean;
			delete: boolean;
			categoryWithCount: boolean;
		};

		request: Service["request"];
	}

	interface MallGoods {
		/**
		 * info
		 */
		info(data?: any): Promise<GoodsEntity>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: { info: string; update: string; delete: string; add: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			update: boolean;
			delete: boolean;
			add: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface MallLogistics {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: LogisticsEntity[];
			[key: string]: any;
		}>;

		/**
		 * statistics
		 */
		statistics(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<LogisticsEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			statistics: string;
			add: string;
			update: string;
			delete: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			statistics: boolean;
			add: boolean;
			update: boolean;
			delete: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface DictType {
		/**
		 * info
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			add: string;
			page: string;
			list: string;
			update: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			add: boolean;
			page: boolean;
			list: boolean;
			update: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * data
		 */
		data(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * types
		 */
		types(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			data: string;
			info: string;
			types: string;
			update: string;
			delete: string;
			page: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			data: boolean;
			info: boolean;
			types: boolean;
			update: boolean;
			delete: boolean;
			page: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface PluginInfo {
		/**
		 * install
		 */
		install(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PluginInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			install: string;
			info: string;
			add: string;
			update: string;
			delete: string;
			page: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			install: boolean;
			info: boolean;
			add: boolean;
			update: boolean;
			delete: boolean;
			page: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface SpaceType {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			page: string;
			list: string;
			add: string;
			update: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			page: boolean;
			list: boolean;
			add: boolean;
			update: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface SpaceInfo {
		/**
		 * info
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			update: string;
			delete: string;
			page: string;
			add: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			update: boolean;
			delete: boolean;
			page: boolean;
			add: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface TaskInfo {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TaskInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * log
		 */
		log(data?: any): Promise<any>;

		/**
		 * once
		 */
		once(data?: any): Promise<any>;

		/**
		 * stop
		 */
		stop(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * start
		 */
		start(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			log: string;
			once: string;
			stop: string;
			update: string;
			delete: string;
			info: string;
			add: string;
			start: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			log: boolean;
			once: boolean;
			stop: boolean;
			update: boolean;
			delete: boolean;
			info: boolean;
			add: boolean;
			start: boolean;
		};

		request: Service["request"];
	}

	interface RecycleData {
		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * restore
		 */
		restore(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: RecycleDataEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<RecycleDataEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			add: string;
			info: string;
			delete: string;
			restore: string;
			page: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			add: boolean;
			info: boolean;
			delete: boolean;
			restore: boolean;
			page: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * info
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			page: string;
			list: string;
			add: string;
			update: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			page: boolean;
			list: boolean;
			add: boolean;
			update: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	type Service = {
		/**
		 * 基础请求
		 */
		request(options?: {
			url: string;
			method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
			data?: any;
			params?: any;
			headers?: {
				authorization?: string;
				[key: string]: any;
			};
			timeout?: number;
			proxy?: boolean;
			[key: string]: any;
		}): Promise<any>;

		base: {
			sys: {
				role: BaseSysRole;
				menu: BaseSysMenu;
				log: BaseSysLog;
				department: BaseSysDepartment;
				user: BaseSysUser;
				param: BaseSysParam;
			};
			open: BaseOpen;
			comm: BaseComm;
			coding: BaseCoding;
		};
		mall: {
			address: MallAddress;
			order: MallOrder;
			evaluate: MallEvaluate;
			category: MallCategory;
			goods: MallGoods;
			logistics: MallLogistics;
		};
		dict: { type: DictType; info: DictInfo };
		plugin: { info: PluginInfo };
		space: { type: SpaceType; info: SpaceInfo };
		task: { info: TaskInfo };
		recycle: { data: RecycleData };
		user: { info: UserInfo };
	};

	type DictKey =
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined";
}

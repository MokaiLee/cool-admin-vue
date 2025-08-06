declare namespace Eps {
	interface DictTypeEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 标识
		 */
		key?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * 类型ID
		 */
		typeId?: number;

		/**
		 * 父ID
		 */
		parentId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 值
		 */
		value?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 任务ID
		 */
		jobId?: string;

		/**
		 * 最大执行次数 不传为无限次
		 */
		repeatCount?: number;

		/**
		 * 每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效
		 */
		every?: number;

		/**
		 * 状态 0:停止 1：运行
		 */
		status?: number;

		/**
		 * 服务实例名称
		 */
		service?: string;

		/**
		 * 状态 0:cron 1：时间间隔
		 */
		taskType?: number;

		/**
		 * 状态 0:系统 1：用户
		 */
		type?: number;

		/**
		 * 任务数据
		 */
		data?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * cron
		 */
		cron?: string;

		/**
		 * 下一次执行时间
		 */
		nextRunTime?: Date;

		/**
		 * 开始时间
		 */
		startDate?: Date;

		/**
		 * 结束时间
		 */
		endDate?: Date;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * 表信息
		 */
		entityInfo?: string;

		/**
		 * 操作人
		 */
		userId?: number;

		/**
		 * 被删除的数据
		 */
		data?: string;

		/**
		 * 请求的接口
		 */
		url?: string;

		/**
		 * 请求参数
		 */
		params?: string;

		/**
		 * 删除数据条数
		 */
		count?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface LogisticsEntity {
		/**
		 * 物流公司
		 */
		company?: string;

		/**
		 * 运单号
		 */
		trackingNo?: string;

		/**
		 * 物流状态 0-运输中 1-已签收 2-异常
		 */
		status?: number;

		/**
		 * 发货时间
		 */
		deliveryTime?: Date;

		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 收货地址ID
		 */
		addressId?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 订单ID
		 */
		orderId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CategoryEntity {
		/**
		 * 图片
		 */
		pic?: string;

		/**
		 * 分类名称
		 */
		categoryName?: string;

		/**
		 * 父类ID
		 */
		parentId?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface EvaluateEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 评分（1-5）
		 */
		score?: number;

		/**
		 * 商品ID
		 */
		goodsId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsEntity {
		/**
		 * 图片
		 */
		pic?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 分类ID
		 */
		categoryId?: number;

		/**
		 * 品牌
		 */
		brand?: string;

		/**
		 * 产地
		 */
		origin?: string;

		/**
		 * 状态 1=上架，0=下架
		 */
		status?: number;

		/**
		 * 详情
		 */
		detail?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface OrderEntity {
		/**
		 * 订单编号
		 */
		orderNo?: string;

		/**
		 * 订单状态 0-待付款 1-已支付 2-已发货 3-已完成 4-已取消 5-退款中
		 */
		status?: number;

		/**
		 * 总金额
		 */
		totalAmount?: string;

		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 支付方式 0-微信 1-支付宝 2-银联
		 */
		payType?: number;

		/**
		 * 收货地址ID
		 */
		addressId?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * 键
		 */
		keyName?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 数据
		 */
		data?: string;

		/**
		 * 数据类型 0:字符串 1:数组 2:键值对
		 */
		dataType?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysDepartmentEntity {
		/**
		 * 部门名称
		 */
		name?: string;

		/**
		 * 上级部门ID
		 */
		parentId?: number;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 行为
		 */
		action?: string;

		/**
		 * IP
		 */
		ip?: string;

		/**
		 * 参数
		 */
		params?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * 父菜单ID
		 */
		parentId?: number;

		/**
		 * 菜单名称
		 */
		name?: string;

		/**
		 * 权限
		 */
		perms?: string;

		/**
		 * 类型 0：目录 1：菜单 2：按钮
		 */
		type?: number;

		/**
		 * 图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 菜单地址
		 */
		router?: string;

		/**
		 * 视图地址
		 */
		viewPath?: string;

		/**
		 * 路由缓存
		 */
		keepAlive?: boolean;

		/**
		 * 是否显示
		 */
		isShow?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * 部门ID
		 */
		departmentId?: number;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 用户名
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 密码版本
		 */
		passwordV?: number;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 头像
		 */
		headImg?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 邮箱
		 */
		email?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态 0:禁用 1：启用
		 */
		status?: number;

		/**
		 * socketId
		 */
		socketId?: string;

		/**
		 * 租户id
		 */
		tenantId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 角色标签
		 */
		label?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 数据权限是否关联上下级
		 */
		relevance?: number;

		/**
		 * 菜单权限
		 */
		menuIdList?: string;

		/**
		 * 部门权限
		 */
		departmentIdList?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 登录唯一ID
		 */
		unionid?: string;

		/**
		 * 头像
		 */
		avatarUrl?: string;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 性别 0-未知 1-男 2-女
		 */
		gender?: number;

		/**
		 * 状态 0-禁用 1-正常 2-已注销
		 */
		status?: number;

		/**
		 * 登录方式 0-小程序 1-公众号 2-H5
		 */
		loginType?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 简介
		 */
		description?: string;

		/**
		 * 实例对象
		 */
		key?: string;

		/**
		 * Hook
		 */
		hook?: string;

		/**
		 * 描述
		 */
		readme?: string;

		/**
		 * 版本
		 */
		version?: string;

		/**
		 * Logo(base64)
		 */
		logo?: string;

		/**
		 * 作者
		 */
		author?: string;

		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;

		/**
		 * 插件的plugin.json
		 */
		pluginJson?: string;

		/**
		 * 配置
		 */
		config?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * 类别名称
		 */
		name?: string;

		/**
		 * 父分类ID
		 */
		parentId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * 地址
		 */
		url?: string;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * 分类ID
		 */
		classifyId?: number;

		/**
		 * 文件id
		 */
		fileId?: string;

		/**
		 * 文件名
		 */
		name?: string;

		/**
		 * 文件大小
		 */
		size?: number;

		/**
		 * 文档版本
		 */
		version?: number;

		/**
		 * 文件位置
		 */
		filePath?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	interface DictType {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			delete: string;
			info: string;
			update: string;
			list: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			delete: boolean;
			info: boolean;
			update: boolean;
			list: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 获得字典数据
		 */
		types(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			add: string;
			types: string;
			info: string;
			update: string;
			list: string;
			page: string;
			data: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			types: boolean;
			info: boolean;
			update: boolean;
			list: boolean;
			page: boolean;
			data: boolean;
		};

		request: Service["request"];
	}

	interface TaskInfo {
		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TaskInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * 停止任务
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 执行一次
		 */
		once(data?: any): Promise<any>;

		/**
		 * 任务日志
		 */
		log(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 开始任务
		 */
		start(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			info: string;
			stop: string;
			once: string;
			log: string;
			update: string;
			add: string;
			start: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			info: boolean;
			stop: boolean;
			once: boolean;
			log: boolean;
			update: boolean;
			add: boolean;
			start: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface RecycleData {
		/**
		 * 恢复数据
		 */
		restore(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<RecycleDataEntity[]>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: RecycleDataEntity[];
			[key: string]: any;
		}>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			restore: string;
			info: string;
			add: string;
			list: string;
			delete: string;
			page: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			restore: boolean;
			info: boolean;
			add: boolean;
			list: boolean;
			delete: boolean;
			page: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface MallLogistics {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<LogisticsEntity>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: LogisticsEntity[];
			[key: string]: any;
		}>;

		/**
		 * 物流统计
		 */
		statistics(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			update: string;
			info: string;
			delete: string;
			page: string;
			statistics: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			info: boolean;
			delete: boolean;
			page: boolean;
			statistics: boolean;
		};

		request: Service["request"];
	}

	interface MallCategory {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<CategoryEntity>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<CategoryEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * categoryWithCount
		 */
		categoryWithCount(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			add: string;
			info: string;
			list: string;
			page: string;
			update: string;
			categoryWithCount: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			update: boolean;
			categoryWithCount: boolean;
		};

		request: Service["request"];
	}

	interface MallEvaluate {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: EvaluateEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<EvaluateEntity>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; page: string; info: string };

		/**
		 * 权限状态
		 */
		_permission: { delete: boolean; page: boolean; info: boolean };

		request: Service["request"];
	}

	interface MallGoods {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<GoodsEntity>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: { add: string; delete: string; info: string; update: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			delete: boolean;
			info: boolean;
			update: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface MallOrder {
		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: OrderEntity[];
			[key: string]: any;
		}>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 订单统计
		 */
		statistics(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<OrderEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			delete: string;
			update: string;
			statistics: string;
			add: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			delete: boolean;
			update: boolean;
			statistics: boolean;
			add: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface BaseComm {
		/**
		 * 修改个人信息
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * 退出
		 */
		logout(data?: any): Promise<any>;

		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 权限与菜单
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * 编程
		 */
		program(data?: any): Promise<any>;

		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 个人信息
		 */
		person(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			personUpdate: string;
			logout: string;
			upload: string;
			permmenu: string;
			program: string;
			uploadMode: string;
			eps: string;
			person: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			personUpdate: boolean;
			logout: boolean;
			upload: boolean;
			permmenu: boolean;
			program: boolean;
			uploadMode: boolean;
			eps: boolean;
			person: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysParam {
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysParamEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 根据键返回网页的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			page: string;
			add: string;
			delete: string;
			html: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			page: boolean;
			add: boolean;
			delete: boolean;
			html: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysDepartment {
		/**
		 * 排序
		 */
		order(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * 权限标识
		 */
		permission: { order: string; delete: string; add: string; update: string; list: string };

		/**
		 * 权限状态
		 */
		_permission: {
			order: boolean;
			delete: boolean;
			add: boolean;
			update: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysLog {
		/**
		 * 获得日志保存时间
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysLogEntity[];
			[key: string]: any;
		}>;

		/**
		 * 设置日志保存时间
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * 清理日志
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getKeep: string; page: string; setKeep: string; clear: string };

		/**
		 * 权限状态
		 */
		_permission: { getKeep: boolean; page: boolean; setKeep: boolean; clear: boolean };

		request: Service["request"];
	}

	interface BaseSysMenu {
		/**
		 * 信息
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 导入
		 */
		import(data?: any): Promise<any>;

		/**
		 * 导出
		 */
		export(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysMenuEntity[];
			[key: string]: any;
		}>;

		/**
		 * 创建代码
		 */
		create(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			update: string;
			add: string;
			import: string;
			export: string;
			list: string;
			page: string;
			create: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			update: boolean;
			add: boolean;
			import: boolean;
			export: boolean;
			list: boolean;
			page: boolean;
			create: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysUser {
		/**
		 * 移动部门
		 */
		move(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysUserEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			move: string;
			delete: string;
			add: string;
			info: string;
			update: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			move: boolean;
			delete: boolean;
			add: boolean;
			info: boolean;
			update: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysRole {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysRoleEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface BaseOpen {
		/**
		 * 登录
		 */
		login(data?: any): Promise<any>;

		/**
		 * 验证码类型
		 */
		captchaMode(data?: any): Promise<any>;

		/**
		 * check
		 */
		check(data?: any): Promise<any>;

		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 获得网页内容的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 刷新token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * 验证码
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * gen
		 */
		gen(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			login: string;
			captchaMode: string;
			check: string;
			eps: string;
			html: string;
			refreshToken: string;
			captcha: string;
			gen: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			login: boolean;
			captchaMode: boolean;
			check: boolean;
			eps: boolean;
			html: boolean;
			refreshToken: boolean;
			captcha: boolean;
			gen: boolean;
		};

		request: Service["request"];
	}

	interface BaseCoding {
		/**
		 * 创建代码
		 */
		createCode(data?: any): Promise<any>;

		/**
		 * 获取模块目录结构
		 */
		getModuleTree(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { createCode: string; getModuleTree: string };

		/**
		 * 权限状态
		 */
		_permission: { createCode: boolean; getModuleTree: boolean };

		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			info: string;
			add: string;
			list: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			info: boolean;
			add: boolean;
			list: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface PluginInfo {
		/**
		 * 卸载插件
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 安装插件
		 */
		install(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PluginInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			list: string;
			install: string;
			page: string;
			info: string;
			add: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			list: boolean;
			install: boolean;
			page: boolean;
			info: boolean;
			add: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface SpaceType {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			add: string;
			update: string;
			info: string;
			list: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface SpaceInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			add: string;
			update: string;
			info: string;
			list: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
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

		dict: { type: DictType; info: DictInfo };
		task: { info: TaskInfo };
		recycle: { data: RecycleData };
		mall: {
			logistics: MallLogistics;
			category: MallCategory;
			evaluate: MallEvaluate;
			goods: MallGoods;
			order: MallOrder;
		};
		base: {
			comm: BaseComm;
			sys: {
				param: BaseSysParam;
				department: BaseSysDepartment;
				log: BaseSysLog;
				menu: BaseSysMenu;
				user: BaseSysUser;
				role: BaseSysRole;
			};
			open: BaseOpen;
			coding: BaseCoding;
		};
		user: { info: UserInfo };
		plugin: { info: PluginInfo };
		space: { type: SpaceType; info: SpaceInfo };
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

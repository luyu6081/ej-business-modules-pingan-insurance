interface User {
  /* 基本信息 */

  id: string
  username: string
  password?: never
  name?: string
  phone?: string
  email?: string

  /* 租户信息 */

  tenantId?: string
  tenantName?: string
  tenantClass?: number
}


/*
* userId: ID!
用户Id #

username: String
登录账号 #

password: String
用户密码 #

tenantId: ID
租户Id #

tenantName: String
租户名称 #

name: String
名称 #

phoneNumber: String
电话号码 #

email: String
电子邮箱 #

fixedPhoneNumber: String
主固定电话 #

faxNumber: String
主传真号码 #

enabled: Boolean
状态: 1-可用，0-禁用 #

jobNumber: String
工号 #

userSex: Int
用户性别 #

userBirthday: String
用户生日 #

position: String
用户职位 #

title: String
用户职称 #

outsourcingCompany: String
外包公司名称 #

outsourcingPhone: String
外包公司电话 #

personalSignature: String
个人介绍 #

userAvatar: String
用户头像 #

userAddress: String
用户地址 #

roleName: String
角色名称 #

tenantLevel: Int
租户级别 #

lastLoginTime: LocalDateTime
最后登录时间 #

roles: [OauthRoleVO]
用户角色信息 #

organizations: [OauthOrganizationVO]
机构信息 #

groups: [OauthGroupVO]
用户分组信息 #

userInfoVOS: [OauthUserInfoVO]
用户联系方式 #

permissionCodes: [String]
当前登录用户权限码 #
*
* */

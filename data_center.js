window.DATA_CENTER = {
  "updated_at": "2026-11-28 06:40:47",
  "action_summary": {
    "total": 23,
    "ok": 14,
    "alert": 9,
    "missing": 0,
    "alert_groups": [
      "履约项目",
      "履约驾驶舱",
      "安全周报"
    ],
    "all_ok": false
  },
  "groups": [
    {
      "title": "交通安全",
      "monitor": {
        "data_files": [
          "交通安全行为看板\\data.js"
        ],
        "data_mtime": "2026-11-28 06:33:54",
        "all_synced": false,
        "synced_count": 10,
        "missing_count": 3,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "站点-戴盔",
            "latest": "戴盔_2026-11-26.xlsx",
            "mtime": "2026-11-27 07:06:36",
            "synced": true
          },
          {
            "type": "站点-速度",
            "latest": "速度_2026-11-26.xlsx",
            "mtime": "2026-11-27 07:07:57",
            "synced": true
          },
          {
            "type": "站点-闯红灯",
            "latest": "闯红灯_2026-11-26.xlsx",
            "mtime": "2026-11-27 07:04:12",
            "synced": true
          },
          {
            "type": "站点-逆行",
            "latest": "逆行_2026-11-26.xlsx",
            "mtime": "2026-11-27 07:06:02",
            "synced": true
          },
          {
            "type": "骑手维度-戴盔",
            "latest": "戴盔-骑手维度_2026-11-26.xlsx",
            "mtime": "2026-11-27 07:06:55",
            "synced": true
          },
          {
            "type": "骑手维度-速度",
            "latest": "速度-骑手维度_2026-11-26.xlsx",
            "mtime": "2026-11-27 07:08:12",
            "synced": true
          },
          {
            "type": "骑手维度-闯红灯",
            "latest": "闯红灯-骑手维度_2026-11-26.xlsx",
            "mtime": "2026-11-27 07:04:19",
            "synced": true
          },
          {
            "type": "骑手维度-逆行",
            "latest": "逆行-骑手维度_2026-11-26.xlsx",
            "mtime": "2026-11-27 07:06:17",
            "synced": true
          },
          {
            "type": "安全指标监控(骑手)",
            "latest": "—",
            "mtime": "--",
            "synced": null
          },
          {
            "type": "站维度",
            "latest": "—",
            "mtime": "--",
            "synced": null
          },
          {
            "type": "抽检不合格明细",
            "latest": "服装标准化对商看板_抽检不合格的骑手明细_20261101-20261130(天)_1795817859311.xlsx",
            "mtime": "2026-11-28 06:17:43",
            "synced": true
          },
          {
            "type": "加盟商指标达成",
            "latest": "服装标准化对商看板_加盟商指标达成情况_20261101-20261130(天)_1795817813986.xlsx",
            "mtime": "2026-11-28 06:16:59",
            "synced": true
          },
          {
            "type": "未剔除恶劣天气(单量)",
            "latest": "—",
            "mtime": "--",
            "synced": null
          }
        ],
        "actions": [
          {
            "label": "交通安全数据更新",
            "path": "交通安全行为看板\\update_log.txt",
            "latest": "update_log.txt",
            "mtime": "2026-11-28 06:34:01",
            "max_age_hours": 26,
            "age_hours": 0.1,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 1,
          "alert_count": 0,
          "missing_count": 0,
          "total": 1,
          "all_ok": true
        },
        "all_healthy": false
      },
      "boards": [
        {
          "key": "safe_equity",
          "label": "安全权益看板",
          "file": "D:/兴达数据库/交通安全行为看板/安全权益看板.html",
          "tabs": [
            "🛡️ 安全权益看板",
            "🏅 站长安全评级看板",
            "👤 骑手交通安全行为四项看板",
            "📋 中西管控名单",
            "⚡ 高速监控看板-站",
            "🏍️ 高速监控看板-骑手"
          ],
          "tab_keys": [
            "equity",
            "rating",
            "rider",
            "control",
            "speed-site",
            "speed-rider"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "safe_station",
          "label": "站长安全评级",
          "file": "D:/兴达数据库/交通安全行为看板/站长安全评级看板.html",
          "tabs": [
            "🏅 闯红灯率/逆行率",
            "🦺 工装检核率/美团工服率（剔除恶劣天气）"
          ],
          "tab_keys": [
            "",
            ""
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "safe_rider",
          "label": "交通安全四项",
          "file": "D:/兴达数据库/交通安全行为看板/骑手交通行为明细看板.html",
          "tabs": [
            "🚦 骑手交通四项-站",
            "👤 骑手交通四项-骑手明细"
          ],
          "tab_keys": [
            "four",
            "rider"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "safe_highway",
          "label": "高速监控看板",
          "file": "D:/兴达数据库/交通安全行为看板/高速监控看板.html",
          "tabs": [
            "⚡ 高速监控看板-站",
            "🏍️ 高速监控看板-骑手"
          ],
          "tab_keys": [
            "speed-site",
            "speed-rider"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "accident_ledger",
          "label": "事故台账",
          "file": "D:/兴达数据库/事故台账/事故台账看板.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "履约项目",
      "monitor": {
        "data_files": [
          "履约项目\\充换电血压_data.js"
        ],
        "data_mtime": "2026-11-27 16:40:14",
        "all_synced": false,
        "synced_count": 3,
        "missing_count": 0,
        "unsynced_count": 4,
        "sources": [
          {
            "type": "报备和日常早会驳回清单",
            "latest": "报备和日常早会驳回清单_报备和日常早会驳回清单_2026-11-21-2026-11-27(早会时间)_1795818703681.xlsx",
            "mtime": "2026-11-28 06:31:49",
            "synced": false
          },
          {
            "type": "巡检工单列表",
            "latest": "巡检工单列表_1795732276498.xls",
            "mtime": "2026-11-27 06:31:54",
            "synced": true
          },
          {
            "type": "巡检平台站点检核",
            "latest": "站点_巡检平台_子项检核明细_【巡检平台站点检核】_子项检核明细查询_1795818744748.xlsx",
            "mtime": "2026-11-28 06:32:30",
            "synced": false
          },
          {
            "type": "考培-学习明细记录",
            "latest": "_考培-学习明细记录_1795733017663.xlsx",
            "mtime": "2026-11-27 06:43:50",
            "synced": true
          },
          {
            "type": "骑手排班明细数据",
            "latest": "骑手排班明细数据_50383623_20261128_063341.xlsx",
            "mtime": "2026-11-28 06:34:03",
            "synced": false
          },
          {
            "type": "表单列表",
            "latest": "表单列表_50383623_20261127_070034.xlsx",
            "mtime": "2026-11-27 07:01:35",
            "synced": true
          },
          {
            "type": "载具审核-骑手明细",
            "latest": "vehicle_audit_rider.json",
            "mtime": "2026-11-06 07:05:07",
            "synced": false
          }
        ],
        "actions": [
          {
            "label": "充换电血压数据构建",
            "path": "履约项目\\充换电血压_data.js",
            "latest": "充换电血压_data.js",
            "mtime": "2026-11-27 16:40:14",
            "max_age_hours": 13,
            "age_hours": 14.0,
            "ok": false,
            "note": "每日 07:30/15:00 两次",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "带刀巡检数据构建",
            "path": "履约项目\\knife_rider_data.js",
            "latest": "knife_rider_data.js",
            "mtime": "2026-11-27 16:41:08",
            "max_age_hours": 13,
            "age_hours": 14.0,
            "ok": false,
            "note": "每日 07:30/15:00 两次(随总控第2.5步)",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "载具审核-骑手明细",
            "path": "vehicle_audit\\vehicle_audit_rider.json",
            "latest": "vehicle_audit_rider.json",
            "mtime": "2026-11-06 07:05:07",
            "max_age_hours": 30,
            "age_hours": 527.6,
            "ok": false,
            "note": "早间自动化重建(暂停BI抓取，改从M盘_审核明细_*.xlsx)",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "每日刷新·抓取成败",
            "path": "daily_refresh_log.txt",
            "latest": "daily_refresh_log.txt",
            "mtime": "2026-11-28 06:25:15",
            "max_age_hours": 13,
            "age_hours": 0.3,
            "ok": false,
            "note": "解析最后一次刷新日志：抓取失败即告警（文件新≠数据新）",
            "fail_hits": [
              "失败(退出"
            ],
            "fail_lines": [
              "第0步 载具审核(骑手维度)M盘审核明细重建: 失败(退出码 1) · M:\\下载 下未找到 _审核明细_*.xlsx，请确认文件已放入"
            ],
            "block_time": "2026-11-27 17:03:14"
          }
        ],
        "action_stats": {
          "ok_count": 0,
          "alert_count": 4,
          "missing_count": 0,
          "total": 4,
          "all_ok": false
        },
        "all_healthy": false
      },
      "boards": [
        {
          "key": "project",
          "label": "履约项目看板",
          "file": "D:/兴达数据库/履约项目/兴达履约项目看板.html",
          "tabs": [
            "站点早会",
            "履约安全检查",
            "骑手装备标准化率",
            "餐箱消毒看板",
            "带刀巡检看板",
            "充换电血压看板",
            "骑手APP考试和周度培训",
            "骑手维度执行"
          ],
          "tab_keys": [
            "morning",
            "safety",
            "equip",
            "box",
            "knife",
            "chargebp",
            "training",
            "rider"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "ledger",
          "label": "安全台账",
          "file": "D:/兴达数据库/履约项目/ledger/安全台账看板.html",
          "tabs": [
            "进度总览",
            "批次进度",
            "城市维度",
            "站点维度",
            "未上传清单",
            "驳回清单",
            "检核方案"
          ],
          "tab_keys": [
            "ov",
            "batch",
            "city",
            "site",
            "miss",
            "rej",
            "plan"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "履约考核标准",
      "monitor": null,
      "boards": [
        {
          "key": "img_g08",
          "label": "异商混送调分补充协议（西安·2026年11月）",
          "file": "D:/兴达数据库/履约考核/异商混送调分补充协议（西安·2026年11月）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g09",
          "label": "异商混送调分补充协议（北上广深·2026年11月）",
          "file": "D:/兴达数据库/履约考核/异商混送调分补充协议（北上广深·2026年11月）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g14",
          "label": "2026年11月专送合作商培训管理规则",
          "file": "D:/兴达数据库/履约考核/2026年11月专送合作商培训管理规则.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g26",
          "label": "专送合作商虚假行为管理规范",
          "file": "D:/兴达数据库/履约考核/专送合作商虚假行为管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g27",
          "label": "城市经理服务能力评价标准补充协议",
          "file": "D:/兴达数据库/履约考核/城市经理服务能力评价标准补充协议.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g30",
          "label": "专送合作商塑型管理标准补充说明",
          "file": "D:/兴达数据库/履约考核/专送合作商塑型管理标准补充说明.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g31",
          "label": "单城单商管理标准",
          "file": "D:/兴达数据库/履约考核/单城单商管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g32",
          "label": "专送合作商发展管理规范",
          "file": "D:/兴达数据库/履约考核/专送合作商发展管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g33",
          "label": "专送合作商城市经理服务能力评价标准",
          "file": "D:/兴达数据库/履约考核/专送合作商城市经理服务能力评价标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g34",
          "label": "专送合作商塑型管理标准",
          "file": "D:/兴达数据库/履约考核/专送合作商塑型管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g35",
          "label": "专送合作商塑型管理标准补充说明二",
          "file": "D:/兴达数据库/履约考核/专送合作商塑型管理标准补充说明二.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g36",
          "label": "专送合作商大区健康评价标准（2026年6月迭代）",
          "file": "D:/兴达数据库/履约考核/专送合作商大区健康评价标准（2026年6月迭代）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g38",
          "label": "专送合作商异商混送引退管理标准（9月迭代）",
          "file": "D:/兴达数据库/履约考核/专送合作商异商混送引退管理标准（9月迭代）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g39",
          "label": "专送合作商异商混送引退管理标准补充说明（2026年11月）",
          "file": "D:/兴达数据库/履约考核/异商混送引退管理标准补充说明（2026年11月）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g40",
          "label": "专送合作商招投标管理规范",
          "file": "D:/兴达数据库/履约考核/专送合作商招投标管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g41",
          "label": "合作商收并购管理标准",
          "file": "D:/兴达数据库/履约考核/合作商收并购管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g45",
          "label": "专送合作商站点置换管理规范",
          "file": "D:/兴达数据库/履约考核/专送合作商站点置换管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g46",
          "label": "专送合作商站点退出管理规范",
          "file": "D:/兴达数据库/履约考核/站点退出管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g47",
          "label": "城市商末位考核结果通知",
          "file": "D:/兴达数据库/履约考核/城市商末位考核结果通知.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g61",
          "label": "合作商共建委员会章程V7",
          "file": "D:/兴达数据库/履约考核/合作商共建委员会章程V7.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g76",
          "label": "商管规则补充规定三",
          "file": "D:/兴达数据库/履约考核/商管规则补充规定三.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_site",
          "label": "站点建设标准",
          "file": "D:/兴达数据库/履约考核/站点建设标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_equip",
          "label": "装备合规标准",
          "file": "D:/兴达数据库/履约考核/装备合规标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_std",
          "label": "标准化检查标准",
          "file": "D:/兴达数据库/履约考核/标准化检查标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_acc",
          "label": "百万单事故数申诉指南",
          "file": "D:/兴达数据库/履约考核/百万单事故数申诉指南.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_staff",
          "label": "安全管理人员配备规范",
          "file": "D:/兴达数据库/履约考核/安全管理人员配备规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g29",
          "label": "合作商安全管理规范",
          "file": "D:/兴达数据库/履约考核/合作商安全管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g37",
          "label": "专送合作商安全管理人员配备规范",
          "file": "D:/兴达数据库/履约考核/专送合作商安全管理人员配备规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g44",
          "label": "专送合作商站点建设管理标准7.0",
          "file": "D:/兴达数据库/履约考核/专送合作商站点建设管理标准7.0.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g48",
          "label": "专送合作商站长服务能力评价标准",
          "file": "D:/兴达数据库/履约考核/专送合作商站长服务能力评价标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g54",
          "label": "专送合作商配送人员限制功能管控标准",
          "file": "D:/兴达数据库/履约考核/专送合作商配送人员限制功能管控标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g55",
          "label": "保险超时报案申诉剔除机制",
          "file": "D:/兴达数据库/履约考核/保险超时报案申诉剔除机制.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g58",
          "label": "加盟商站智能化血压测压考核管理标准",
          "file": "D:/兴达数据库/履约考核/加盟商站智能化血压测压考核管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g60",
          "label": "合作商信息安全及系统账号管理规则",
          "file": "D:/兴达数据库/履约考核/合作商信息安全及系统账号管理规则.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g62",
          "label": "工商信息变更及资质管理标准",
          "file": "D:/兴达数据库/履约考核/工商信息变更及资质管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g65",
          "label": "合作商标准化检查管理办法",
          "file": "D:/兴达数据库/履约考核/合作商标准化检查管理办法.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g66",
          "label": "诚信经营管理规范",
          "file": "D:/兴达数据库/履约考核/诚信经营管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g73",
          "label": "百万单事故数指标申诉指南",
          "file": "D:/兴达数据库/履约考核/百万单事故数指标申诉指南.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g78",
          "label": "110工单合规填报考核标准",
          "file": "D:/兴达数据库/履约考核/110工单合规填报考核标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g79",
          "label": "合作商异常单数据剔除规则V76",
          "file": "D:/兴达数据库/履约考核/合作商异常单数据剔除规则V76.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_talk",
          "label": "合作商约谈管理规范",
          "file": "D:/兴达数据库/履约考核/合作商约谈管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_rule",
          "label": "合作商异常单数据剔除规则",
          "file": "D:/兴达数据库/履约考核/合作商异常单数据剔除规则.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_complaint",
          "label": "配送人员投诉响应处理指南",
          "file": "D:/兴达数据库/履约考核/配送人员投诉响应处理指南.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g16",
          "label": "专送合作商权益激励规则（2026年9月-2027年2月）",
          "file": "D:/兴达数据库/履约考核/专送合作商权益激励规则（2026年9月-2027年2月）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g17",
          "label": "权益激励规则补充规定一（烟台威海·2026年11月）",
          "file": "D:/兴达数据库/履约考核/权益激励规则补充规定一（烟台威海·2026年11月）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g18",
          "label": "专送合作商骑手保障补贴考核方案",
          "file": "D:/兴达数据库/履约考核/专送合作商骑手保障补贴考核方案.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g19",
          "label": "骑手保障补贴考核方案补充方案",
          "file": "D:/兴达数据库/履约考核/骑手保障补贴考核方案补充方案.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g28",
          "label": "合作商保证金管理办法补充规定",
          "file": "D:/兴达数据库/履约考核/合作商保证金管理办法补充规定.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g42",
          "label": "专送合作商服务转型（骑手之家建设运营）管理办法迭代",
          "file": "D:/兴达数据库/履约考核/专送合作商服务转型（骑手之家建设运营）管理办法迭代.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g43",
          "label": "骑手之家建设运营管理办法",
          "file": "D:/兴达数据库/履约考核/骑手之家建设运营管理办法.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g51",
          "label": "配送人员薪酬保障管理标准（非薪动力）",
          "file": "D:/兴达数据库/履约考核/配送人员薪酬保障管理标准（非薪动力）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g52",
          "label": "配送人员薪酬保障管理标准（薪动力）",
          "file": "D:/兴达数据库/履约考核/配送人员薪酬保障管理标准（薪动力）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g56",
          "label": "加盟合作商配送人员薪酬保障管理标准补充规定（薪）",
          "file": "D:/兴达数据库/履约考核/加盟合作商配送人员薪酬保障管理标准补充规定（薪）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g57",
          "label": "加盟合作商配送人员薪酬保障管理标准补充规定（非薪）",
          "file": "D:/兴达数据库/履约考核/加盟合作商配送人员薪酬保障管理标准补充规定（非薪）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g63",
          "label": "合作商异常单数据剔除规则（V76）",
          "file": "D:/兴达数据库/履约考核/合作商异常单数据剔除规则（V76）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g64",
          "label": "合作商无欠税与骑手完税管理规范",
          "file": "D:/兴达数据库/履约考核/合作商无欠税与骑手完税管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g67",
          "label": "赋能活动配置管理标准",
          "file": "D:/兴达数据库/履约考核/赋能活动配置管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g68",
          "label": "合作商配送人员投诉问题响应处理指南",
          "file": "D:/兴达数据库/履约考核/合作商配送人员投诉问题响应处理指南.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g70",
          "label": "合作商高价骑手管控规则",
          "file": "D:/兴达数据库/履约考核/合作商高价骑手管控规则.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g71",
          "label": "对商版-合作商无欠税骑手完税管理规范",
          "file": "D:/兴达数据库/履约考核/对商版-合作商无欠税骑手完税管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g74",
          "label": "专送合作商约谈管理规范",
          "file": "D:/兴达数据库/履约考核/专送合作商约谈管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g75",
          "label": "专送合作商约谈管理规范补充规定",
          "file": "D:/兴达数据库/履约考核/专送合作商约谈管理规范补充规定.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g77",
          "label": "非公平竞争管理办法",
          "file": "D:/兴达数据库/履约考核/非公平竞争管理办法.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_veh",
          "label": "载具管理标准",
          "file": "D:/兴达数据库/履约考核/载具管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g50",
          "label": "电动车租赁管理标准激励版",
          "file": "D:/兴达数据库/履约考核/电动车租赁管理标准激励版.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g53",
          "label": "配送人员车电租赁管理标准",
          "file": "D:/兴达数据库/履约考核/配送人员车电租赁管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g69",
          "label": "合作商骑手载具安全管理标准",
          "file": "D:/兴达数据库/履约考核/合作商骑手载具安全管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g72",
          "label": "智能头盔试点城市考核管理标准",
          "file": "D:/兴达数据库/履约考核/智能头盔试点城市考核管理标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g25",
          "label": "专送合作商用工管理规范",
          "file": "D:/兴达数据库/履约考核/专送合作商用工管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g49",
          "label": "招聘与三方管理规范",
          "file": "D:/兴达数据库/履约考核/招聘与三方管理规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g59",
          "label": "合作商使用招聘资源及赋能工具标准",
          "file": "D:/兴达数据库/履约考核/合作商使用招聘资源及赋能工具标准.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g01",
          "label": "2026年11月星级考核制度（普适版）",
          "file": "D:/兴达数据库/履约考核/2026年11月星级考核制度（普适版）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g02",
          "label": "2026年11月服务费结算方案（普适版）",
          "file": "D:/兴达数据库/履约考核/2026年11月服务费结算方案（普适版）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g03",
          "label": "2026年11月服务费结算方案（瓜分奖）",
          "file": "D:/兴达数据库/履约考核/2026年11月服务费结算方案（瓜分奖）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g05",
          "label": "2026年11月KA品牌单月度考核制度（薪动力版）",
          "file": "D:/兴达数据库/履约考核/2026年11月KA品牌单月度考核制度（薪动力版）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g06",
          "label": "2026年11月非试点城市精细化排班调分补充协议",
          "file": "D:/兴达数据库/履约考核/2026年11月非试点城市精细化排班调分补充协议.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g07",
          "label": "2026年11月安徽精细化排班调分补充协议",
          "file": "D:/兴达数据库/履约考核/2026年11月安徽精细化排班调分补充协议.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g10",
          "label": "快优单准时率调分补充协议（2026年11月）",
          "file": "D:/兴达数据库/履约考核/快优单准时率调分补充协议（2026年11月）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g11",
          "label": "KA品牌运力调分补充协议（2026年11月）",
          "file": "D:/兴达数据库/履约考核/KA品牌运力调分补充协议（2026年11月）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g12",
          "label": "2026年11月星级考核制度（V2）",
          "file": "D:/兴达数据库/履约考核/2026年11月星级考核制度（V2）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g15",
          "label": "2026年11月服务费结算方案（联盟签约版·郑州）",
          "file": "D:/兴达数据库/履约考核/2026年11月服务费结算方案（联盟签约版·郑州）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g20",
          "label": "2026年11月服务费结算方案补充协议2",
          "file": "D:/兴达数据库/履约考核/2026年11月服务费结算方案补充协议2.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g21",
          "label": "2026年11月服务费结算方案补充协议3",
          "file": "D:/兴达数据库/履约考核/2026年11月服务费结算方案补充协议3.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g22",
          "label": "2026年11月服务费结算方案补充协议4",
          "file": "D:/兴达数据库/履约考核/2026年11月服务费结算方案补充协议4.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g23",
          "label": "有效骑手留存调分补充协议（2026年11月）",
          "file": "D:/兴达数据库/履约考核/有效骑手留存调分补充协议（2026年11月）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g04",
          "label": "2026年11月活动激励金月度考核（体验版）",
          "file": "D:/兴达数据库/履约考核/2026年11月活动激励金月度考核（体验版）.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g13",
          "label": "2025年荣誉激励举措使用说明",
          "file": "D:/兴达数据库/履约考核/2025年荣誉激励举措使用说明.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "img_g24",
          "label": "专送合作商年度荣誉奖项管理规范补充规范",
          "file": "D:/兴达数据库/履约考核/专送合作商年度荣誉奖项管理规范补充规范.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "checkup_ka",
          "label": "KA品牌单月度考核制度",
          "file": "D:/兴达数据库/履约考核/KA品牌单月度考核制度.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "服装标准化",
      "monitor": {
        "data_files": [
          "护航服装\\data.js",
          "护航服装\\data_excluded.js"
        ],
        "data_mtime": "2026-11-28 06:35:18",
        "all_synced": false,
        "synced_count": 0,
        "missing_count": 2,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "已剔除恶劣天气",
            "latest": "—",
            "mtime": "--",
            "synced": null
          },
          {
            "type": "未剔除恶劣天气",
            "latest": "—",
            "mtime": "--",
            "synced": null
          }
        ],
        "actions": [
          {
            "label": "服装标准化数据更新",
            "path": "护航服装\\update_log.txt",
            "latest": "update_log.txt",
            "mtime": "2026-11-28 06:35:22",
            "max_age_hours": 26,
            "age_hours": 0.1,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 1,
          "alert_count": 0,
          "missing_count": 0,
          "total": 1,
          "all_ok": true
        },
        "all_healthy": false
      },
      "boards": [
        {
          "key": "clothing_main",
          "label": "护航服装看板",
          "file": "D:/兴达数据库/护航服装/护航服装看板.html",
          "tabs": [
            "📊 站点维度看板",
            "👤 骑手维度明细"
          ],
          "tab_keys": [
            "station",
            "rider"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "clothing_rate",
          "label": "服装标准化率",
          "file": "D:/兴达数据库/交通安全行为看板/骑手服装标准化看板.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "骑手管理",
      "monitor": {
        "data_files": [
          "在职骑手详情\\在职骑手详情.html",
          "交通安全行为看板\\data.js"
        ],
        "data_mtime": "2026-11-28 06:33:54",
        "all_synced": false,
        "synced_count": 0,
        "missing_count": 0,
        "unsynced_count": 1,
        "sources": [
          {
            "type": "骑手排班明细数据",
            "latest": "骑手排班明细数据_50383623_20261128_063341.xlsx",
            "mtime": "2026-11-28 06:34:03",
            "synced": false
          }
        ],
        "actions": [
          {
            "label": "在职骑手CDP抓取",
            "path": "在职骑手详情\\_crawl_service.log",
            "latest": "_crawl_service.log",
            "mtime": "2026-11-27 16:31:13",
            "max_age_hours": 26,
            "age_hours": 14.2,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 1,
          "alert_count": 0,
          "missing_count": 0,
          "total": 1,
          "all_ok": true
        },
        "all_healthy": false
      },
      "boards": [
        {
          "key": "rider_detail",
          "label": "骑手健康证监控",
          "file": "D:/兴达数据库/在职骑手详情/在职骑手详情.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "rider_control",
          "label": "中西管控名单",
          "file": "D:/兴达数据库/交通安全行为看板/中西管控名单.html",
          "tabs": [
            "📋 中西管控名单"
          ],
          "tab_keys": [
            "control"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "保险",
      "monitor": {
        "data_files": [
          "骑手保障补贴\\v3_data.js",
          "骑手保障补贴\\bi_data\\latest.json",
          "bi_insurance\\premium_latest.json",
          "美团保险\\insurance_data.js"
        ],
        "data_mtime": "2026-11-28 06:35:30",
        "all_synced": true,
        "synced_count": 4,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "BI赔付率快照",
            "latest": "latest.json",
            "mtime": "2026-11-27 09:05:29",
            "synced": true
          },
          {
            "type": "含税保费快照",
            "latest": "premium_latest.json",
            "mtime": "2026-11-27 09:03:02",
            "synced": true
          },
          {
            "type": "V3内联数据",
            "latest": "v3_data.js",
            "mtime": "2026-11-28 06:35:30",
            "synced": true
          },
          {
            "type": "美团保险数据",
            "latest": "insurance_data.js",
            "mtime": "2026-11-26 07:14:49",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "BI赔付率快照",
            "path": "骑手保障补贴\\bi_data\\latest.json",
            "latest": "latest.json",
            "mtime": "2026-11-27 09:05:29",
            "max_age_hours": 26,
            "age_hours": 21.6,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "含税保费快照",
            "path": "bi_insurance\\premium_latest.json",
            "latest": "premium_latest.json",
            "mtime": "2026-11-27 09:03:02",
            "max_age_hours": 26,
            "age_hours": 21.6,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "V3内联数据",
            "path": "骑手保障补贴\\v3_data.js",
            "latest": "v3_data.js",
            "mtime": "2026-11-28 06:35:30",
            "max_age_hours": 26,
            "age_hours": 0.1,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "美团保险理赔数据",
            "path": "美团保险\\insurance_data.js",
            "latest": "insurance_data.js",
            "mtime": "2026-11-26 07:14:49",
            "max_age_hours": 72,
            "age_hours": 47.4,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 4,
          "alert_count": 0,
          "missing_count": 0,
          "total": 4,
          "all_ok": true
        },
        "all_healthy": true
      },
      "boards": [
        {
          "key": "ins_meituan",
          "label": "美团保险",
          "file": "D:/兴达数据库/美团保险/美团保险明细看板.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "ins_subsidy",
          "label": "保险赔付补贴监控",
          "file": "D:/兴达数据库/骑手保障补贴/保险赔付补贴监控.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "ins_rate",
          "label": "保险赔付率解读",
          "file": "D:/兴达数据库/美团保险/保险赔付率解读.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "公司风险管理系统",
      "monitor": {
        "data_files": [
          "110工单\\110工单看板.html"
        ],
        "data_mtime": "2026-09-23 11:38:46",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "看板页面（自包含）",
            "latest": "110工单看板.html",
            "mtime": "2026-09-23 11:38:46",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "110工单数据更新",
            "path": "110工单\\110_data.js",
            "latest": "110_data.js",
            "mtime": "2026-11-27 17:30:40",
            "max_age_hours": 30,
            "age_hours": 13.2,
            "ok": true,
            "note": "盘中守护 11:30/17:30 两次（看板外壳html长期不变，改盯数据文件）",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 1,
          "alert_count": 0,
          "missing_count": 0,
          "total": 1,
          "all_ok": true
        },
        "all_healthy": true
      },
      "boards": [
        {
          "key": "gongdan",
          "label": "110工单",
          "file": "D:/兴达数据库/110工单/110工单看板.html",
          "tabs": [
            "图表分析",
            "工单明细"
          ],
          "tab_keys": [
            "chart",
            "detail"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "站点地图",
      "monitor": {
        "data_files": [
          "全国站点地图\\data.js"
        ],
        "data_mtime": "2026-11-28 06:38:49",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "美团站点快照",
            "latest": "meituan_stations_snapshot.json",
            "mtime": "2026-11-28 06:38:47",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "美团站点快照更新",
            "path": "全国站点地图\\update_stations.log",
            "latest": "update_stations.log",
            "mtime": "2026-11-28 06:38:49",
            "max_age_hours": 26,
            "age_hours": 0.0,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 1,
          "alert_count": 0,
          "missing_count": 0,
          "total": 1,
          "all_ok": true
        },
        "all_healthy": true
      },
      "boards": [
        {
          "key": "station_map",
          "label": "全国站点地图",
          "file": "D:/兴达数据库/全国站点地图/全国站点地图.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "数据中心",
      "monitor": {
        "data_files": [
          "可视化大屏\\_大屏数据.js"
        ],
        "data_mtime": "2026-11-28 06:40:16",
        "all_synced": true,
        "synced_count": 0,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [],
        "actions": [
          {
            "label": "可视化大屏数据刷新",
            "path": "可视化大屏\\_大屏数据.js",
            "latest": "_大屏数据.js",
            "mtime": "2026-11-28 06:40:16",
            "max_age_hours": 26,
            "age_hours": 0.0,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 1,
          "alert_count": 0,
          "missing_count": 0,
          "total": 1,
          "all_ok": true
        },
        "all_healthy": true
      },
      "boards": [
        {
          "key": "data_center",
          "label": "源数据更新状态（监控中心）",
          "file": "D:/兴达数据库/data_center.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": false,
          "available": true,
          "is_self_monitor": true
        },
        {
          "key": "screen_main",
          "label": "可视化大屏（方案）",
          "file": "D:/兴达数据库/可视化大屏/履约安全可视化大屏.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "月度累计",
      "monitor": {
        "data_files": [
          "交通安全行为看板\\monthly_summary.js"
        ],
        "data_mtime": "2026-11-28 06:35:30",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "交通安全data.js（归档源）",
            "latest": "data.js",
            "mtime": "2026-11-28 06:33:54",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "月度累计归档",
            "path": "交通安全行为看板\\monthly_summary.js",
            "latest": "monthly_summary.js",
            "mtime": "2026-11-28 06:35:30",
            "max_age_hours": 72,
            "age_hours": 0.1,
            "ok": true,
            "note": "月度归档，可适当放宽",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 1,
          "alert_count": 0,
          "missing_count": 0,
          "total": 1,
          "all_ok": true
        },
        "all_healthy": true
      },
      "boards": [
        {
          "key": "monthly_summary",
          "label": "月度累计看板",
          "file": "D:/兴达数据库/交通安全行为看板/月度累计看板.html",
          "tabs": [
            "🛡️ 安全权益",
            "🏅 站长安全评级",
            "⚡ 高速骑手",
            "👕 护航服装"
          ],
          "tab_keys": [
            "safety",
            "rating",
            "highway",
            "clothing"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "履约驾驶舱",
      "monitor": {
        "data_files": [
          "考核文件库\\checkup_files_data.js",
          "考核文件库\\checkup_search_index.js",
          "考核文件库\\change_log.js"
        ],
        "data_mtime": "2026-10-30 11:56:21",
        "all_synced": false,
        "synced_count": 0,
        "missing_count": 0,
        "unsynced_count": 1,
        "sources": [
          {
            "type": "考核文件库扫描产物",
            "latest": "checkup_files_data.js",
            "mtime": "2026-10-30 11:56:21",
            "synced": false
          }
        ],
        "actions": [
          {
            "label": "考核文件库扫描",
            "path": "考核文件库\\checkup_files_data.js",
            "latest": "checkup_files_data.js",
            "mtime": "2026-10-30 11:56:21",
            "max_age_hours": 168,
            "age_hours": 690.7,
            "ok": false,
            "note": "scan_checkup.py 手动扫描（用户按需触发），按 7 天兜底",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 0,
          "alert_count": 1,
          "missing_count": 0,
          "total": 1,
          "all_ok": false
        },
        "all_healthy": false
      },
      "boards": [
        {
          "key": "checkup_lib",
          "label": "履约驾驶舱",
          "file": "D:/兴达数据库/考核文件库/履约驾驶舱.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    },
    {
      "title": "安全周报",
      "monitor": {
        "data_files": [
          "C:\\Users\\牛艳朝\\WorkBuddy\\2026-09-04-04-42-17\\safety-weekly-dashboard\\data\\compliance.json",
          "C:\\Users\\牛艳朝\\WorkBuddy\\2026-09-04-04-42-17\\safety-weekly-dashboard\\data\\accident.json",
          "C:\\Users\\牛艳朝\\WorkBuddy\\2026-09-04-04-42-17\\safety-weekly-dashboard\\data\\equity_slim_data.js"
        ],
        "data_mtime": "2026-11-23 10:46:25",
        "all_synced": false,
        "synced_count": 4,
        "missing_count": 0,
        "unsynced_count": 4,
        "sources": [
          {
            "type": "安全权益·工作台源(iframe实时)",
            "latest": "data.js",
            "mtime": "2026-11-28 06:33:54",
            "synced": true
          },
          {
            "type": "站长评级·slim(自动重建)",
            "latest": "equity_slim_data.js",
            "mtime": "2026-11-23 10:46:25",
            "synced": false
          },
          {
            "type": "履约数据(手工周更)",
            "latest": "compliance.json",
            "mtime": "2026-09-28 05:46:42",
            "synced": false
          },
          {
            "type": "安全事故(手工周更)",
            "latest": "accident.json",
            "mtime": "2026-09-28 05:46:42",
            "synced": false
          },
          {
            "type": "保险·V3内联数据(实时)",
            "latest": "v3_data.js",
            "mtime": "2026-11-28 06:35:30",
            "synced": true
          },
          {
            "type": "保险·BI赔付率快照(实时)",
            "latest": "latest.json",
            "mtime": "2026-11-27 09:05:29",
            "synced": true
          },
          {
            "type": "保险·含税保费快照(实时)",
            "latest": "premium_latest.json",
            "mtime": "2026-11-27 09:03:02",
            "synced": true
          },
          {
            "type": "保险赔付率解读页(手工周更)",
            "latest": "insurance_rate_analysis.html",
            "mtime": "2026-09-06 11:04:24",
            "synced": false
          }
        ],
        "actions": [
          {
            "label": "站长评级slim自动重建",
            "path": "C:\\Users\\牛艳朝\\WorkBuddy\\2026-09-04-04-42-17\\safety-weekly-dashboard\\data\\equity_slim_data.js",
            "latest": "equity_slim_data.js",
            "mtime": "2026-11-23 10:46:25",
            "max_age_hours": 26,
            "age_hours": 115.9,
            "ok": false,
            "note": "8421 按工作台源 mtime 自动重建",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "保险赔付补贴监控·V3数据",
            "path": "骑手保障补贴\\v3_data.js",
            "latest": "v3_data.js",
            "mtime": "2026-11-28 06:35:30",
            "max_age_hours": 26,
            "age_hours": 0.1,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "保险赔付补贴监控·BI快照",
            "path": "骑手保障补贴\\bi_data\\latest.json",
            "latest": "latest.json",
            "mtime": "2026-11-27 09:05:29",
            "max_age_hours": 26,
            "age_hours": 21.6,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "保险赔付补贴监控·保费快照",
            "path": "bi_insurance\\premium_latest.json",
            "latest": "premium_latest.json",
            "mtime": "2026-11-27 09:03:02",
            "max_age_hours": 26,
            "age_hours": 21.6,
            "ok": true,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "履约数据周更",
            "path": "C:\\Users\\牛艳朝\\WorkBuddy\\2026-09-04-04-42-17\\safety-weekly-dashboard\\data\\compliance.json",
            "latest": "compliance.json",
            "mtime": "2026-09-28 05:46:42",
            "max_age_hours": 216,
            "age_hours": 1464.9,
            "ok": false,
            "note": "每周一例会前手工更新",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "安全事故周更",
            "path": "C:\\Users\\牛艳朝\\WorkBuddy\\2026-09-04-04-42-17\\safety-weekly-dashboard\\data\\accident.json",
            "latest": "accident.json",
            "mtime": "2026-09-28 05:46:42",
            "max_age_hours": 216,
            "age_hours": 1464.9,
            "ok": false,
            "note": "每周一例会前手工更新",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "保险赔付率解读周更",
            "path": "C:\\Users\\牛艳朝\\WorkBuddy\\2026-09-04-04-42-17\\safety-weekly-dashboard\\insurance_rate_analysis.html",
            "latest": "insurance_rate_analysis.html",
            "mtime": "2026-09-06 11:04:24",
            "max_age_hours": 216,
            "age_hours": 1987.6,
            "ok": false,
            "note": "每周一例会前手工更新",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 3,
          "alert_count": 4,
          "missing_count": 0,
          "total": 7,
          "all_ok": false
        },
        "all_healthy": false
      },
      "boards": [
        {
          "key": "safety_weekly",
          "label": "安全数据周报",
          "file": "http://127.0.0.1:8421/index.html",
          "tabs": [
            "安全权益",
            "站长评级",
            "履约数据",
            "安全事故",
            "保险赔付补贴监控",
            "保险赔付率解读"
          ],
          "tab_keys": [
            "safety",
            "rating",
            "compliance",
            "accident",
            "insurance-monitor",
            "insurance-rate"
          ],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        }
      ]
    }
  ]
};

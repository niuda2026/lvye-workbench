window.DATA_CENTER = {
  "updated_at": "2026-09-12 17:38:50",
  "action_summary": {
    "total": 14,
    "ok": 8,
    "alert": 6,
    "missing": 0,
    "alert_groups": [
      "骑手管理",
      "保险",
      "公司风险管理系统",
      "站点地图",
      "数据中心",
      "月度累计"
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
        "data_mtime": "2026-09-12 08:43:26",
        "all_synced": true,
        "synced_count": 13,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "站点-戴盔",
            "latest": "戴盔_2026-09-11-2026-09-11(统计日期)_1789173366073.xlsx",
            "mtime": "2026-09-12 08:36:10",
            "synced": true
          },
          {
            "type": "站点-速度",
            "latest": "速度_2026-09-11-2026-09-11(统计日期)_1789173434600.xlsx",
            "mtime": "2026-09-12 08:37:20",
            "synced": true
          },
          {
            "type": "站点-闯红灯",
            "latest": "_闯红灯_2026-09-11-2026-09-11(统计日期)_1789173564992.xlsx",
            "mtime": "2026-09-12 08:39:30",
            "synced": true
          },
          {
            "type": "站点-逆行",
            "latest": "_逆行_2026-09-11-2026-09-11(统计日期)_1789173516258.xlsx",
            "mtime": "2026-09-12 08:38:43",
            "synced": true
          },
          {
            "type": "骑手维度-戴盔",
            "latest": "戴盔-骑手维度_2026-09-11-2026-09-11(统计日期)_1789173375725.xlsx",
            "mtime": "2026-09-12 08:36:26",
            "synced": true
          },
          {
            "type": "骑手维度-速度",
            "latest": "速度-骑手维度_2026-09-11-2026-09-11(统计日期)_1789173448236.xlsx",
            "mtime": "2026-09-12 08:37:34",
            "synced": true
          },
          {
            "type": "骑手维度-闯红灯",
            "latest": "_闯红灯-骑手维度_2026-09-11-2026-09-11(统计日期)_1789173574227.xlsx",
            "mtime": "2026-09-12 08:39:40",
            "synced": true
          },
          {
            "type": "骑手维度-逆行",
            "latest": "_逆行-骑手维度_2026-09-11-2026-09-11(统计日期)_1789173521659.xlsx",
            "mtime": "2026-09-12 08:38:53",
            "synced": true
          },
          {
            "type": "安全指标监控(骑手)",
            "latest": "安全指标监控_骑手维度_20260911-20260911(日期)_1789166065352.xlsx",
            "mtime": "2026-09-12 06:34:31",
            "synced": true
          },
          {
            "type": "站维度",
            "latest": "站维度_20260911-20260911(日期)_1789166043092.xlsx",
            "mtime": "2026-09-12 06:34:07",
            "synced": true
          },
          {
            "type": "抽检不合格明细",
            "latest": "_抽检不合格的骑手明细_2026-09-09-2026-09-11(天)_1789166206026.xlsx",
            "mtime": "2026-09-12 06:36:51",
            "synced": true
          },
          {
            "type": "加盟商指标达成",
            "latest": "_加盟商指标达成情况_2026-09-09-2026-09-11(天)_1789166188213.xlsx",
            "mtime": "2026-09-12 06:36:32",
            "synced": true
          },
          {
            "type": "未剔除恶劣天气(单量)",
            "latest": "未剔除恶劣天气_4月15日起数据可用，5月1日起恶劣天气剔除可用_20260909-20260909(天)_1788993988086.xlsx",
            "mtime": "2026-09-10 06:46:35",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "交通安全数据更新",
            "path": "交通安全行为看板\\update_log.txt",
            "latest": "update_log.txt",
            "mtime": "2026-09-12 08:43:27",
            "max_age_hours": 26,
            "age_hours": 8.9,
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
        }
      ]
    },
    {
      "title": "履约项目",
      "monitor": {
        "data_files": [
          "履约项目\\充换电血压_data.js"
        ],
        "data_mtime": "2026-09-12 15:43:39",
        "all_synced": true,
        "synced_count": 7,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "报备和日常早会驳回清单",
            "latest": "_报备和日常早会驳回清单_2026-08-30-2026-09-05(早会时间)_1788651432041.xlsx",
            "mtime": "2026-09-06 07:37:16",
            "synced": true
          },
          {
            "type": "巡检工单列表",
            "latest": "巡检工单列表_1789166719282.xls",
            "mtime": "2026-09-12 06:45:49",
            "synced": true
          },
          {
            "type": "巡检平台站点检核",
            "latest": "_【巡检平台站点检核】_子项检核明细查询_1788749875515.xlsx",
            "mtime": "2026-09-07 10:57:59",
            "synced": true
          },
          {
            "type": "考培-学习明细记录",
            "latest": "_考培-学习明细记录_1789166877045.xlsx",
            "mtime": "2026-09-12 06:48:07",
            "synced": true
          },
          {
            "type": "骑手排班明细数据",
            "latest": "骑手排班明细数据_49896033_20260912_063839.xlsx",
            "mtime": "2026-09-12 06:39:06",
            "synced": true
          },
          {
            "type": "表单列表",
            "latest": "表单列表_49896033_20260912_064827.xlsx",
            "mtime": "2026-09-12 06:49:12",
            "synced": true
          },
          {
            "type": "载具审核-骑手明细(BI)",
            "latest": "vehicle_audit_rider.json",
            "mtime": "2026-09-12 09:16:23",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "充换电血压数据构建",
            "path": "履约项目\\充换电血压_data.js",
            "latest": "充换电血压_data.js",
            "mtime": "2026-09-12 15:43:39",
            "max_age_hours": 13,
            "age_hours": 1.9,
            "ok": true,
            "note": "每日 07:30/15:00 两次",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "载具审核-骑手明细(BI)",
            "path": "vehicle_audit\\vehicle_audit_rider.json",
            "latest": "vehicle_audit_rider.json",
            "mtime": "2026-09-12 09:16:23",
            "max_age_hours": 30,
            "age_hours": 8.4,
            "ok": true,
            "note": "早间自动化抓取",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          },
          {
            "label": "每日刷新·抓取成败",
            "path": "daily_refresh_log.txt",
            "latest": "daily_refresh_log.txt",
            "mtime": "2026-09-12 16:37:08",
            "max_age_hours": 13,
            "age_hours": 1.0,
            "ok": true,
            "note": "解析最后一次刷新日志：抓取失败即告警（文件新≠数据新）",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": "2026-09-12 16:36:42"
          }
        ],
        "action_stats": {
          "ok_count": 3,
          "alert_count": 0,
          "missing_count": 0,
          "total": 3,
          "all_ok": true
        },
        "all_healthy": true
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
            "线上线下考培",
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
        "data_mtime": "2026-09-12 06:41:54",
        "all_synced": true,
        "synced_count": 2,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "已剔除恶劣天气",
            "latest": "已剔除恶劣天气_4月15日起数据可用，5月1日起恶劣天气剔除可用_20260911-20260911(天)_1789166137370.xlsx",
            "mtime": "2026-09-12 06:35:43",
            "synced": true
          },
          {
            "type": "未剔除恶劣天气",
            "latest": "未剔除恶劣天气_4月15日起数据可用，5月1日起恶劣天气剔除可用_20260909-20260909(天)_1788993988086.xlsx",
            "mtime": "2026-09-10 06:46:35",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "服装标准化数据更新",
            "path": "护航服装\\update_log.txt",
            "latest": "update_log.txt",
            "mtime": "2026-09-12 06:41:57",
            "max_age_hours": 26,
            "age_hours": 10.9,
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
        "data_mtime": "2026-09-12 08:43:26",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "骑手排班明细数据",
            "latest": "骑手排班明细数据_49896033_20260912_063839.xlsx",
            "mtime": "2026-09-12 06:39:06",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "在职骑手CDP抓取",
            "path": "在职骑手详情\\_crawl_service.log",
            "latest": "_crawl_service.log",
            "mtime": "2026-09-10 07:30:12",
            "max_age_hours": 26,
            "age_hours": 58.1,
            "ok": false,
            "note": "",
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
          "key": "rider_detail",
          "label": "在职骑手详情",
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
        "data_mtime": "2026-09-12 10:04:18",
        "all_synced": false,
        "synced_count": 3,
        "missing_count": 0,
        "unsynced_count": 1,
        "sources": [
          {
            "type": "BI赔付率快照",
            "latest": "latest.json",
            "mtime": "2026-09-12 10:00:12",
            "synced": true
          },
          {
            "type": "含税保费快照",
            "latest": "premium_latest.json",
            "mtime": "2026-09-12 10:04:18",
            "synced": true
          },
          {
            "type": "V3内联数据",
            "latest": "v3_data.js",
            "mtime": "2026-09-12 08:43:27",
            "synced": true
          },
          {
            "type": "美团保险数据",
            "latest": "insurance_data.js",
            "mtime": "2026-09-08 17:11:51",
            "synced": false
          }
        ],
        "actions": [
          {
            "label": "BI赔付率快照",
            "path": "骑手保障补贴\\bi_data\\latest.json",
            "latest": "latest.json",
            "mtime": "2026-09-12 10:00:12",
            "max_age_hours": 26,
            "age_hours": 7.6,
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
            "mtime": "2026-09-12 10:04:18",
            "max_age_hours": 26,
            "age_hours": 7.6,
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
            "mtime": "2026-09-12 08:43:27",
            "max_age_hours": 26,
            "age_hours": 8.9,
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
            "mtime": "2026-09-08 17:11:51",
            "max_age_hours": 72,
            "age_hours": 96.4,
            "ok": false,
            "note": "",
            "fail_hits": [],
            "fail_lines": [],
            "block_time": null
          }
        ],
        "action_stats": {
          "ok_count": 3,
          "alert_count": 1,
          "missing_count": 0,
          "total": 4,
          "all_ok": false
        },
        "all_healthy": false
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
          "key": "ins_meituan_old",
          "label": "美团保险(旧版)",
          "file": "D:/兴达数据库/美团保险/美团保险看板.html",
          "tabs": [],
          "tab_keys": [],
          "monitored": true,
          "available": true,
          "is_self_monitor": false
        },
        {
          "key": "ins_old",
          "label": "美团保险(旧)",
          "file": "D:/兴达数据库/骑手职业伤害保障/兴必达_骑手职业伤害保障数据看板.html",
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
        "data_mtime": "2026-08-15 09:46:31",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "看板页面（自包含）",
            "latest": "110工单看板.html",
            "mtime": "2026-08-15 09:46:31",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "110工单数据更新",
            "path": "110工单\\110工单看板.html",
            "latest": "110工单看板.html",
            "mtime": "2026-08-15 09:46:31",
            "max_age_hours": 168,
            "age_hours": 679.9,
            "ok": false,
            "note": "更新频率待确认，先按 7 天",
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
          "key": "gongdan",
          "label": "110工单",
          "file": "D:/兴达数据库/110工单/110工单看板.html",
          "tabs": [],
          "tab_keys": [],
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
        "data_mtime": "2026-09-09 17:58:26",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "美团站点快照",
            "latest": "meituan_stations_snapshot.json",
            "mtime": "2026-09-09 17:58:26",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "美团站点快照更新",
            "path": "全国站点地图\\update_stations.log",
            "latest": "update_stations.log",
            "mtime": "2026-09-09 17:58:26",
            "max_age_hours": 26,
            "age_hours": 71.7,
            "ok": false,
            "note": "",
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
        "data_mtime": "2026-09-11 00:18:08",
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
            "mtime": "2026-09-11 00:18:08",
            "max_age_hours": 26,
            "age_hours": 41.3,
            "ok": false,
            "note": "",
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
        "data_mtime": "2026-09-09 08:08:49",
        "all_synced": false,
        "synced_count": 0,
        "missing_count": 0,
        "unsynced_count": 1,
        "sources": [
          {
            "type": "交通安全data.js（归档源）",
            "latest": "data.js",
            "mtime": "2026-09-12 08:43:26",
            "synced": false
          }
        ],
        "actions": [
          {
            "label": "月度累计归档",
            "path": "交通安全行为看板\\monthly_summary.js",
            "latest": "monthly_summary.js",
            "mtime": "2026-09-09 08:08:49",
            "max_age_hours": 72,
            "age_hours": 81.5,
            "ok": false,
            "note": "月度归档，可适当放宽",
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
    }
  ]
};

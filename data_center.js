window.DATA_CENTER = {
  "updated_at": "2026-09-22 11:13:17",
  "action_summary": {
    "total": 14,
    "ok": 12,
    "alert": 2,
    "missing": 0,
    "alert_groups": [
      "履约项目",
      "公司风险管理系统"
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
        "data_mtime": "2026-09-22 11:07:22",
        "all_synced": true,
        "synced_count": 13,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "站点-戴盔",
            "latest": "戴盔_2026-09-08-2026-09-14(统计日期)_1790045627448.xlsx",
            "mtime": "2026-09-22 11:00:25",
            "synced": true
          },
          {
            "type": "站点-速度",
            "latest": "速度_2026-09-08-2026-09-14(统计日期)_1790045720512.xlsx",
            "mtime": "2026-09-22 11:02:15",
            "synced": true
          },
          {
            "type": "站点-闯红灯",
            "latest": "闯红灯_2026-09-08-2026-09-14(统计日期)_1790045874239.xlsx",
            "mtime": "2026-09-22 11:03:06",
            "synced": true
          },
          {
            "type": "站点-逆行",
            "latest": "逆行_2026-09-08-2026-09-14(统计日期)_1790046023005.xlsx",
            "mtime": "2026-09-22 11:04:04",
            "synced": true
          },
          {
            "type": "骑手维度-戴盔",
            "latest": "戴盔-骑手维度_2026-09-08-2026-09-14(统计日期)_1790045627670.xlsx",
            "mtime": "2026-09-22 11:02:14",
            "synced": true
          },
          {
            "type": "骑手维度-速度",
            "latest": "速度-骑手维度_2026-09-08-2026-09-14(统计日期)_1790045720633.xlsx",
            "mtime": "2026-09-22 11:03:05",
            "synced": true
          },
          {
            "type": "骑手维度-闯红灯",
            "latest": "闯红灯-骑手维度_2026-09-08-2026-09-14(统计日期)_1790045874434.xlsx",
            "mtime": "2026-09-22 11:04:04",
            "synced": true
          },
          {
            "type": "骑手维度-逆行",
            "latest": "逆行-骑手维度_2026-09-08-2026-09-14(统计日期)_1790046023112.xlsx",
            "mtime": "2026-09-22 11:04:39",
            "synced": true
          },
          {
            "type": "安全指标监控(骑手)",
            "latest": "安全指标监控_骑手维度_20260921-20260921(日期)_1790030451126.xlsx",
            "mtime": "2026-09-22 06:40:56",
            "synced": true
          },
          {
            "type": "站维度",
            "latest": "站维度_20260921-20260921(日期)_1790030435331.xlsx",
            "mtime": "2026-09-22 06:40:39",
            "synced": true
          },
          {
            "type": "抽检不合格明细",
            "latest": "_抽检不合格的骑手明细_2026-09-19-2026-09-21(天)_1790030606708.xlsx",
            "mtime": "2026-09-22 06:43:29",
            "synced": true
          },
          {
            "type": "加盟商指标达成",
            "latest": "_加盟商指标达成情况_2026-09-19-2026-09-21(天)_1790030587856.xlsx",
            "mtime": "2026-09-22 06:43:11",
            "synced": true
          },
          {
            "type": "未剔除恶劣天气(单量)",
            "latest": "未剔除恶劣天气_4月15日起数据可用，5月1日起恶劣天气剔除可用_20260921-20260921(天)_1790030505739.xlsx",
            "mtime": "2026-09-22 06:41:50",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "交通安全数据更新",
            "path": "交通安全行为看板\\update_log.txt",
            "latest": "update_log.txt",
            "mtime": "2026-09-22 11:12:29",
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
        "data_mtime": "2026-09-22 11:03:22",
        "all_synced": false,
        "synced_count": 5,
        "missing_count": 2,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "报备和日常早会驳回清单",
            "latest": "—",
            "mtime": "--",
            "synced": null
          },
          {
            "type": "巡检工单列表",
            "latest": "巡检工单列表_1790030934472.xls",
            "mtime": "2026-09-22 06:49:22",
            "synced": true
          },
          {
            "type": "巡检平台站点检核",
            "latest": "—",
            "mtime": "--",
            "synced": null
          },
          {
            "type": "考培-学习明细记录",
            "latest": "_考培-学习明细记录_1790031061874.xlsx",
            "mtime": "2026-09-22 06:51:13",
            "synced": true
          },
          {
            "type": "骑手排班明细数据",
            "latest": "骑手排班明细数据_49896033_20260922_064716.xlsx",
            "mtime": "2026-09-22 06:47:32",
            "synced": true
          },
          {
            "type": "表单列表",
            "latest": "表单列表_49896033_20260922_065134.xlsx",
            "mtime": "2026-09-22 06:52:09",
            "synced": true
          },
          {
            "type": "载具审核-骑手明细(BI)",
            "latest": "vehicle_audit_rider.json",
            "mtime": "2026-09-22 07:03:03",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "充换电血压数据构建",
            "path": "履约项目\\充换电血压_data.js",
            "latest": "充换电血压_data.js",
            "mtime": "2026-09-22 11:03:22",
            "max_age_hours": 13,
            "age_hours": 0.2,
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
            "mtime": "2026-09-22 07:03:03",
            "max_age_hours": 30,
            "age_hours": 4.2,
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
            "mtime": "2026-09-22 11:05:15",
            "max_age_hours": 13,
            "age_hours": 0.1,
            "ok": false,
            "note": "解析最后一次刷新日志：抓取失败即告警（文件新≠数据新）",
            "fail_hits": [
              "登录态失效",
              "退出码1",
              "退出码2"
            ],
            "fail_lines": [
              "第0步 载具审核(骑手维度)BI抓取: 全部方案失败 · S1-headless自起→退出码1(数据未更新(generated_at=2026-09-21 23:03:03)) / S1b-headless重试→退出码2(数据未更新(generated_at=2026-09-21 23:03:03)) / S2-自起C",
              "第1步 烽火台当月充电/换电/血压: 全部方案失败 · S1-headless自起→退出码2(未生成 list_20260922.json) / S2-自起CDP离屏窗口→退出码1(未生成 list_20260922.json)"
            ],
            "block_time": "2026-09-22 11:05:15"
          }
        ],
        "action_stats": {
          "ok_count": 2,
          "alert_count": 1,
          "missing_count": 0,
          "total": 3,
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
        "data_mtime": "2026-09-22 11:09:54",
        "all_synced": true,
        "synced_count": 2,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "已剔除恶劣天气",
            "latest": "已剔除恶劣天气_4月15日起数据可用，5月1日起恶劣天气剔除可用_20260921-20260921(天)_1790030532019.xlsx",
            "mtime": "2026-09-22 06:42:16",
            "synced": true
          },
          {
            "type": "未剔除恶劣天气",
            "latest": "未剔除恶劣天气_4月15日起数据可用，5月1日起恶劣天气剔除可用_20260921-20260921(天)_1790030505739.xlsx",
            "mtime": "2026-09-22 06:41:50",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "服装标准化数据更新",
            "path": "护航服装\\update_log.txt",
            "latest": "update_log.txt",
            "mtime": "2026-09-22 11:10:00",
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
        "data_mtime": "2026-09-22 11:07:22",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "骑手排班明细数据",
            "latest": "骑手排班明细数据_49896033_20260922_064716.xlsx",
            "mtime": "2026-09-22 06:47:32",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "在职骑手CDP抓取",
            "path": "在职骑手详情\\_crawl_service.log",
            "latest": "_crawl_service.log",
            "mtime": "2026-09-22 10:54:40",
            "max_age_hours": 26,
            "age_hours": 0.3,
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
        "data_mtime": "2026-09-22 11:10:03",
        "all_synced": true,
        "synced_count": 4,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "BI赔付率快照",
            "latest": "latest.json",
            "mtime": "2026-09-22 10:25:03",
            "synced": true
          },
          {
            "type": "含税保费快照",
            "latest": "premium_latest.json",
            "mtime": "2026-09-22 10:27:56",
            "synced": true
          },
          {
            "type": "V3内联数据",
            "latest": "v3_data.js",
            "mtime": "2026-09-22 11:10:03",
            "synced": true
          },
          {
            "type": "美团保险数据",
            "latest": "insurance_data.js",
            "mtime": "2026-09-22 07:24:23",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "BI赔付率快照",
            "path": "骑手保障补贴\\bi_data\\latest.json",
            "latest": "latest.json",
            "mtime": "2026-09-22 10:25:03",
            "max_age_hours": 26,
            "age_hours": 0.8,
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
            "mtime": "2026-09-22 10:27:56",
            "max_age_hours": 26,
            "age_hours": 0.8,
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
            "mtime": "2026-09-22 11:10:03",
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
            "mtime": "2026-09-22 07:24:23",
            "max_age_hours": 72,
            "age_hours": 3.8,
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
        "data_mtime": "2026-09-13 19:09:23",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "看板页面（自包含）",
            "latest": "110工单看板.html",
            "mtime": "2026-09-13 19:09:23",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "110工单数据更新",
            "path": "110工单\\110工单看板.html",
            "latest": "110工单看板.html",
            "mtime": "2026-09-13 19:09:23",
            "max_age_hours": 168,
            "age_hours": 208.1,
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
        "data_mtime": "2026-09-22 11:13:16",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "美团站点快照",
            "latest": "meituan_stations_snapshot.json",
            "mtime": "2026-09-22 11:13:14",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "美团站点快照更新",
            "path": "全国站点地图\\update_stations.log",
            "latest": "update_stations.log",
            "mtime": "2026-09-22 11:13:16",
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
        "data_mtime": "2026-09-22 11:07:24",
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
            "mtime": "2026-09-22 11:07:24",
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
        "data_mtime": "2026-09-22 11:10:03",
        "all_synced": true,
        "synced_count": 1,
        "missing_count": 0,
        "unsynced_count": 0,
        "sources": [
          {
            "type": "交通安全data.js（归档源）",
            "latest": "data.js",
            "mtime": "2026-09-22 11:07:22",
            "synced": true
          }
        ],
        "actions": [
          {
            "label": "月度累计归档",
            "path": "交通安全行为看板\\monthly_summary.js",
            "latest": "monthly_summary.js",
            "mtime": "2026-09-22 11:10:03",
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
    }
  ]
};

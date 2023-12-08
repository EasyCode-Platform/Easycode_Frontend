import { DataBaseService } from "@/services/apiServices"
import { nanoid } from "nanoid"

export default {
    state: {
        appsData: [],
        currentTableInfo: {},
        currentTableFields: [],
        currentTableRecords: []
    },
    mutations: {
        setAppsData(state, arr) {
            state.appsData = arr
        },
        setCurrentTableInfo(state, obj) {
            state.currentTableInfo = obj
        },
        setCurrentTableFields(state, arr) {
            state.currentTableFields = arr
        },
        setCurrentTableRecords(state, arr) {
            state.currentTableRecords = arr
        },
        clearAppsData(state) {
            state.appsData = []
        },
        clearCurrentTableInfo(state) {
            state.currentTableInfo = {}
        },
        clearCurrentTableFields(state) {
            state.currentTableFields = []
        },
        clearCurrentTableRecords(state) {
            state.currentTableRecords = []
        },
        addNewTable(state, obj) {
            state.appsData.forEach((app, index) => {
                if (app.aid === obj.aid) {
                    state.appsData[index].tables.push(obj.table)
                    return
                }
            })
            // localStorage.setItem('appsData', JSON.stringify(state.appsData))
        },
        // 用于sidebar中切换navigation时，更新DManagaer的信息
        changeCurrentTableInfo(state, obj) {
            state.appsData.forEach((app, index1) => {
                if (app.aid === obj.aid) {
                    state.appsData[index1].tables.forEach((table, index2) => {
                        if (table.tid === obj.tid) {
                            state.currentTableInfo = state.appsData[index1].tables[index2]
                            return
                        }
                    })
                    return
                }
            })
        },
        setTableName(state, obj) {
            state.appsData.forEach((app, index1) => {
                if (app.aid === obj.aid) {
                    state.appsData[index1].tables.forEach((table, index2) => {
                        if (table.tid === obj.tid) {
                            state.appsData[index1].tables[index2].name = obj.name
                            // localStorage.setItem('appsData', JSON.stringify(state.appsData))
                            state.currentTableInfo = state.appsData[index1].tables[index2]
                            return
                        }
                    })
                    return
                }
            })
        },
        removeTable(state, obj) {
            state.appsData.forEach((app, index1) => {
                if (app.aid === obj.aid) {
                    state.appsData[index1].tables.forEach((table, index2) => {
                        if (table.tid === obj.tid) {
                            state.appsData[index1].tables.splice(index2, 1)
                            // localStorage.setItem('appsData', JSON.stringify(state.appsData))
                            return
                        }
                    })
                    return
                }
            })
        }
    },
    actions: {
        getAppsData({commit}, uid) {
            return new Promise((resolve) => {
                // 从远程获取appsData
                DataBaseService.getApps().then(({data}) => {
                    commit('setAppsData', data.appsdata)
                    resolve()
                }).catch((err) => {
                    console.log(err)
                })
                // commit('setAppsData', JSON.parse(localStorage.getItem('appsData')))
            })
        },
        createNewTable({commit}, aid) {
            return new Promise((resolve) => {
                // 从远程创建新表，返回新表的tid
                DataBaseService.createNewTable(aid).then(({data}) => {
                    commit('addNewTable', {
                        aid: aid,
                        table: {
                            tid: data.table.tid,
                            name: data.table.name,
                        }
                    })
                    resolve(data.table.tid)
                }).catch((err) => {
                    console.log(err)
                })
            })
        },
        getCurrentTableData({commit}, obj) {
            // 从远程获取表数据和字段
            DataBaseService.getTables(obj.aid, obj.tid).then(({data}) => {
                commit('setCurrentTableFields', data.fields)
                commit('setCurrentTableRecords', data.records)
            }).catch((err) => {
                console.log(err)
            })
        },
        changeTableName({commit}, obj) {
            // 修改远程的表名
            DataBaseService.changeTableInfo(obj.aid, obj.tid, {
                table: {
                    name: obj.name
                }
            }).then(() => {
                commit('setTableName', obj)
            }).catch((err) => {
                console.log(err)
            })
        },
        saveTableFields({commit}, obj) {
            // TODO: 保存表数据到远程
            localStorage.setItem('tableData' + obj.aid + '_' + obj.tid, JSON.stringify({
                fields: obj.fields,
                records: obj.records
            }))
            commit('setCurrentTableFields', obj.fields)
        },
        deleteTable({commit}, obj) {
            // 删除远程数据表
            DataBaseService.deleteTable(obj.aid, obj.tid).then(() => {
                commit('removeTable', obj)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
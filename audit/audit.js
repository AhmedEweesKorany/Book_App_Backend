const event = require("events")
const Audit = require("../models/audit.model")
const queryList = require("../db/queries")
const query = require("../db/connection")

const emmiter = new event.EventEmitter()

const auditEvent = "audit"
emmiter.on(auditEvent, async function(audit){
    console.log("Audit Event Emmiter -Aduit" , JSON.stringify(audit))
    try {
        
        // steps for acctions -- saving audits into database
        const vlaues = [audit.auditActions,JSON.stringify(audit.data),audit.status,audit.error,audit.auditBy,audit.auditOn]
        const auditQuery = queryList.AUDIT_QUERY
        await query(auditQuery,vlaues)
    } catch (error) {
        console.log("Audit Event Emmiter Error" , error)
    }
})

const prepareAudit = (auditActions,data,error,auditBy,auditOn)=>{
    let status = 200
    if (error){
        status = 500 
    }
    const auditObj = new Audit(auditActions,data,status,error,auditBy,auditOn)
    emmiter.emit(auditEvent,auditObj)
}


module.exports = {prepareAudit}
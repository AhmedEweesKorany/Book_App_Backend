const Audit = class Audit {
    constructor(auditActions,data,status,error,auditBy,auditOn){
        this.auditActions = auditActions
        this.data = data
        this.status = status 
        this.error = error
        this.auditBy = auditBy
        this.auditOn = auditOn
    }
}

module.exports = Audit
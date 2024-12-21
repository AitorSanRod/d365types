/// <reference path="types/d365.d.ts" />
/**
 * @param {D365.ExecutionContext} executionContext
 */

function data(executionContext) {
    let formContext = executionContext.getFormContext();

    formContext.getControl("").addCustomFilter(xmlFilter, entityLogicalName)
}
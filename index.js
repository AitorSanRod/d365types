/// <reference path="types/d365.d.ts" />
/**
 * @param {D365.ExecutionContext} executionContext
 */

function OnLoad(executionContext) {
    const formContext = executionContext.getFormContext();
    const name =  formContext.getAttribute("name").getValue();
}
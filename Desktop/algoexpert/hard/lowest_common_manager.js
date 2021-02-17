//Lowest Common Manager
//Recursion

//my understanding
//given three inputs: top one is the manager of some chain with the other two being employees of that company
//we want the lowest common manager of those 2 employees
//close to the "youngest common ancestor" problem
//this question deals with tree-like ds
//solving this will be clean via recursion
//for P and I --> B is the lowest common manager

//solution
//check every subtree and see where the nodes are
//F E D C = 0 bc they do not have I or P
//P = 0 + 0 + 1 = 1 under H and B
//I = 1 under B
//B = 2
//start at the stop of the chain and check for every report and lowest common manager at every subtree until it is found
//we keep doing down until we hit every report, add them up and see where is the lowest common manager 

//time complexity 
//O(n) where n is the number of people in this org chain

//space complexity 
//O(d) where d is depth of the org tree

function getLowestCommonManager(topManager, reportOne, reportTwo) {
    return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager; //#of report 1 or report 2 and top manager and get the lowest common manager
}

function getOrgInfo(manager, reportOne, reportTwo) { //helper method
    let numImportantReports = 0; //keep track of this
    for (const directReport of manager.directReports) { //for each direct report ..
        const orgInfo = getOrgInfo(directReport, reportOne, reportTwo); //we will get org info 
        if (!!orgInfo.lowestCommonManager) return orgInfo; //if we got a manager that is not none return the org info
        numImportantReports += orgInfo.numImportantReports; //increment //?
    }
    if (manager === reportOne || manager === reportTwo) numImportantReports++; //if manager is equal to report 1 or report 2 then we need to increment important reports
    const lowestCommonManager = numImportantReports == 2 ? manager : null;
    return {lowestCommonManager, numImportantReports};
}

//review this
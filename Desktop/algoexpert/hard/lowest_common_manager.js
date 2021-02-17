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

//time complexity 
//O(n)

//space complexity 
//O(d)

function getLowestCommonManager(topManager, reportOne, reportTwo) {
    return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
    let numImportantReports = 0;
    for (const directReport of manager.directReports) {
        const orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
        if (!!orgInfo.lowestCommonManager) return orgInfo;
        numImportantReports += orgInfo.numImportantReports;
    }
    if (manager === reportOne || manager === reportTwo) numImportantReports++;
    const lowestCommonManager = numImportantReports == 2 ? manager : null;
    return {lowestCommonManager, numImportantReports};
}
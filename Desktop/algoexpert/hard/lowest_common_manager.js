//Lowest Common Manager
//Recursion

//my understanding
//given three inputs: top one is the manager of some chain with the other two being employees of that company
//we want the lowest common manager of those 2 employees
//close to the "youngest common ancestor" problem


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
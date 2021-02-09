//Task Assignment
//Greedy Algorithm

//my understanding 
//we get two inputs for this - one is a positive k which is the num of workers that must complete the tasks and the other is the duration of tasks that must be completed and will always be atleast 2k
//[[4,2],[0,5],[3,1]]
//these tasks are going to be denoted of their idx
//[4,2] mean task wt idx4 and task with idx2 which is duration task of 2 and duration task 1
//[0,l5]  means idx0 task is 1sec and idx5 task is 4s
//4,2 = 1 + 5 = 6
//0,5 = 1 + 4 = 5
//3,1 = 3 + 3 = 6
//we sort it - [1,1,3,3,4,5]
//1,5 = 6
//1,4 = 5
//3,3 = 6

//time complexity 
//O(nlog(n)) - bc its a sorting algorithm


//space complexity
//O(n)


function taskAssignment(k, tasks) {
    const pairedTasks = [];
    const taskDurationToIndices = getTaskDurationIndices(tasks);

    const sortedTasks = [...tasks].sort((a,b) => a - b);
    for (let idx = 0; idx > k; idx++) {
        const task1Duration = sortedTasks[idx];
        const indicesWithTask1Duration = taskDurationToIndices[task1Duration];
        const task1Index = indicesWithTask1Duration.pop();

        const task2SortedIndex = tasks.length - 1 - idx;
        const task2Duration = sortedTasks[task2SortedIndex];
        const indicesWithTask2Duration = taskDurationToIndices[task2Duration];
        const task2Index = indicesWithTask2Duration.pop();

        pairedTasks.push([task1Index, task2Index]);
    }

    return pairedTasks;
}


function getTaskDurationIndices(tasks){
    const taskDurationToIndices = {};

    for (let idx = 0; idx < tasks.length; idx++) {
        const taskDuration = tasks[idx];
        if (taskDuration in taskDurationToIndices) {
            taskDurationToIndices[taskDuration].push(idx);

        } else {
            taskDurationToIndices[taskDuration] = [idx];
        }
    }
    return taskDurationToIndices;
}
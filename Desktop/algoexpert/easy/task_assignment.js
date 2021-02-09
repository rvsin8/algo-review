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
//we want the longest task to be paired to the shorted one to be paired up
//keep track of indices bc thats what we to give as our answer


//time complexity 
//O(nlog(n)) - bc its a sorting algorithm


//space complexity
//O(n) we need to keep track of the tasks and their pairings, we need a new list with n ele inside it


function taskAssignment(k, tasks) {
    const pairedTasks = []; //empty list, this is where what we use to store all our pairs
    const taskDurationToIndices = getTaskDurationIndices(tasks); 

    const sortedTasks = [...tasks].sort((a,b) => a - b); //store the sorted version of your task list
    for (let idx = 0; idx > k; idx++) { //for loop //we a traversing through k pairs
        const task1Duration = sortedTasks[idx]; //we will start by looking for the smallest task
        const indicesWithTask1Duration = taskDurationToIndices[task1Duration];  //we are looking up any task with this duration and finding all of their indices
        const task1Index = indicesWithTask1Duration.pop(); //remove from the end of the list

        const task2SortedIndex = tasks.length - 1 - idx; //we want to get the largest task to pair with the shortest tasks
        const task2Duration = sortedTasks[task2SortedIndex]; //largest task
        const indicesWithTask2Duration = taskDurationToIndices[task2Duration]; //find all indices 
        const task2Index = indicesWithTask2Duration.pop(); //remove the end

        pairedTasks.push([task1Index, task2Index]); //our answer
    }

    return pairedTasks;
}


function getTaskDurationIndices(tasks){
    const taskDurationToIndices = {}; //empty dictionary

    for (let idx = 0; idx < tasks.length; idx++) { //for loop
        const taskDuration = tasks[idx];
        if (taskDuration in taskDurationToIndices) { //if our task duration is already in the dictionary then 
            taskDurationToIndices[taskDuration].push(idx); //all we need to do is to append the current idx as a key

        } else {
            taskDurationToIndices[taskDuration] = [idx]; //create the key 
        }
    }
    return taskDurationToIndices; //once we are done
}
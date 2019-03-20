// This State will define everything that our app needs to be unique from one user to another
export const defaultState = {
    user:[
        {
            id: "U1",
            name: "Dev"
        },
        {
            id: "U2",
            name: "QA"
        }
    ],
    groups:[
        {
            id: "G1",
            name: "ToDo",
            owner: "U1"
        },
        {
            id: "G2",
            name: "Doing",
            owner: "U1"
        },
        {
            id: "G3",
            name: "Done",
            owner: "U2"
        }
    ],
    tasks: [
        {
            id: "T1",
            name: "Do tests",
            group: "G1",
            owner: "U1",
            isComplete: false
        },
        {
            id: "T2",
            name: "Do development",
            group: "G1",
            owner: "U1",
            isComplete: false
        },
        {
            id: "T3",
            name: "Do QA testing",
            group: "G2",
            owner: "U2",
            isComplete: false
        },
        {
            id: "T4",
            name: "Do Deployment",
            group: "G3",
            owner: "U1",
            isComplete: false
        }
    ],
    comments:[{
        id: "C1",
        owner: "U1",
        task: "T1",
        content: "Great work!"
    }]
}
import elon from "./elon.jpg"

export const collection = [
  {
    taskID : 1,
    taskName : "Tascook",
    calorie : 13,
    completedTask : 10,
    taskSum : 10,
    due : "9/23", //date型です
    icon : elon,
    select : true,
    name : "Elon",
    childTasks : {
      header : {done:true, select:false, detail:"detail"},
      component : {done:true, select:false, detail:"detailaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
      dataBase : {done:true, select:false, detail:"detail"}
    }
  },
  {
    taskID : 2,
    taskName : "Sandlot",
    calorie : 1,
    completedTask : 6,
    taskSum : 10,
    due : "5/23", //date型です
    icon : elon,
    select : false,
    name : "Elon",
    childTasks : {
      header : {done:false, select:false, detail:"detail"},
      component : {done:false, select:false, detail:"detail"},
      dataBase : {done:true, select:false, detail:"detail"}
    }
  },
  {
    taskID : 3,
    taskName : "Campusfire",
    calorie : 5,
    completedTask : 3,
    taskSum : 10,
    due : "10/7", //date型です
    icon : elon,
    select : false,
    name : "Elon",
    childTasks : {
      header : {done:false, select:false, detail:"detail"},
      component : {done:false, select:false, detail:"detail"},
      dataBase : {done:false, select:false, detail:"detail"}
    }
  },
  {
    taskID : 4,
    taskName : "Arcade",
    calorie : 5,
    completedTask : 8,
    taskSum : 12,
    due : "9/2", //date型です
    icon : elon,
    select : false,
    name : "Elon",
    childTasks : {
      header : {done:false, select:false, detail:"detail"},
      component : {done:true, select:false, detail:"detail"},
      dataBase : {done:false, select:false, detail:"detail"}
    }
  },
  {
    taskID : 5,
    taskName : "Sandlot",
    calorie : 8,
    completedTask : 1,
    taskSum : 12,
    due : "4/19", //date型です
    icon : elon,
    select : false,
    name : "Elon",
    childTasks : {
      header : {done:false, select:false, detail:"detail"},
      component : {done:false, select:false, detail:"detail"},
      dataBase : {done:false, select:false, detail:"detail"}
    }
  }
];
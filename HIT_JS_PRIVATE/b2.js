// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female

const users = [
  { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
  { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
  { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
  { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

Menu(1);
Menu(2);
Menu(3);

console.log("Có " + checkMale(users)+ " nam");
console.log("Có " + checkAge(users)+ " người có tuổi lớn hơn 15 tuổi");
console.log("Tổng tiền những người có id chẵn là: "+sum(users));
console.log(poor(users)+" nghèo nhất");
console.log(rich(users)+" giàu nhất");
Chuyen(users);

function Menu(index) {
  do {
    switch (index) {
      case 1:
        Show(users);
        break;
        case 2:
          insert(users);
          break;
      case 3:
        Dele(users);
        break;
      case 4:
        update(users,7,"Lai Tung", 19, "male", 200);
        break;
      default:
        break;
    }
  } while (index > 4);
}

function Show(users) {
  console.log("------Danh sách------\n");
  users.forEach((element) => {
    console.log("id: " + element.id);
    console.log("Name: " + element.name);
    console.log("Age: " + element.age);
    console.log("Gender: " + element.gender);
    console.log("Money: " + element.money + "\n");
  });
}

function Dele(users) {
  for (let i = 0; i < users.length-1; i++) {
    if (users[i].id == 3) {
     users.splice(i,1);
    }
  }
  users.forEach((element) => {
    console.log(element);
  });
  // Show(users);
}

function update(users, id, name, age, gender, money) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === 2) {
      users[i].id = id;
      users[i].name = name;
      users[i].age = age;
      users[i].gender = gender;
      users[i].money = money;
    }
  }
  users.forEach(element => {
    console.log(element);
  });
  // Show(users);
}

function insert(users) {
  users.push({id: 5, name: "Tung", age: 19, gender: "Male", money: 20000});
  users.push({id: 6, name: "LaiTung", age: 19, gender: "Male", money: 21000});
}

function checkMale(users) {
  let t = 0;
  users.forEach(element => {
    if(element.gender===`male`) {
      t++;
    }
  }
  );
  return t;
}

function checkAge(users) {
  let t = 0;
  users.forEach(element => {
    if(element.age>15) {
      t++;
    }
  }
  );
  return t;
}

function sum(users) {
  let t = 0;
  users.forEach(element => {
    if(element.id%2==0) {
      t+=element.money;
    }
  });
  return t;
}

function poor(users) {
  let t = users[0].money;
 
  for (let i = 0; i < users.length; i++) {
    if(t>users[i].money) {
      t = users[i].money;
    }
  }

  let t1;
  for (let i = 0; i < users.length; i++) {
    if(t===users[i].money) {
      t1 = users[i].name
    }
  } 
  return t1;
  // users.forEach(element => {
  //   if(t===element.money) {
  //     return element.name;
  //   }
  // });
}

function rich(users) {
  let max = users[0].money; 
  for (let i = 0; i < users.length; i++) {
    if(max<users[i].money) {
      max = users[i].money
    }
  }  
  let t1;
  for (let i = 0; i < users.length; i++) {
    if(max===users[i].money) {
      t1 = users[i].name
    }
  } 
  return t1;
  // users.forEach(element => {
  //   if(t===element.money) {
  //     return element.name;
  //   }
  // });
}

function Chuyen(users) {
  users.forEach(element => {
    if(element.gender===`male`) {
      element.gender = "female"
    }
  });
  users.forEach(element => {
    console.log(element);
  });
}
const user = {
  name: '后盾人', age: 2010, lesson: [
    { a: 'javaScript' }, { a: 'nestjs' }
  ]
}
user.age = 30
user.lesson.push({ a: 'css' });
console.log(user.lesson[2].a);
console.log(user.lesson[0].a);




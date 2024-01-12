# IndexedDB

## 核心概念

- 数据库：IDBDatabase 对象，数据库有版本概念，同一时刻只能有一个版本，每个域名可以建多个数据库
- 对象仓库：IDBObjectStore 对象，类似于关系型数据库的表格
- 索引： IDBIndex 对象，可以在对象仓库中，为不同的属性建立索引，主键建立默认索引
- 事务： IDBTransaction 对象，增删改查都需要通过事务来完成，事务对象提供了error,abord,complete三个回调方法，监听操作结果
- 操作请求：IDBRequest 对象
- 指针： IDBCursor 对象
- 主键集合：IDBKeyRange 对象，主键是默认建立索引的属性，可以取当前层级的某个属性，也可以指定下一层对象的属性，还可以是一个递增的整数

<br />



## 特点

- 键值对储存：内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以"键值对"的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。
- 异步：操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。
- 支持事务：意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。
- 同源限制：受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。
- 支持二进制储存：不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。
- 储存空间大：比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限。**储 存 在 电 脑 上 中 的 位 置 为 C:\Users\当 前 的 登 录 用 户\AppData\Local\Google\Chrome\User Data\Default\IndexedDB**

<br />



## 使用

```js
// 基本变量定义
let db = null;
let db_table = null;
const databaseName = 'indexDB';
const version = 1;
const data = [{  
      id:1,
      name:'张一',
      age:  1,
      email:'zhangsan@example.com' 
  },{  
      id:2,
      name:'张二',
      age:  2,
      email:'zhangsan@example.com' 
  },{  
      id:3,
      name:'张三',
      age:  3,
      email:'zhangsan@example.com' 
  },{  
      id:4,
      name:'张四',
      age:  4,
      email:'zhangsan@example.com' 
  },{  
      id:5,
      name:'张五',
      age:  5,
      email:'zhangsan@example.com' 
  }]
```



### 1. 创建数据库 & 新建表和索引

```js
const request = window.indexedDB.open(databaseName, version);

/**
 * 数据库打开失败
 */
request.onerror = function(error) {
  console.log('indexedDB 打开失败：', error);
}

/**
 * 数据库打开成功
 */
request.onsuccess = function(res) {
  console.log('indexedDB 打开成功：', res);
  db = res.target.result;
}

/*
 * 数据库升级(第一次新建库是也会触发，因为从无到有算是升级了一次)
 */
request.onupgradeneeded = function (res){
     console.log('IndexedDB 升级成功:', res);
     db = res.target.result;
  	 // 创建表group，配置项 keyPath：主键，也可以 autoIncrement: true 自动生成
     db_table = db.createObjectStore('group', { keyPath: 'id' });
     // 创建索引indexName，配置对象（说明该属性是否包含重复的值）
     db_table.createIndex('indexName', 'name', { unique: false });
}
```

<br />



### 2.  新增数据

```js
// 新建事务
const store = db.transaction(['group'], 'readwrite').objectStore('group');
const addReq = store.add({
  id: 1,
  name: '网二',
  age: 12,
  email: 'xxxx@xxx.com'
})

addReq.onsuccess = function(res) {
  console.log('数据添加成功：', res);
}

addReq.onerror = function(error) {
  console.log('数据添加失败：', error);
}
```

<br />



### 3. 读取数据

```js
// 新建事务
const store = db.transaction(['group']).objectStore('group');

const readReq = store.get(1);

readReq.onsuccess = function (event) {
  if(event.target.result){
    console.log('数据获取成功:', event.target.result);
  } else{
    console.log('未获取到数据:', event);
  }
};

readReq.onerror = function (error) {
  console.log('数据获取失败:', error);
};
```

<br />



### 4. 更新数据

更新数据使用 `IDBObjectStore.put()` 方法

```js
// 新建事务
const store = db.transaction(['group'], 'readwrite').objectStore('group');
const updateReq = store.put({
  id: 1,
  name: '张三',
  age: 24,
  email:'zhangsan@example.com'
});

updateReq.onsuccess = function (event) {
  console.log('数据更新成功:', event);
};

updateReq.onerror = function (event) {
  console.log('数据更新失败:', event);
};
```

<br />



### 5. 删除数据

更新数据使用 `IDBObjectStore.delete()` 方法

```js
// 新建事务
const store = db.transaction(['group'], 'readwrite').objectStore('group');
const removeReq = store.delete(1);

removeReq.onsuccess = function (event) {
  console.log('数据删除成功:', event);
};

removeReq.onerror = function (event) {
  console.log('数据删除失败:', event);
};
```

<br />



### 6. 数据索引

索引的意义在于，可以让你搜索任意字段，也就是说从任意字段拿到数据记录。如果不建立索引，默认只能搜索主键（即从主键取值）。

```js
const store = db.transaction(['group']).objectStore('group');
const indexReq = store.index('indexName').get('张三');

indexReq.onsuccess = function (event) {
  console.log('通过索引获取数据成功：', event.target.result);
}

indexReq.onerror = function (event) {
  console.log('通过索引获取数据失败：', event);
}
```

<br />



### 7.  遍历数据

遍历数据使用指针对象 `IDBCursor`。指针对象的 `openCursor()`方法是一个异步操作，所以要监听`success`事件。

```js
const store = db.transaction(['group']).objectStore('group');
// 获取指针对象
const cursorReq = store.openCursor();

cursorReq.onsuccess = function (event) {
  const cursor = event.target.result;
  if(cursor) {
    console.log('数据遍历成功：', cursor.value);
    cursor.continue();
  } else {
    console.log('没有更多数据了');
  }
}

cursorReq.onerror = function (event) {
  console.log('数据遍历失败:', event);
}
```

<br />



### 8. 获取整张表数据

使用 `IDBObjectStore.getAll()` 方法

```js
const store = db.transaction(['group']).objectStore('group');
const request = store.getAll();

request.onsuccess = function(event) {
  console.log('获取全部数据成功:', event.target.result);
};

request.onerror = function(event) {
  console.log('获取全部数据失败:', event);
};
```

<br />



### 9. 条件获取数据

IDBKeyRange对象：生成一个表示范围的 `Range` 对象，有四种生成方法：

- `lowerBound`：指定范围的下限
- `upperBound`：指定范围的上限
- `bound`：指定范围的上下限
- `only`：指定范围中只有一个值

```js
const store = db.transaction(['group']).objectStore('group');
// 获取id小于2的所有数据
const request = store.getAll(IDBKeyRange.upperBound(2));

request.onsuccess = function(event) {
  console.log('indexedDB getAll:', event.target.result);
};

request.onerror = function(event) {
  console.log('indexedDB getAll:', event);
};
```

<br />



## 第三方库

- [localforage](https://localforage.github.io/localForage)

<br />



**参考：**

> [前端数据存储之indexDB](https://juejin.cn/post/7025911892056997924?searchId=20240111101912A593A0EF0DB238790528)
>
> [忘记 localStorage 吧，indexedDB 才是前端存储新宠！](https://juejin.cn/post/7239259798267904059?searchId=20240111100423B4C1382A7A790F7805FD#heading-11)
# JadwalHTML 📊
[![npm version](https://img.shields.io/npm/v/jadwalhtml)](https://www.npmjs.com/package/jadwalhtml)
![downloads](https://img.shields.io/npm/dm/jadwalhtml)
![license](https://img.shields.io/npm/l/jadwalhtml)


A lightweight and customizable JavaScript library for creating dynamic HTML tables with sorting, custom fields, theming, and more.

---

## 🚀 Features

- Dynamic table rendering
- Custom columns (computed fields)
- Sorting system
- Pagination support
- Theme manager (light / dark / system)
- Striped rows, borders, hover effects
- Lightweight and fast

---

## 📦 Installation
This section explains how to use **JadwalHTML** in different environments:
- ES Modules (npm / modern frontend)
- CDN (ESM import)
- CDN (CommonJS / classic script)

### 🚀 1. ES Module Import (Recommended)
Use this when installing via npm or bundlers like Vite.
```bash
npm install jadwalhtml
```
#### Usage 
```bash
<div id='jadwal'/>
<script type='module'>
    import { Jadwal } from "jadwalhtml"
    import "jadwalhtml/style.css" ; /* import css (optionel) */

    const jadwal = new Jadwal('#jadwal' , {
        .... basic options
    })
</script>
```
### 🌐 2. CDN Import (ESM - Modern)
Use this in modern browsers with ES module support.
```bash
<div id='jadwal'/>
<script type='module'>
    import { Jadwal } from "https://cdn.jsdelivr.net/npm/jadwalhtml/dist/js/jadwal.es.js"
    import "https://cdn.jsdelivr.net/npm/jadwalhtml/dist/css/jadwal.css" ; /* import css (optionel) */

    const jadwal = new Jadwal('#jadwal' , {
        .... basic options
    })
</script>
```

### ⚡ 3. CDN Script (Classic / Global - UMD)
Use this for simple HTML projects (no module system).

```bash
<!-- css import -- >
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jadwalhtml/dist/css/jadwal.css">
<!-- js import -- >
<script src="https://cdn.jsdelivr.net/npm/jadwalhtml/dist/jadwal.umd.js"></script>
<div id='jadwal'/>
<script>
    const jadwal = new Jadwal.Jadwal('#jadwal' , {
        .... basic options
    })
</script>
```

## 🚀 Usage
Once **JadwalHTML** is imported, you can start creating dynamic tables immediately.

### 📊 Basic Table
```js
    const jadwal = new Jadwal('#jadwal' // html selector (<div id='jadwal'/> 
    {
        fields : [{label : 'name'} , {label : 'age'}] , // define table columns 
        data : [
                {name : 'Medamine' , age : 21},
                {name : 'Ahmed' , age : 24} ,
                {name : 'Salma' , age : 18}
        ]
    }
    )
```

### custom fields 
```js
    const jadwal = new Jadwal('#jadwal' // html selector (<div id='jadwal'/> 
    {
        fields : [
            {label : 'id'} // custom field examples
            {label : 'name'} , {label : 'age'}] ,
        data : [
                {name : 'Medamine' , age : 21},
                {name : 'Ahmed' , age : 24} ,
                {name : 'Salma' , age : 18}
        ] ,
        customFields : {
            "id" : (row)=> {
                return `#${row.age}_${row.name}`
            }
        }
    }
    )
```

### 📄 Pagination
```js
    const jadwal = new Jadwal('#jadwal' // html selector (<div id='jadwal'/> 
    {
        ... other options ,
        pagination : {
            enabled : true , // enable pagination 
            pageSize : 15 , // number of rows on each page (default 10)
            currentPage : 3 // define current page (default 1)
        }
    }
    )
```



### 🔃 Sorting
```js
    const jadwal = new Jadwal('#jadwal' 
    {
        ... otheroptions ,
        sortState : {
            enabled : true , // enabled table sorting 
            key : 'name' ,// define default sorting key (default null )
            order : 'desc' // order of sorting
        }
    }
    )
```

### 🎨 Theme Configuration
JadwalHTML provides a flexible theme system to customize the table appearance.

```js
const jadwal = new Jadwal("#jadwal", {
  theme: {
    mode: "system",     // light | dark | system
    striped: true,      // zebra rows
    hover: true,        // hover effect
    width: "full",      // "full" | "fit" | number (px)
    maxHeight: 400,     // scrollable table height
    border: {
      mode: "row"       // "row" | "cell" | "none"
    },
    density: "compact"  // "compact" | "default" | "spacious"
  }
});
```

### 📊 Data API (Getters & Setters)

JadwalHTML provides methods to access and manipulate table data dynamically.

---
#### 📥 Get Data
```js 
    jadwal.findAll() // get all rows 
    jadwal.findOne(e => e.name == 'Medamine') // get first records that matches callback function
    jadwal.findMany(e => e.age > 21) // get all data array of all records matching callback
    jadwal.getRow(1) // get data by row index (starting from 0)
    jadwal.slice(0,3) // Extract data from (start / end)
``` 

#### 📤 Set Data
```js
// replace all data
jadwal.setData([
  { name: "Ali", age: 25 }
]);
```


#### ➕ Add Data
```js 
// add one row
jadwal.addRow({ name: "Sara", age: 22 });

// add multiple rows
jadwal.addMany([
  { name: "Yassine", age: 19 },
  { name: "Salma", age: 21 }
]);
```

#### ✏️ Update Data
```js 
// update row by index
jadwal.updateRow(0, { age: 30 });

// update first match
jadwal.updateOne(
  row => row.name === "Ahmed",
  { age: 28 }
);

// update multiple rows
jadwal.updateMany(
  row => row.age < 20,
  { status: "young" }
);
```

#### ❌ Delete Data
```js 
// delete by index
jadwal.deleteRow(0);

// delete first match
jadwal.deleteOne(row => row.name === "Ahmed");

// delete multiple rows
jadwal.deleteMany(row => row.age < 18);
```

#### 🔍 Filter Data
```js
jadwal.filter(row => row.age > 20);
```

#### 🔃 Sort Data
```js 
jadwal.sort("name", "asc"); // or "desc"
```


---

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

We welcome contributions of all kinds:
- Bug fixes
- Feature requests
- Improvements

Feel free to open an issue or submit a pull request.

---

## ⭐ Show your support

If you find JadwalHTML useful, please ⭐ the repository and share it!
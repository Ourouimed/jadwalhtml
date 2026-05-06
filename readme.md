# JadwalHTML 📊
[![npm version](https://img.shields.io/npm/v/jadwalhtml)](https://www.npmjs.com/package/jadwalhtml)
![downloads](https://img.shields.io/npm/dm/jadwalhtml)
![license](https://img.shields.io/npm/l/jadwalhtml)

## Table of contetnt
- [JadwalHTML 📊](#jadwalhtml-)
  - [Table of contetnt](#table-of-contetnt)
  - [🚀 Features](#-features)
  - [📦 Installation](#-installation)
    - [🚀 1. ES Module Import (Recommended)](#-1-es-module-import-recommended)
      - [Usage](#usage)
    - [🌐 2. CDN Import (ESM - Modern)](#-2-cdn-import-esm---modern)
    - [⚡ 3. CDN Script (Classic / Global - UMD)](#-3-cdn-script-classic--global---umd)
  - [🚀 Usage](#-usage)
    - [📊 Basic Table](#-basic-table)
    - [custom fields](#custom-fields)
    - [📄 Pagination](#-pagination)
    - [🔃 Sorting](#-sorting)
    - [🎨 Theme Configuration](#-theme-configuration)
  - [⚛️ React Integration (v0.1.7)](#️-react-integration-v017)
    - [⚠️ Important Note on React Support](#️-important-note-on-react-support)
    - [1. Hook Setup](#1-hook-setup)
    - [2. Data Management Strategies](#2-data-management-strategies)
      - [🔵 Strategy A: React State Management (Recommended)](#-strategy-a-react-state-management-recommended)
      - [🔴 Strategy B: Imperative Instance Management](#-strategy-b-imperative-instance-management)
    - [⛔ CRITICAL WARNING: Do Not Mix Methods](#-critical-warning-do-not-mix-methods)
  - [📊 Data API (Getters \& Setters)](#-data-api-getters--setters)
      - [📥 Get Data](#-get-data)
      - [📤 Set Data](#-set-data)
      - [➕ Add Data](#-add-data)
      - [✏️ Update Data](#️-update-data)
      - [❌ Delete Data](#-delete-data)
      - [🔍 Filter Data](#-filter-data)
      - [🔃 Sort Data](#-sort-data)
  - [📄 License](#-license)
  - [🤝 Contributing](#-contributing)
  - [⭐ Show your support](#-show-your-support)

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

## ⚛️ React Integration (v0.1.7)

Integrating **JadwalHTML** into a React project requires a "Bridge Pattern" because the library operates directly on the DOM, bypassing React's Virtual DOM.

### ⚠️ Important Note on React Support
**JadwalHTML** is currently a Vanilla JavaScript library. It does not natively support:
*   JSX rendering inside cells.
*   React Context or Hooks inside `customFields`.
*   Automatic reconciliation with React State.

---

### 1. Hook Setup
To manage the lifecycle of the table, use the `useJadwal` hook. You can generate it automatically via the CLI or create it manually.

**Command Line Setup:**
```bash
npx jadwal-react 
```

**Manual Setup (`src/hooks/useJadwal.js`):**
```js
import { useEffect, useRef } from "react";
import {Jadwal} from "jadwalhtml";

export function useJadwal(options) {
  const ref = useRef(null);
  const instance = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    instance.current = new Jadwal(ref.current, options);

    return () => instance.current?.destroy?.();
  }, []);

  return { ref, instance };
}
```


### 2. Data Management Strategies
There are two ways to manage data in React. Choose only one per component. Mixing them will cause synchronization bugs.
#### 🔵 Strategy A: React State Management (Recommended)
This is the standard approach. React State is the single source of truth. The table is a "subscriber" to that state.
```js
import { useState, useEffect } from "react";
import { useJadwal } from "./hooks/useJadwal";

const UserTable = () => {
  const [data, setData] = useState([{ name: "Ahmed", age: 25 }]);
  const { ref, instance } = useJadwal(
    {
        fields: [{ label: "name" }, { label: "age" }],
        data: data
    }
  );

  useEffect(() => {
    if (instance.current) {
      instance.current.setData(data);
    }
  }, [data]);

  const handleAdd = () => { 
    setData(prev => [...prev, { name: "New User", age: 30 }]);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add User</button>
      <div ref={ref} />
    </div>
  );
};
```

####  🔴 Strategy B: Imperative Instance Management
Use this if you want to bypass React's render cycle for performance or if you are managing data entirely inside the library.
```js
import { useState, useEffect } from "react";
import { useJadwal } from "./hooks/useJadwal";

const UserTable = () => {
  const { ref, instance } = useJadwal(
    {
        fields: [{ label: "name" }, { label: "age" }],
        data: [{ name: "Ahmed", age: 25 }]
    }
  );

  const handleAdd = () => {
    // Uses Jadwal's internal DataManager directly.
    instance.addRow({ name: "New User", age: 30 });
  };

  return (
    <div>
      <button onClick={handleAdd}>Add User</button>
      <div ref={ref} />
    </div>
  );
};
```
### ⛔ CRITICAL WARNING: Do Not Mix Methods
NEVER use built-in methods (addRow, deleteRow, updateOne...) if you are also using a React useState array to sync data via setData.

## 📊 Data API (Getters & Setters)

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
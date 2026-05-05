import { DataManager } from "../modules/data.js";
import { Renderer } from "../modules/renderer.js";
import { Pagination } from "../modules/pagination.js";
import ThemeManager from "../modules/theme.js";

class Jadwal {
  constructor(selector, options = {}) {
    this.container = document.querySelector(selector);

    this.data = new DataManager(options.data);
    this.renderer = new Renderer();
    this.pagination = new Pagination(options.pagination || {});
    this.theme = new ThemeManager(options.theme || {}).getTheme()


    this.fields = options.fields || [];
    this.customFields = options.customFields || {};


    this.sortState = {
        enabled : false ,
        order : 'asc' ,
         ...options.sortState
      }

    

    this.refresh();
  }

  refresh() {
  const allData = this.data.findAll();

  this.pagination.setTotal(allData.length);

  const paginated = this.pagination.paginate(allData);

  this.renderer.renderTable(
  this.container,
  paginated,
  this.fields,
  this.customFields,
  {
    enabled : this.pagination.enabled ,
    current: this.pagination.currentPage,
    totalPages: this.pagination.totalPages(),
    total: allData.length,
    pageSize: this.pagination.pageSize,

    onPrev: () => {
      this.pagination.prev();
      this.refresh();
    },

    onNext: () => {
      this.pagination.next();
      this.refresh();
    },

    onPage: (page) => {
      this.pagination.goTo(page);
      this.refresh();
    },

     onSort: (label) => {
      if (this.sortState.enabled){
        const key = label.toLowerCase();

        if (this.sortState.key === key) {
          this.sortState.order =
            this.sortState.order === "asc" ? "desc" : "asc";
        } else {
          this.sortState.key = key;
          this.sortState.order = "asc";
        }

        this.sort(key, this.sortState.order)

      }
      
    } ,

    
  } ,
  this.sortState ,
  this.theme
);
}


  setData(data) {
    this.data.set(data);
    this.refresh();
  }

  addRow(row) {
    this.data.add(row);
    this.refresh();
  }

  addMany(rows) {
    this.data.addMany(rows);
    this.refresh();
  }

  findAll() {
    return this.data.findAll();
  }

  findOne(callback){
    return this.data.findOne(callback);
  }

  findMany(callback){
    return this.data.findMany(callback);
  }




  deleteRow(index) {
    this.data.deleteRow(index);
    this.refresh();
  }

  deleteOne(callback){
    this.data.deleteOne(callback);
    this.refresh();
  }

  deleteMany(callback){
    this.data.deleteMany(callback);
    this.refresh();
  } 

  filter(callback){
    const filtredData = this.data.filter(callback);
    this.refresh();
    return filtredData
  }



  updateRow(index, newData) {
    this.data.updateRow(index, newData);
    this.refresh();
  }

  updateOne(callback, newData){   
    this.data.updateOne(callback, newData);
    this.refresh();
  }

  updateMany(callback, newData){
    const items = this.data.findMany(callback);
    items.forEach(item => {
        this.data.updateOne(i => i === item, newData);
    });
    this.refresh();
  }


  getRow(index) {
    return this.data.getRow(index);
  }

  slice(start, end) {
    return this.data.slice(start, end);
  }

  sort(key, order = 'asc') {
    this.data.sort(key, order);
    this.refresh();
  }
}

export default Jadwal;
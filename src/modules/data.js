export class DataManager {
  constructor(data = []) {
    this.rawData = data.map(obj =>
      Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
      )
    );
  }
  // set new data
  set(data) {
    this.rawData = data.map(obj =>
      Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
      )
    );
  }


  // find methods
  findAll() {
    return this.rawData;
  }
  findOne(callback){
    return this.rawData.find(callback);
  }
  findMany(callback){
    return this.rawData.filter(callback);
  }


  // add methods
  add(row) {
    this.rawData.push(row);
  }
  addMany(rows) {
    this.rawData.push(...rows);
  }

  // delete row by index
  deleteRow(index) {
    this.rawData.splice(index, 1);
  }
   
  // delete row by callback
  deleteOne(callback){
    const index = this.rawData.findIndex(callback);
    if(index !== -1){
      this.rawData.splice(index, 1);
    }
  }

  // DELETE MANY by callback
  deleteMany(callback){
    this.rawData = this.rawData.filter(item => !callback(item));
  }

  // filter TABLE data by callback
  filter(callback){
    this.rawData = this.rawData.filter(callback);
    return this.rawData
  }

  // update row by index
  updateRow(index, newData) {
    this.rawData[index] = {
      ...this.rawData[index],
      ...newData
    };
  }

  // update one row by callback
  updateOne(callback, newData){
    const index = this.rawData.findIndex(callback);
    if(index !== -1){
      this.rawData[index] = {
        ...this.rawData[index],
        ...newData
      };
    }
    }
    
    // update many rows by callback
    updateMany(callback, newData){
      this.rawData = this.rawData.map(item => {
        if(callback(item)){
          return {
            ...item,
            ...newData
          };
        }
        return item;
      });
    }

    // get row by index
    getRow(index) {
      return this.rawData[index];
    }

    slice(start, end) {
      return this.rawData.slice(start, end);
    }
    

    // sort data by key and order
    sort(key, order = 'asc') {
      const keyLowerCase = key.toLowerCase()
      this.rawData.sort((a, b) => {
        if (a[keyLowerCase] < b[keyLowerCase]) return order === 'asc' ? -1 : 1;
        if (a[keyLowerCase] > b[keyLowerCase]) return order === 'asc' ? 1 : -1;
        return 0;
      });
    }


  
}
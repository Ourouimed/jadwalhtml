export class Pagination {
  constructor(options = {}) {
    this.enabled = options.enabled || false;
    this.pageSize = options.pageSize || 10;
    this.currentPage = options.currentPage || 1;
    this.totalItems = 0;
  }

  setTotal(total) {
    this.totalItems = total;
  }

  onPag(page){
    this.pagination.goTo(page);
    this.refresh();
    }
    
  totalPages() {
    return Math.ceil(this.totalItems / this.pageSize) || 1;
  }

  paginate(data) {
  if (!this.enabled) {
    return data.map((item, index) => ({
      ...item,
      _index: index + 1
    }));
  }

  const start = (this.currentPage - 1) * this.pageSize;
  const end = start + this.pageSize;

  return data.slice(start, end).map((item, index) => ({
    ...item,
    _index: start + index + 1 // 👈 real index
  }));
}

  next() {
    if (this.currentPage < this.totalPages()) this.currentPage++;
  }

  prev() {
    if (this.currentPage > 1) this.currentPage--;
  }

  goTo(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }
}
import { ChevronUp, ChevronDown, ChevronsUpDown, createElement } from "lucide";
export class Renderer {
  renderTable(container, data, fields, customFields, pagination = null , sortState , theme) {
    container.innerHTML = "";
    container.className = "jadwal-container"



    if(theme.mode === 'dark') container.classList.add('dark')
    else if(theme.mode === 'light') container.classList.add('light')
    else container.classList.add("system")


    // create table wrapper
    const table_wrapper = document.createElement("div")
    table_wrapper.className = "table-wrapper"


    // create table
    const table = document.createElement("table");
    table.className = "jadwal-table";


    // SET CONFIG STYLES 
    if (theme.striped) table.classList.add("jadwal-striped")
    if (theme.width === 'full') {
        container.style.width = "100%"
    }
    else if (!isNaN(parseInt(theme.width))){
      container.style.width = theme.width + 'px'
    }
    else container.style.width = "fit-content"

    if (theme.hover){
      table.classList.add('hoverable')
    }

    if (!isNaN(parseInt(theme.maxHeight))){
      table_wrapper.style.maxHeight = theme.maxHeight + "px"
    }

    if (['cell' , 'none' , 'row'].includes(theme?.border?.mode)){
      table.classList.add(`border-${theme.border?.mode}`)
    }

    if (['compact' , 'spacious'].includes(theme.density)){
      table.classList.add(`jadwal-${theme.density}`)
    }


    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const tr = document.createElement("tr");


    // create thead cells 
    fields.forEach(f => {
      const th = document.createElement("th");

      const key = f.label.toLowerCase();


      if (sortState?.enabled) {
        th.style.cursor = "pointer";

        const sortKey = sortState?.key;
        const sortOrder = sortState?.order;

        const iconWrapper = document.createElement("span");
        iconWrapper.style.display = "inline-flex";
        iconWrapper.style.alignItems = "center";
        iconWrapper.style.gap = "6px";

        const text = document.createElement("span");
        text.textContent = f.label;

        let icon;

        if (sortKey !== key) {
          icon = createElement(ChevronsUpDown);
        } else if (sortOrder === "asc") {
          icon = createElement(ChevronUp);
        } else {
          icon = createElement(ChevronDown);
        }

        icon.style.width = "14px";
        icon.style.height = "14px";

        iconWrapper.appendChild(text);
        iconWrapper.appendChild(icon);

        th.appendChild(iconWrapper);

        th.addEventListener("click", () => {
          pagination.onSort(f.label);
        });

      } else {
        th.textContent = f.label;
      }

      tr.appendChild(th);
    });
    thead.appendChild(tr);




    
    data.map(r => r).forEach((row, i) => {
      const tr = document.createElement("tr");

      fields.forEach(f => {
        const td = document.createElement("td");

        if (customFields[f.label]) {
          const content = customFields[f.label](row, i);

          if (content instanceof HTMLElement) {
            td.appendChild(content);
          } else {
            td.innerHTML = content;
          }
        } else {
          td.textContent = row[f.label.toLowerCase()] ?? "";
        }

        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    
    table_wrapper.appendChild(table)
    container.appendChild(table_wrapper);


    if (pagination?.enabled) {
  const wrapper = document.createElement("div");
  wrapper.className = "pagination-container";

  const navButtons = document.createElement("div");
  navButtons.className = "pagination";

  const navPages = document.createElement("div");
  navPages.className = "pagination-pages";

  const totalPages = pagination.totalPages;
  const current = pagination.current;
  const delta = 2;

  const start =
    (current - 1) * pagination.pageSize + 1;

  const end = Math.min(
    current * pagination.pageSize,
    pagination.total
  );

  // INFO TEXT
  const info = document.createElement("span");
  info.className = "pagination-info";
  info.textContent = `Showing ${start} - ${end} of ${pagination.total}`;

  // BUTTON FACTORY
  const createBtn = (page) => {
    const btn = document.createElement("button");
    btn.textContent = page;

    if (page === current) {
      btn.disabled = true;
      btn.classList.add("active");
    }

    btn.onclick = () => {
      pagination.onPage(page);
    };

    navPages.appendChild(btn);
  };



  const createDots = () => {
    const span = document.createElement("span");
    span.textContent = "...";
    navPages.appendChild(span);
  };

  // 🔹 Prev
  const prev = document.createElement("button");
  prev.textContent = "Prev";
  prev.disabled = current === 1;
  prev.onclick = pagination.onPrev;
  navButtons.appendChild(prev);

  // 🔹 First page
  createBtn(1);

  // 🔹 Left dots
  if (current > delta + 2) createDots();

  // 🔹 Middle pages
  const startPage = Math.max(2, current - delta);
  const endPage = Math.min(totalPages - 1, current + delta);

  for (let i = startPage; i <= endPage; i++) {
    createBtn(i);
  }


    navButtons.appendChild(navPages);

  // 🔹 Right dots
  if (current < totalPages - (delta + 1)) createDots();

  // 🔹 Last page
  if (totalPages > 1) createBtn(totalPages);

  // 🔹 Next
  const next = document.createElement("button");
  next.textContent = "Next";
  next.disabled = current === totalPages;
  next.onclick = pagination.onNext;
  navButtons.appendChild(next);

  wrapper.appendChild(info);
  wrapper.appendChild(navButtons);

  container.appendChild(wrapper);
}
}

      
}
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css'],
})
export class ListViewsComponent implements OnInit {
  @ViewChild('imageTmpl', { static: true }) imageTmpl!: TemplateRef<any>;
  @ViewChild('titleTmpl', { static: true }) titleTmpl!: TemplateRef<any>;
  @ViewChild('viewTmpl', { static: true }) viewTmpl!: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl!: TemplateRef<any>;

  data: any[] = [];
  filteredData: any[] = [];
  cols: any[] = [];
  filters: { [key: string]: 'asc' | 'desc' | null } = {}; 
  ColumnMode = ColumnMode;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cols = [
      {
        cellTemplate: this.imageTmpl,
        headerTemplate: this.hdrTpl,
        name: 'image',
        maxWidth: 180,
      },
      {
        cellTemplate: this.titleTmpl,
        headerTemplate: this.hdrTpl,
        name: 'title',
      },
      {
        cellTemplate: this.viewTmpl,
        headerTemplate: this.hdrTpl,
        name: 'views',
      },
    ];

    this.cargarData();
  }

  cargarData(): void {
    this.restService.get('assets/data.json').subscribe(
      (data: any) => {
        this.data = data.posts;
        this.filteredData = [...this.data];
      },
      (error) => {
        console.error('Error al cargar los datos desde el archivo JSON', error);
      }
    );
  }


  onHeaderClick(column: any): void {
    const columnName = column.name;

   
    if (!this.filters[columnName]) {
      this.filters[columnName] = 'asc';
    } else if (this.filters[columnName] === 'asc') {
      this.filters[columnName] = 'desc';
    } else {
      delete this.filters[columnName];
    }

    this.applyFilter();
  }

  applyFilter(): void {
    const activeFilters = Object.entries(this.filters).filter(
      ([, direction]) => direction
    );

    if (activeFilters.length === 0) {
      this.filteredData = [...this.data];
      return;
    }

    this.filteredData = [...this.data].sort((a, b) => {
      for (const [key, direction] of activeFilters) {
        const dir = direction === 'asc' ? 1 : -1;

        if (a[key] > b[key]) return dir;
        if (a[key] < b[key]) return -dir;
      }
      return 0;
    });
  }
}

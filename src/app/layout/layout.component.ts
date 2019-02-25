import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { UtilsService } from '@services/utils.service';
import { GlobalService } from '@services/global.service';
import { LayoutConfigService } from '@services/layout-config.service';

@Component({
  selector: 'cat-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit, OnDestroy {
  drawerVisible: boolean = false;

  constructor(
    private utils: UtilsService,
    public global: GlobalService,
    private layoutConfig: LayoutConfigService
  ) {}

  ngOnInit() {
    this.layoutConfig.config.subscribe(config => {
      console.log(config);
    });
    this.layoutConfig.config = {
      navbar: {
        collapsed: true
      }
    };
  }

  ngOnDestroy() {}

  openSetting(): void {
    this.drawerVisible = true;
  }
  handleDrawerClose(): void {
    this.drawerVisible = false;
  }
}

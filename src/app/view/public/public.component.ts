import {Component, Injectable, OnInit} from '@angular/core';
import {MenuService} from '../shared/slide-bar/app.menu.service';
import {PrimeNGConfig} from 'primeng/api';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
@Injectable({
  providedIn: 'root' // just before your class
})
export class PublicComponent {
  overlayMenuActive: boolean;
  overlayMenuActive2: boolean;
  staticMenuDesktopInactive: boolean;
  staticMenuMobileActive: boolean;
  staticMenuMobileActive2: boolean;
  layoutMenuScroller: HTMLDivElement;
  menuClick: boolean;
  userMenuClick: boolean;
  notificationMenuClick: boolean;
  notificationMenuClick2: boolean;
  rightMenuClick: boolean;
  resetMenu: boolean;
  menuHoverActive: boolean;
  topbarUserMenuActive: boolean;
  topbarNotificationMenuActive: boolean;
  topbarNotificationMenuActive2: boolean;
  rightPanelMenuActive: boolean;
  configActive: boolean;
  configClick: boolean;
  profileClick: boolean;
  inlineUserMenuActive = false;

  constructor(private menuService: MenuService, private primengConfig: PrimeNGConfig, public app: AppComponent) {
  }

  onLayoutClick() {
    if (!this.userMenuClick) {
      this.topbarUserMenuActive = false;
    }

    if (!this.notificationMenuClick) {
      this.topbarNotificationMenuActive = false;
    }
    if (!this.notificationMenuClick2) {
      this.topbarNotificationMenuActive2 = false;
    }
    if (!this.rightMenuClick) {
      this.rightPanelMenuActive = false;
    }

    if (!this.profileClick && this.isSlim()) {
      this.inlineUserMenuActive = false;
    }

    if (!this.menuClick) {
      if (this.isHorizontal() || this.isSlim()) {
        this.menuService.reset();
      }

      if (this.overlayMenuActive || this.staticMenuMobileActive) {
        this.hideOverlayMenu();
      }

      this.menuHoverActive = false;
      this.unblockBodyScroll();
    }

    if (this.configActive && !this.configClick) {
      this.configActive = false;
    }

    this.configClick = false;
    this.userMenuClick = false;
    this.rightMenuClick = false;
    this.notificationMenuClick = false;
    this.notificationMenuClick2 = false;
    this.menuClick = false;
    this.profileClick = false;
  }


  onMenuClick(event) {
    this.menuClick = true;
    this.resetMenu = false;
  }


  isHorizontal() {
    return this.app.layoutMode === 'horizontal';
  }

  isSlim() {
    return this.app.layoutMode === 'slim';
  }

  isOverlay() {
    return this.app.layoutMode === 'overlay';
  }

  isDesktop() {
    return window.innerWidth > 896;
  }

  isTablet() {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
  }

  hideOverlayMenu() {
    this.overlayMenuActive = false;
    this.staticMenuMobileActive = false;
  }

  hideOverlayMenu2() {
    this.overlayMenuActive2 = false;
    this.staticMenuMobileActive2 = false;
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
          'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
}




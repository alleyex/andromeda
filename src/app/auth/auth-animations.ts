import { trigger, animateChild, group, transition, animate, style, query } from '@angular/animations';

export const authAnimation =
    trigger('routeAnimation', [
        transition('sign-in <=> sign-up', [
            style({ position: 'relative' }),
            // query() 函式允許你查詢正在播放動畫的元素內部的元素。
            // 此函式會針對父元件中的特定 HTML 元素，並把動畫單獨應用於其中的每個元素。
            // Angular 會智慧地處理初始化、收尾和清理工作，因為它負責協調頁面中的這些元素。
            // query(':enter',':leave')：查詢新插入&移除的元素。
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            // :enter 是 void => * 的別名
            // query(":enter") 查詢新插入元素。
            query(':enter', [
                style({
                    left: '-100%',
                   
                })
            ]),
            // :leave 是 * => void 的別名
            query(':leave', animateChild()),
            // animateChild() 允許子元件上的動畫和父元件在同一個時間範圍（timeframe）內執行。
            // 每當 Angular 觸發動畫時，總是父動畫優先，而子動畫被阻塞。 
            // 為了執行子動畫，父動畫必須查詢每個包含子動畫的元素，並使用該函式執行它們。
            // 設計該特性是為了和 query() 一起使用的，所以它只處理使用 Angular 動畫庫產生的動畫。
            // 本 API 不會處理 CSS 關鍵幀動畫和轉場動畫。
            query(':enter', animateChild()),
            // group 可以配置不同的時序。它們會同時作用於同一個元素，但彼此獨立執行。
            group([
                query(':leave', [
                    animate('3000ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('3000ms ease-out', style({ left: '0%' }))
                ])
            ]),
        ])
    ]);
